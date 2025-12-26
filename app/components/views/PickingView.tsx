import React from 'react';
import { View, MO } from '@/lib/types';
import { Header } from '@/app/components/ui/Header';

interface PickingViewProps {
    moList: MO[];
    moFilter: MO['status'] | 'all';
    setMoFilter: (filter: MO['status'] | 'all') => void;
    moSearch: string;
    setMoSearch: (search: string) => void;
    setActiveMO: (mo: MO) => void;
    setCurrentView: (view: View) => void;
}

export const PickingView: React.FC<PickingViewProps> = ({ moList, moFilter, setMoFilter, moSearch, setMoSearch, setActiveMO, setCurrentView }) => {
    const srtMO = moList.filter(mo => (moFilter === 'all' || mo.status === moFilter)).filter(mo => mo.id.includes(moSearch) || mo.description.includes(moSearch)).sort((a, b) => (a.status === 'urgent' ? -1 : 1));

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter bg-app-bg">
            <Header
                title="Picking"
                subtitle="Production Queue"
            />

            <div className="px-6 mb-6">
                <div className="relative mb-6">
                    <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-app-text-muted text-base"></i>
                    <input
                        type="text"
                        placeholder="Search MO # or Description..."
                        value={moSearch}
                        onChange={(e) => setMoSearch(e.target.value)}
                        className="w-full bg-app-surface border border-app-border rounded-2xl py-4 pl-12 pr-5 text-sm font-bold text-app-text focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all shadow-sm placeholder:text-app-text-muted"
                    />
                </div>

                <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
                    {['all', 'urgent', 'ready', 'scheduled'].map(f => (
                        <button
                            key={f}
                            onClick={() => setMoFilter(f as any)}
                            className={`px-5 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider border transition-all shadow-sm ${moFilter === f ? 'bg-brand-primary border-brand-primary text-white shadow-brand-primary/30' : 'bg-app-surface border-app-border text-app-text-muted hover:bg-app-surface-hover'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 space-y-4">
                {srtMO.map((mo) => (
                    <div
                        key={mo.id}
                        onClick={() => { setActiveMO(mo); setCurrentView(View.MO_DETAIL); }}
                        className="ios-card p-6 flex flex-col hover:border-black/10 transition-all cursor-pointer group active:scale-[0.98]"
                    >
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-5 min-w-0">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-app-border transition-all ${mo.status === 'urgent' ? 'bg-brand-error text-white animate-pulse shadow-brand-error/20' : 'bg-black/5 text-app-text-muted group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary'}`}>
                                    <i className={mo.status === 'urgent' ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-dolly"}></i>
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-app-text text-lg leading-tight mb-1">MO #{mo.id}</h4>
                                    <p className="text-[10px] text-app-text-muted font-semibold truncate uppercase tracking-wider">{mo.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                                <span className={`text-sm font-bold ${mo.progress === 100 ? 'text-brand-success' : 'text-brand-primary'}`}>{mo.progress}%</span>
                                <i className="fa-solid fa-chevron-right text-[10px] text-app-text-muted group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </div>
                        <div className="w-full bg-black/5 h-2.5 rounded-full overflow-hidden border border-app-border">
                            <div
                                className={`h-full transition-all duration-1000 ${mo.status === 'urgent' ? 'bg-brand-error' : 'bg-brand-primary'}`}
                                style={{ width: `${mo.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};


