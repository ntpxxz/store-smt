import React from 'react';
import { View, Part } from '@/lib/types';
import { getStatusMeta } from '@/lib/utils';
import { LocationStatusTag } from '@/app/components/ui/LocationStatusTag';

interface InventoryViewProps {
    inventory: Part[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filter: Part['status'] | 'all';
    setFilter: (filter: Part['status'] | 'all') => void;
    setActivePart: (part: Part) => void;
    setCurrentView: (view: View) => void;
}

export const InventoryView: React.FC<InventoryViewProps> = ({ inventory, searchQuery, setSearchQuery, filter, setFilter, setActivePart, setCurrentView }) => {
    const filtered = inventory.filter(p => (filter === 'all' || p.status === filter)).filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sku.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border text-app-text">
                <h2 className="text-xl font-bold mb-4">Inventory Master</h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">{['all', 'normal', 'low', 'critical', 'fast'].map(f => <button key={f} onClick={() => setFilter(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filter === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div>
                <div className="relative"><i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted text-xs"></i><input type="text" placeholder="Search SKU or Name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-app-bg border border-app-border rounded-[15px] py-3 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-brand-primary transition-colors" /></div>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {filtered.map((part) => {
                        const meta = getStatusMeta(part.status);
                        return (
                            <div key={part.id} onClick={() => { setActivePart(part); setCurrentView(View.PART_DETAIL); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex justify-between items-center hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 bg-app-bg rounded-[15px] flex items-center justify-center text-2xl border border-app-border group-hover:scale-105 transition-transform`}>{part.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-base leading-tight mb-1">{part.name}</h4>
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-[10px] text-brand-muted font-mono font-bold uppercase tracking-tighter">{part.sku}</p>
                                            <LocationStatusTag status={part.locationStatus} />
                                        </div>
                                        <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md ${meta.bg}`}><i className={`fa-solid ${meta.icon} text-[8px] ${meta.color}`}></i><span className={`text-[8px] font-black uppercase tracking-widest ${meta.text}`}>{part.status}</span></div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-lg">{part.qty.toLocaleString()}</p>
                                    <p className="text-[9px] font-black uppercase text-brand-muted tracking-widest">{part.unit}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
