import Dexie, { Table } from 'dexie';
import { logger, captureException } from './logger';

type QueuedRequest = {
    id?: number;
    method: string;
    path: string;
    body?: string | null;
    headers?: Record<string, string> | null;
    createdAt: number;
    attempts: number;
    status: 'pending' | 'failed' | 'done';
};

class OfflineDB extends Dexie {
    requests!: Table<QueuedRequest, number>;
    cache!: Table<{ key: string; value: unknown; ts: number }, string>;

    constructor() {
        super('warehouse_offline_v1');
        this.version(1).stores({
            requests: '++id,method,path,createdAt,attempts,status',
            cache: '&key,ts'
        });
        this.requests = this.table('requests');
        this.cache = this.table('cache');
    }
}

const db = new OfflineDB();

export const enqueueRequest = async (method: string, path: string, body?: unknown, headers?: Record<string, string>) => {
    try {
        const rec: QueuedRequest = {
            method,
            path,
            body: body ? JSON.stringify(body) : null,
            headers: headers ?? null,
            createdAt: Date.now(),
            attempts: 0,
            status: 'pending',
        };
        const id = await db.requests.add(rec);
        logger.info({ id, method, path }, 'Enqueued request (offline)');

        // Emit a DOM event so UI can react immediately
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('offline:queued', { detail: { id, method, path } }));
        }

        return id;
    } catch (err) {
        captureException(err, { component: 'offline', action: 'enqueue' });
        throw err;
    }
};

export const getCachedData = async (key: string) => {
    try {
        const row = await db.cache.get(key);
        if (!row) return null;
        return row.value;
    } catch (err) {
        captureException(err, { component: 'offline', action: 'getCached' });
        return null;
    }
};

export const setCachedData = async (key: string, value: unknown) => {
    try {
        await db.cache.put({ key, value, ts: Date.now() });
    } catch (err) {
        captureException(err, { component: 'offline', action: 'setCached' });
    }
};

export const processQueue = async () => {
    if (typeof window === 'undefined') return;
    if (!navigator.onLine) return;

    try {
        const pending = await db.requests.where('status').equals('pending').sortBy('createdAt');
        if (!pending || pending.length === 0) return;
        logger.info({ count: pending.length }, 'Processing offline queue');

        for (const req of pending) {
            try {
                const headers = new Headers(req.headers ?? {});
                headers.set('Content-Type', 'application/json');

                const resp = await fetch(req.path.startsWith('/api') ? req.path : `/api${req.path}`, {
                    method: req.method,
                    headers,
                    body: req.body ?? undefined,
                });

                if (!resp.ok) {
                    // If conflict (409) return structured payload to allow UI to resolve
                    if (resp.status === 409) {
                        let payload: unknown = null;
                        try {
                            payload = await resp.json();
                        } catch {
                            payload = { message: 'Conflict' } as unknown;
                        }
                        // mark request failed so operator can inspect
                        await db.requests.update(req.id as number, { status: 'failed', attempts: (req.attempts || 0) + 1 });

                        // emit conflict event with server and local data if provided
                        if (typeof window !== 'undefined') {
                            window.dispatchEvent(new CustomEvent('offline:conflict', {
                                detail: {
                                    id: req.id,
                                    path: req.path,
                                    method: req.method,
                                    server: (payload as any)?.server ?? payload,
                                    local: req.body ? (() => { try { return JSON.parse(req.body!); } catch { return null; } })() : null,
                                }
                            }));
                        }

                        logger.warn({ id: req.id, status: resp.status }, 'Conflict syncing queued request');
                        continue;
                    }

                    // record failure and increment attempts
                    await db.requests.update(req.id as number, { attempts: (req.attempts || 0) + 1 });
                    logger.warn({ id: req.id, status: resp.status }, 'Remote returned non-ok for queued request');

                    if (typeof window !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('offline:sync:failure', { detail: { id: req.id, path: req.path, status: resp.status } }));
                    }

                    // don't remove; allow retry later
                    continue;
                }

                // success
                await db.requests.delete(req.id as number);
                logger.info({ id: req.id, path: req.path }, 'Queued request synced');

                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('offline:sync:success', { detail: { id: req.id, path: req.path } }));
                }
            } catch (err) {
                // increment attempts and leave for retry
                try {
                    await db.requests.update(req.id as number, { attempts: (req.attempts || 0) + 1 });
                } catch {
                    // swallow
                }
                captureException(err, { component: 'offline', action: 'process', request: req });

                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('offline:sync:error', { detail: { id: req.id, path: req.path, error: String(err) } }));
                }
            }
        }
    } catch (err) {
        captureException(err, { component: 'offline', action: 'processAll' });
    }
};

export const processRequestById = async (id: number) => {
    try {
        const req = await db.requests.get(id);
        if (!req) return { error: 'not_found' };

        const headers = new Headers(req.headers ?? {});
        headers.set('Content-Type', 'application/json');

        const resp = await fetch(req.path.startsWith('/api') ? req.path : `/api${req.path}`, {
            method: req.method,
            headers,
            body: req.body ?? undefined,
        });

        if (!resp.ok) {
            if (resp.status === 409) {
                let payload: unknown = null;
                try { payload = await resp.json(); } catch { payload = { message: 'Conflict' } as unknown; }
                await db.requests.update(id, { status: 'failed', attempts: (req.attempts || 0) + 1 });
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('offline:conflict', { detail: { id, path: req.path, method: req.method, server: (payload as any)?.server ?? payload, local: req.body ? (() => { try { return JSON.parse(req.body); } catch { return null; } })() : null } }));
                }
                return { conflict: true, payload };
            }

            await db.requests.update(id, { attempts: (req.attempts || 0) + 1 });
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('offline:sync:failure', { detail: { id, path: req.path, status: resp.status } }));
            }
            return { error: 'remote_error', status: resp.status };
        }

        await db.requests.delete(id);
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('offline:sync:success', { detail: { id, path: req.path } }));
        }

        return { success: true };
    } catch (err) {
        captureException(err, { component: 'offline', action: 'processSingle', id });
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('offline:sync:error', { detail: { id, error: String(err) } }));
        }
        return { error: 'exception', message: String(err) };
    }
};

export const deleteQueuedRequest = async (id: number) => {
    try {
        await db.requests.delete(id);
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('offline:queued:deleted', { detail: { id } }));
        }
        return true;
    } catch (err) {
        captureException(err, { component: 'offline', action: 'delete', id });
        return false;
    }
};

export const getPendingCount = async () => {
    try {
        return await db.requests.where('status').equals('pending').count();
    } catch (err) {
        captureException(err, { component: 'offline', action: 'getPendingCount' });
        return 0;
    }
};

export const listPendingRequests = async () => {
    try {
        return await db.requests.where('status').equals('pending').sortBy('createdAt');
    } catch (err) {
        captureException(err, { component: 'offline', action: 'listPending' });
        return [] as QueuedRequest[];
    }
};

// Auto-process when coming online
if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
        logger.info('Navigator online - processing offline queue');
        void processQueue();
    });

    // Try processing immediately at startup if online
    if (navigator.onLine) {
        void processQueue();
    }
}

export default db;
export { db };
