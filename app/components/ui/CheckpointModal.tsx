import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api-client';

type CP = { type: string; lastSynced: string | null };

const CheckpointModal: React.FC<{ onClose: () => void; setSysAlert?: (arg: { message: string; type: 'error' | 'success' }) => void }> = ({ onClose, setSysAlert }) => {
  const [items, setItems] = useState<CP[]>([]);
  const [loading, setLoading] = useState(false);
  const [resetting, setResetting] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.as400.checkpoint.list();
      setItems(res || []);
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to load checkpoints: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (type: string) => {
    if (!confirm(`Reset checkpoint for ${type}? This will make next sync re-import items since the beginning.`)) return;
    setResetting(true);
    try {
      await api.as400.checkpoint.reset(type);
      if (setSysAlert) setSysAlert({ message: `Checkpoint ${type} reset`, type: 'success' });
      await load();
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to reset checkpoint: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setResetting(false);
    }
  };

  const handleResetAll = async () => {
    if (!confirm('Reset all checkpoints?')) return;
    setResetting(true);
    try {
      await api.as400.checkpoint.reset('all');
      if (setSysAlert) setSysAlert({ message: 'All checkpoints reset', type: 'success' });
      await load();
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to reset all: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setResetting(false);
    }
  };

  const handleClear = async () => {
    if (!confirm('Clear all checkpoint records from the system? This deletes checkpoint rows entirely.')) return;
    setResetting(true);
    try {
      await api.as400.checkpoint.clear();
      if (setSysAlert) setSysAlert({ message: 'Checkpoint records cleared', type: 'success' });
      setItems([]);
    } catch (err: any) {
      if (setSysAlert) setSysAlert({ message: `Failed to clear checkpoints: ${err?.message || String(err)}`, type: 'error' });
    } finally {
      setResetting(false);
    }
  };

  useEffect(() => { void load(); }, []);

  return (
    <div className="absolute inset-0 z-[140] bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-4 bg-app-bg text-app-text rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Sync Checkpoints</h3>
          <div className="flex items-center gap-2">
            <button onClick={load} className="px-3 py-1 rounded border border-app-border">Refresh</button>
            <button onClick={handleResetAll} disabled={resetting} className="px-3 py-1 rounded bg-brand-warning text-white">{resetting ? 'Resetting...' : 'Reset All'}</button>
            <button onClick={handleClear} disabled={resetting} className="px-3 py-1 rounded bg-brand-danger text-white">Clear</button>
            <button onClick={onClose} className="px-3 py-1 rounded border border-app-border">Close</button>
          </div>
        </div>

        <div className="h-[50vh] overflow-y-auto space-y-3">
          {loading && <div className="text-sm text-app-text-muted">Loading...</div>}
          {!loading && items.length === 0 && <div className="text-sm text-app-text-muted">No checkpoint records found.</div>}

          {items.map(it => (
            <div key={it.type} className="p-3 bg-app-surface border border-app-border rounded-lg flex items-center justify-between">
              <div>
                <div className="font-bold">{it.type.toUpperCase()}</div>
                <div className="text-[12px] text-app-text-muted">Last Synced: {it.lastSynced ? new Date(it.lastSynced).toLocaleString() : 'Never'}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleReset(it.type)} disabled={resetting} className="px-3 py-1 rounded border border-app-border text-[12px]">Reset</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckpointModal;
