import React from 'react';
import { View, Part } from '@/lib/types';
import { getStatusMeta } from '@/lib/utils';
import { LocationStatusTag } from '@/app/components/ui/LocationStatusTag';
import { Header } from '@/app/components/ui/Header';

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
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter bg-app-bg">
            <Header
                title="Inventory"
                subtitle="Stock Master"
            />

            <div className="px-6 mb-8 space-y-6">
                <div className="relative group">
                    <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-app-text-muted text-sm group-focus-within:text-brand-primary transition-colors"></i>
                    <input
                        type="text"
                        placeholder="Search SKU or Name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-app-surface border border-app-border rounded-[1.5rem] py-4.5 pl-12 pr-5 text-sm font-bold text-app-text focus:outline-none focus:border-brand-primary/30 focus:ring-8 focus:ring-brand-primary/5 transition-all shadow-sm placeholder:text-app-text-muted"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                    {['all', 'normal', 'low', 'critical', 'fast'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`px-6 py-3 rounded-2xl text-[10px] font-semibold uppercase tracking-wider border-2 transition-all duration-300 whitespace-nowrap ${filter === f
                                ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-105'
                                : 'bg-app-surface border-app-border text-app-text-muted hover:border-black/10'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 space-y-4">
                {filtered.map((part) => {
                    const meta = getStatusMeta(part.status);
                    return (
                        <div
                            key={part.id}
                            onClick={() => { setActivePart(part); setCurrentView(View.PART_DETAIL); }}
                            className="ios-card p-5 flex justify-between items-center active:scale-[0.98] transition-all cursor-pointer hover:border-black/10 group"
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center text-3xl border border-app-border transition-all group-hover:scale-110 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20`}>
                                    {part.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-app-text text-lg leading-tight mb-1 group-hover:text-brand-primary transition-colors">{part.name}</h4>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[9px] font-medium text-app-text-muted uppercase tracking-wider">{part.sku}</span>
                                        <LocationStatusTag status={part.locationStatus} />
                                    </div>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${meta.bg} border border-black/5 shadow-sm`}>
                                        <i className={`fa-solid ${meta.icon} text-[9px] ${meta.color}`}></i>
                                        <span className={`text-[9px] font-semibold uppercase tracking-wider ${meta.text}`}>{part.status}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-2xl text-app-text leading-none">{part.qty.toLocaleString()}</p>
                                <p className="text-[10px] font-semibold uppercase text-app-text-muted tracking-wider mt-1">{part.unit}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};



