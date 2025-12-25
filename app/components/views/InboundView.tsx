import React from 'react';
import { View, InboundInvoice } from '@/lib/types';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border text-app-text">
                <h2 className="text-xl font-bold mb-4">Inbound Logistics</h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar">{['all', 'pending', 'received'].map(f => <button key={f} onClick={() => setInboundSubTab(f as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${inboundSubTab === f ? 'bg-brand-primary border-brand-primary text-white shadow-lg' : 'bg-app-bg border-app-border text-brand-muted'}`}>{f}</button>)}</div>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {fltInb.map((inv) => (
                        <div key={inv.id} onClick={() => { setActiveInbound(inv); setCurrentView(View.LOCATIONS); }} className="bg-app-surface p-5 rounded-[15px] border border-app-border flex justify-between items-center hover:bg-app-surface-hover transition-all cursor-pointer shadow-sm group active:scale-95 text-app-text">
                            <div className="flex items-center gap-5">
                                <div className={`w-14 h-14 bg-app-bg rounded-[15px] flex items-center justify-center text-2xl shadow-inner border border-app-border group-hover:scale-105 transition-transform ${inv.status === 'completed' ? 'text-brand-success' : 'text-brand-muted'}`}><i className="fa-solid fa-truck-ramp-box"></i></div>
                                <div>
                                    <h4 className="font-black text-base leading-tight mb-1">{inv.id}</h4>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] text-brand-muted font-black uppercase tracking-widest">{inv.vendor}</p>
                                        <p className="text-[10px] text-brand-primary font-mono font-bold uppercase tracking-widest">{inv.po}</p>
                                    </div>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right text-[10px] text-brand-muted group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
