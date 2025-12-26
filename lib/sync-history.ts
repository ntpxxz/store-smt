import prisma from './prisma';

export type SyncHistoryEntry = {
  id: string;
  type: 'po' | 'mo' | 'all';
  imported: number;
  success: boolean;
  details?: any;
  timestamp: string;
};

export async function addSyncHistory(entry: { type: 'po' | 'mo' | 'all'; imported: number; success: boolean; details?: any }) {
  const rec = await prisma.syncHistory.create({
    data: {
      type: entry.type,
      imported: entry.imported,
      success: entry.success,
      details: entry.details ?? null,
    },
  });

  return {
    id: rec.id,
    type: rec.type as 'po' | 'mo' | 'all',
    imported: rec.imported,
    success: rec.success,
    details: rec.details,
    timestamp: rec.createdAt.toISOString(),
  } as SyncHistoryEntry;
}

export async function listSyncHistory(limit = 100) {
  const rows = await prisma.syncHistory.findMany({
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
  return rows.map(r => ({ id: r.id, type: r.type as 'po' | 'mo' | 'all', imported: r.imported, success: r.success, details: r.details, timestamp: r.createdAt.toISOString() }));
}

export async function clearSyncHistory() {
  await prisma.syncHistory.deleteMany({});
  return true;
}

export default {
  addSyncHistory,
  listSyncHistory,
  clearSyncHistory,
};
