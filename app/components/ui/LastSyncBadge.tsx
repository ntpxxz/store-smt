import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api-client';

type CP = { type: string; lastSynced: string | null };

const formatTime = (iso: string | null) => {
  if (!iso) return 'Never synced';
  try {
    const date = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  } catch {
    return iso;
  }
};

const LastSyncBadge: React.FC<{ className?: string; setSysAlert?: (arg: { message: string; type: 'error' | 'success' }) => void }> = ({ className = '', setSysAlert }) => {
  const [items, setItems] = useState<Record<string, string | null>>({});
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.as400.checkpoint.list();
      const map: Record<string, string | null> = {};
      (res || []).forEach((r: CP) => { map[r.type] = r.lastSynced; });
      setItems(map);
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to load last sync times: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void load(); }, []);

  const lastPO = items['po'] ?? null;
  const lastMO = items['mo'] ?? null;

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div>
        <div className="text-[12px] text-app-text-muted font-semibold uppercase tracking-wide mb-3">Last Sync Status</div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-app-border bg-app-bg text-[12px]">
              <i className={`fa-solid fa-box text-sm ${lastPO ? 'text-brand-success' : 'text-app-text-muted'}`}></i>
              <div>
                <div className="font-semibold text-app-text">POs</div>
                <div className="text-[10px] text-app-text-muted">{loading ? '...' : formatTime(lastPO)}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-app-border bg-app-bg text-[12px]">
              <i className={`fa-solid fa-gears text-sm ${lastMO ? 'text-brand-success' : 'text-app-text-muted'}`}></i>
              <div>
                <div className="font-semibold text-app-text">MOs</div>
                <div className="text-[10px] text-app-text-muted">{loading ? '...' : formatTime(lastMO)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={load} 
        disabled={loading}
        className="px-3 py-2 rounded-lg border border-app-border bg-app-surface hover:bg-app-surface/80 transition-all text-[12px] font-medium disabled:opacity-50"
      >
        <i className={`fa-solid ${loading ? 'fa-spinner fa-spin' : 'fa-rotate-right'} mr-1`}></i>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
    </div>
  );
};

export default LastSyncBadge;
