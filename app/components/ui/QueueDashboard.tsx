import React, { useEffect, useState } from 'react';
import { listPendingRequests, processQueue, getPendingCount } from '@/lib/offline';

type Pending = {
    id?: number;
    method: string;
    path: string;
    body?: string | null;
    headers?: Record<string, string> | null;
    createdAt: number;
    attempts: number;
    status: 'pending' | 'failed' | 'done';
};

export const QueueDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [items, setItems] = useState<Pending[]>([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const refresh = async () => {
        setLoading(true);
        try {
            const list = await listPendingRequests();
            setItems(list as Pending[]);
            const c = await getPendingCount();
            setCount(c);
        } catch (err) {
            // swallow, UI will remain functional
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void refresh();

        const onQueued = () => void refresh();
        const onSuccess = () => void refresh();
        const onFailure = () => void refresh();
        const onConflict = () => void refresh();

        window.addEventListener('offline:queued', onQueued as EventListener);
        window.addEventListener('offline:sync:success', onSuccess as EventListener);
        window.addEventListener('offline:sync:failure', onFailure as EventListener);
        window.addEventListener('offline:conflict', onConflict as EventListener);

        const int = setInterval(() => void refresh(), 3000);
        return () => {
            clearInterval(int);
            window.removeEventListener('offline:queued', onQueued as EventListener);
            window.removeEventListener('offline:sync:success', onSuccess as EventListener);
            window.removeEventListener('offline:sync:failure', onFailure as EventListener);
            window.removeEventListener('offline:conflict', onConflict as EventListener);
        };
    }, []);

    const handleSyncNow = async () => {
        setLoading(true);
        try {
            await processQueue();
            await refresh();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="absolute inset-0 z-[120] bg-black/40 flex items-end">
            <div className="w-full max-w-md mx-auto bg-app-bg text-app-text rounded-t-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Offline Queue ({count})</h3>
                    <div className="flex items-center gap-3">
                        <button onClick={handleSyncNow} className="px-3 py-1 rounded bg-brand-primary text-white text-sm">Sync Now</button>
                        <button onClick={onClose} className="px-3 py-1 rounded bg-app-bg border border-app-border text-sm">Close</button>
                    </div>
                </div>

                <div className="h-64 overflow-y-auto no-scrollbar space-y-3">
                    {loading && <div className="text-sm text-brand-muted">Refreshing...</div>}
                    {!loading && items.length === 0 && <div className="text-sm text-brand-muted">No pending operations.</div>}
                    {items.map(it => (
                        <div key={it.id} className="p-3 bg-app-surface border border-app-border rounded-lg">
                            <div className="flex items-center justify-between">
                                <div className="text-[11px] font-bold">{it.method} — {it.path}</div>
                                <div className="text-[10px] text-brand-muted">{it.attempts} tries</div>
                            </div>
                            <div className="text-[10px] text-brand-muted mt-2 font-mono truncate">{it.body ? it.body : <i className="fa-solid fa-file-lines"></i>}</div>
                            <div className="text-[10px] text-brand-muted mt-2">Queued: {new Date(it.createdAt).toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QueueDashboard;
