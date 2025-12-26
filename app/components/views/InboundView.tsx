import React from 'react';
import { View, InboundInvoice } from '@/lib/types';
import { Header } from '@/app/components/ui/Header';

interface InboundViewProps {
    inbound: InboundInvoice[];
    inboundSubTab: 'all' | 'pending' | 'received';
    setInboundSubTab: (tab: 'all' | 'pending' | 'received') => void;
    setActiveInbound: (inv: InboundInvoice) => void;
    setCurrentView: (view: View) => void;
}

export const InboundView: React.FC<InboundViewProps> = ({ inbound, inboundSubTab, setInboundSubTab, setActiveInbound, setCurrentView }) => {
    const fltInb = inboundSubTab === 'all'
        ? inbound
        : inbound.filter(i => {
            if (inboundSubTab === 'received') return i.status === 'completed';
            return i.status === inboundSubTab;
        });

    return (
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter bg-app-bg">
            <Header
                title="Inbound"
                subtitle="Receiving & Putaway"
            />

            <div className="px-6 mb-8">
                <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                    {['all', 'pending', 'received'].map(f => (
                        <button
                            key={f}
                            onClick={() => setInboundSubTab(f as any)}
                            className={`px-6 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm ${inboundSubTab === f ? 'bg-brand-primary text-white shadow-brand-primary/30' : 'bg-app-surface text-app-text-muted border border-app-border hover:bg-app-surface-hover'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 space-y-4">
                {fltInb.map((inv) => (
                    <div
                        key={inv.id}
                        onClick={() => { setActiveInbound(inv); setCurrentView(View.INBOUND); }}
                        className="ios-card p-6 flex justify-between items-center active:scale-[0.98] transition-all cursor-pointer group hover:border-black/10"
                    >
                        <div className="flex items-center gap-5">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-colors ${inv.status === 'completed' ? 'bg-brand-success/10 text-brand-success' : 'bg-brand-blue/10 text-brand-blue'}`}>
                                <i className="fa-solid fa-truck-ramp-box"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-app-text text-lg mb-1 leading-tight">{inv.vendor}</h4>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-semibold bg-black/5 text-app-text-muted px-2 py-1 rounded-lg uppercase tracking-wider">{inv.id}</span>
                                    <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">{inv.po}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${inv.status === 'completed' ? 'bg-brand-success' : 'bg-brand-blue'} ring-4 ring-app-bg shadow-sm`}></div>
                            <i className="fa-solid fa-chevron-right text-[10px] text-app-text-muted group-hover:text-app-text transition-colors"></i>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};


