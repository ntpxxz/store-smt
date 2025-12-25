import React from 'react';
import { View, MO } from '@/lib/types';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border text-app-text">
                <h2 className="text-xl font-bold mb-4">Production Queue</h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">{['all', 'urgent', 'ready', 'scheduled'].map(f => <button key={f} onClick={() => setMoFilter(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${moFilter === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div>
                <div className="relative"><i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted text-xs"></i><input type="text" placeholder="Search MO # or Description..." value={moSearch} onChange={(e) => setMoSearch(e.target.value)} className="w-full bg-app-bg border border-app-border rounded-[15px] py-3 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-brand-primary transition-colors" /></div>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {srtMO.map((mo) => (
                        <div key={mo.id} onClick={() => { setActiveMO(mo); setCurrentView(View.MO_DETAIL); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex flex-col hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center text-lg shadow-inner border border-app-border ${mo.status === 'urgent' ? 'bg-brand-error text-white animate-pulse' : 'bg-app-bg text-brand-muted group-hover:text-brand-primary transition-colors'}`}><i className={mo.status === 'urgent' ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-dolly"}></i></div>
                                    <div className="min-w-0">
                                        <h4 className="font-black text-base leading-tight mb-1">MO #{mo.id}</h4>
                                        <p className="text-[10px] text-brand-muted font-bold truncate uppercase tracking-widest">{mo.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    <span className={`text-xs font-black ${mo.progress === 100 ? 'text-brand-success' : 'text-brand-primary'}`}>{mo.progress}%</span>
                                    <i className="fa-solid fa-chevron-right text-[10px] text-brand-muted group-hover:translate-x-1 transition-transform"></i>
                                </div>
                            </div>
                            <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-1000 ${mo.status === 'urgent' ? 'bg-brand-error' : 'bg-brand-primary'}`} style={{ width: `${mo.progress}%` }}></div></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
