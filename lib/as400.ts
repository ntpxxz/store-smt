import { logger, captureException } from './logger';
import prisma from './prisma';
import { addSyncHistory } from './sync-history';

// NOTE: ibm_db is a native module. It must be installed and the environment prepared on the host.
// Connection string should be provided via AS400_CONN env variable (DRIVER={IBM i Access ODBC Driver};SYSTEM=...;UID=...;PWD=... etc)
let ibmdb: any = null;

async function ensureIbmDb() {
    if (ibmdb) return ibmdb;
    try {
        // Avoid static analysis by bundlers: use runtime require via eval
        const req: NodeRequire = eval('require');
        ibmdb = req('ibm_db');
        return ibmdb;
    } catch (e) {
        logger.warn('ibm_db not available at runtime; AS400 functions will fail until dependency is installed and environment configured');
        throw e;
    }
}

const AS400_CONN = process.env.AS400_CONN || '';

async function openConnection() {
    const ibm = await ensureIbmDb();
    if (!ibm) throw new Error('ibm_db module not available');
    if (!AS400_CONN) throw new Error('AS400_CONN not configured');

    return new Promise<any>((resolve, reject) => {
        ibm.open(AS400_CONN, (err: any, conn: any) => {
            if (err) return reject(err);
            resolve(conn);
        });
    });
}

async function runQuery(sql: string, params: any[] = []) {
    let conn: any = null;
    try {
        conn = await openConnection();
        return await new Promise<any>((resolve, reject) => {
            conn.query(sql, params, (err: any, data: any) => {
                try { conn.close(); } catch (_) {}
                if (err) return reject(err);
                resolve(data);
            });
        });
    } catch (err) {
        captureException(err, { component: 'as400', query: sql });
        throw err;
    }
}

// Map AS400 PO row to InboundInvoice shape used by app
function mapPOToInbound(row: any) {
    // Adjust field names according to your AS400 schema
    return {
        id: String(row.PO_NO || row.PONO || row.PO_ID),
        vendor: String(row.VENDOR || row.SUPPLIER || row.SUPPLIER_ID || 'Unknown'),
        po: String(row.PO_NO || row.PONO || row.PO_ID),
        status: (row.STATUS || 'pending').toLowerCase(),
        items: [], // items fetched separately
    };
}

// Map AS400 MO row to ProductionOrder shape
function mapMOToProductionOrder(row: any) {
    return {
        id: String(row.MO_NO || row.MO_ID || row.ORDER_NO),
        status: (row.STATUS || 'ready').toLowerCase(),
        line: String(row.LINE || row.WORK_CENTER || 'PD-01'),
        description: String(row.DESCRIPTION || row.ITEM_DESC || ''),
        dueTime: row.DUE_DATE ? String(row.DUE_DATE) : (row.DUE_TIME ? String(row.DUE_TIME) : ''),
        progress: Number(row.PROGRESS || 0),
        parts: [],
    };
}

async function getAS400POLinesRaw(poId: string) {
    const sql = process.env.AS400_SQL_GET_PO_LINES || 'SELECT PO_NO, LINE_NO, SKU, ITEM_NAME, QTY, UNIT FROM YOURLIB.PO_LINES WHERE PO_NO = ?';
    return await runQuery(sql, [poId]);
}

async function getAS400MOPartsRaw(moId: string) {
    const sql = process.env.AS400_SQL_GET_MO_LINES || 'SELECT MO_NO, LINE_NO, PART_SKU, PART_NAME, REQ_QTY, UNIT FROM YOURLIB.MO_LINES WHERE MO_NO = ?';
    return await runQuery(sql, [moId]);
}

export async function getAS400POs(since?: Date | null): Promise<any[]> {
    // If an incremental SQL is provided via env and a since timestamp is passed, use it.
    const incrementalSql = process.env.AS400_SQL_GET_POS_INCREMENTAL;
    const fullSql = process.env.AS400_SQL_GET_POS || 'SELECT PO_NO, VENDOR, STATUS FROM YOURLIB.PO_HEAD';
    const sql = (since && incrementalSql) ? incrementalSql : fullSql;
    const params = (since && incrementalSql) ? [since.toISOString()] : [];

    logger.info({ sql, params: params.length ? params : undefined, since: since?.toISOString() }, 'Querying AS400 for POs');
    const rows = await runQuery(sql, params);
    return rows.map(mapPOToInbound);
}

export async function getAS400MOs(since?: Date | null): Promise<any[]> {
    const incrementalSql = process.env.AS400_SQL_GET_MOS_INCREMENTAL;
    const fullSql = process.env.AS400_SQL_GET_MOS || 'SELECT MO_NO, STATUS, LINE, DESCRIPTION, DUE_DATE, PROGRESS FROM YOURLIB.MO_HEAD';
    const sql = (since && incrementalSql) ? incrementalSql : fullSql;
    const params = (since && incrementalSql) ? [since.toISOString()] : [];

    logger.info({ sql, params: params.length ? params : undefined, since: since?.toISOString() }, 'Querying AS400 for MOs');
    const rows = await runQuery(sql, params);
    return rows.map(mapMOToProductionOrder);
}

// Upsert with full line-item import and deduping, now incremental using SyncCheckpoint
export async function syncPOsToLocal(batchSize = 100) {
    // read checkpoint
    const cp = await prisma.syncCheckpoint.findUnique({ where: { type: 'po' } }).catch(() => null);
    const since = cp?.lastSynced ?? null;

    try {
        const pos = await getAS400POs(since);
        let imported = 0;
        for (let i = 0; i < pos.length; i += batchSize) {
            const batch = pos.slice(i, i + batchSize);
            for (const po of batch) {
                // fetch lines
                const lines = await getAS400POLinesRaw(po.id);

                // Upsert invoice header
                await prisma.inboundInvoice.upsert({
                    where: { id: po.id },
                    create: {
                        id: po.id,
                        vendor: po.vendor,
                        po: po.po,
                        status: po.status || 'pending',
                    },
                    update: {
                        vendor: po.vendor,
                        status: po.status || 'pending',
                        updatedAt: new Date(),
                    },
                });

                // Sync line items: dedupe by invoiceId + sku
                for (const ln of lines) {
                    const sku = String(ln.SKU || ln.PART_SKU || ln.ITEM_CODE || ln.ITEM_SKU || '').trim();
                    if (!sku) continue; // skip malformed
                    const name = String(ln.ITEM_NAME || ln.PART_NAME || ln.DESCRIPTION || ln.NAME || '').trim();
                    const qty = Number(ln.QTY || ln.REQ_QTY || ln.QTY_ORDERED || 0);
                    const unit = String(ln.UNIT || ln.UOM || 'pcs');

                    // Try to find existing inbound item for this invoice and sku
                    const existing = await prisma.inboundItem.findFirst({ where: { invoiceId: po.id, sku } });
                    if (existing) {
                        await prisma.inboundItem.update({ where: { id: existing.id }, data: { name, qty, unit, updatedAt: new Date() } });
                    } else {
                        await prisma.inboundItem.create({ data: { name, sku, qty, unit, invoiceId: po.id } });
                    }
                }

                imported += 1;
            }
        }
        // update checkpoint to now
        try {
            await prisma.syncCheckpoint.upsert({
                where: { type: 'po' },
                create: { type: 'po', lastSynced: new Date() },
                update: { lastSynced: new Date() },
            });
        } catch (e) {
            logger.warn('Failed to update PO sync checkpoint', String(e));
        }

        // record history
        try { await addSyncHistory({ type: 'po', imported, success: true, details: { count: pos.length, since: since?.toISOString() } }); } catch (e) { /* ignore */ }
        return { imported };
    } catch (err) {
        try { await addSyncHistory({ type: 'po', imported: 0, success: false, details: { error: String(err), since: since?.toISOString() } }); } catch (e) { /* ignore */ }
        captureException(err, { component: 'as400', action: 'syncPOs' });
        throw err;
    }
}

export async function syncMOsToLocal(batchSize = 100) {
    const cp = await prisma.syncCheckpoint.findUnique({ where: { type: 'mo' } }).catch(() => null);
    const since = cp?.lastSynced ?? null;

    try {
        const mos = await getAS400MOs(since);
        let imported = 0;
        for (let i = 0; i < mos.length; i += batchSize) {
            const batch = mos.slice(i, i + batchSize);
            for (const mo of batch) {
                // fetch parts
                const parts = await getAS400MOPartsRaw(mo.id);

                // Upsert MO header
                await prisma.productionOrder.upsert({
                    where: { id: mo.id },
                    create: {
                        id: mo.id,
                        status: mo.status || 'ready',
                        line: mo.line,
                        description: mo.description,
                        dueTime: mo.dueTime,
                        progress: mo.progress || 0,
                    },
                    update: {
                        status: mo.status || 'ready',
                        line: mo.line,
                        description: mo.description,
                        dueTime: mo.dueTime,
                        progress: mo.progress || 0,
                        updatedAt: new Date(),
                    },
                });

                // Sync BOM items: dedupe by moId + name (or sku if available)
                for (const p of parts) {
                    const sku = String(p.PART_SKU || p.SKU || p.ITEM_CODE || '').trim();
                    const name = String(p.PART_NAME || p.PART_DESC || p.NAME || '').trim() || sku;
                    const reqQty = Number(p.REQ_QTY || p.QTY || p.REQUIRED_QTY || 0);
                    const unit = String(p.UNIT || p.UOM || 'pcs');

                    // Try to find existing BOM item for this MO by sku or name
                    let existing = null;
                    if (sku) {
                        existing = await prisma.bOMItem.findFirst({ where: { moId: mo.id, name } });
                    } else {
                        existing = await prisma.bOMItem.findFirst({ where: { moId: mo.id, name } });
                    }

                    if (existing) {
                        await prisma.bOMItem.update({ where: { id: existing.id }, data: { name, requiredQty: reqQty, unit, updatedAt: new Date() } });
                    } else {
                        await prisma.bOMItem.create({ data: { name, requiredQty: reqQty, unit, moId: mo.id } });
                    }
                }

                imported += 1;
            }
        }

        try {
            await prisma.syncCheckpoint.upsert({
                where: { type: 'mo' },
                create: { type: 'mo', lastSynced: new Date() },
                update: { lastSynced: new Date() },
            });
        } catch (e) {
            logger.warn('Failed to update MO sync checkpoint', String(e));
        }

        try { await addSyncHistory({ type: 'mo', imported, success: true, details: { count: mos.length, since: since?.toISOString() } }); } catch (e) { /* ignore */ }
        return { imported };
    } catch (err) {
        try { await addSyncHistory({ type: 'mo', imported: 0, success: false, details: { error: String(err), since: since?.toISOString() } }); } catch (e) { /* ignore */ }
        captureException(err, { component: 'as400', action: 'syncMOs' });
        throw err;
    }
}

export default {
    getAS400POs,
    getAS400MOs,
    syncPOsToLocal,
    syncMOsToLocal,
};
