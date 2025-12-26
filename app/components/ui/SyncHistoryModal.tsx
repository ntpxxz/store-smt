import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api-client';

type Entry = {
  id: string;
  type: 'po' | 'mo' | 'all';
  imported: number;
  success: boolean;
  details?: any;
  timestamp: string;
};

const SyncHistoryModal: React.FC<{ onClose: () => void; setSysAlert?: (arg: { message: string; type: 'error' | 'success' }) => void }> = ({ onClose, setSysAlert }) => {
  const [items, setItems] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);
  const [clearing, setClearing] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.as400.history.list(200);
      setItems(res || []);
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to load sync history: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    if (!confirm('Clear sync history?')) return;
    setClearing(true);
    try {
      await api.as400.history.clear();
      setItems([]);
      if (setSysAlert) setSysAlert({ message: 'Sync history cleared', type: 'success' });
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to clear history: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setClearing(false);
    }
  };

  useEffect(() => { void load(); }, []);

  return (
    <div className="absolute inset-0 z-[130] bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-4 bg-app-bg text-app-text rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">AS/400 Sync History</h3>
          <div className="flex items-center gap-2">
            <button onClick={load} className="px-3 py-1 rounded border border-app-border">Refresh</button>
            <button onClick={handleClear} disabled={clearing} className="px-3 py-1 rounded bg-brand-danger text-white">{clearing ? 'Clearing...' : 'Clear'}</button>
            <button onClick={onClose} className="px-3 py-1 rounded border border-app-border">Close</button>
          </div>
        </div>

        <div className="h-[60vh] overflow-y-auto space-y-3">
          {loading && <div className="text-sm text-app-text-muted">Loading...</div>}
          {!loading && items.length === 0 && <div className="text-sm text-app-text-muted">No sync history available.</div>}
          {items.map(it => (
            <div key={it.id} className="p-3 bg-app-surface border border-app-border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${it.success ? 'bg-brand-success/10 text-brand-success' : 'bg-brand-error/10 text-brand-error'}`}>
                    <i className={`fa-solid ${it.success ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{it.type.toUpperCase()} — {it.imported} imported</div>
                    <div className="text-[11px] text-app-text-muted">{new Date(it.timestamp).toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-[11px] text-app-text-muted">{it.success ? 'Success' : 'Failed'}</div>
              </div>
              <div className="mt-3 text-[12px] font-mono text-app-text-muted break-words">{typeof it.details === 'string' ? it.details : <pre className="whitespace-pre-wrap text-[12px]">{JSON.stringify(it.details, null, 2)}</pre>}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyncHistoryModal;
