import React from 'react';
import { View, Part } from '@/lib/types';
import { getStatusMeta } from '@/lib/utils';
import { StockChart } from '@/app/components/ui/StockChart';
import { LocationStatusTag } from '@/app/components/ui/LocationStatusTag';

interface PartDetailViewProps {
    activePart: Part;
    setActivePart: (part: Part | null) => void;
    setCurrentView: (view: View) => void;
    setTransferQty: (qty: number) => void;
    setDestAisle: (aisle: string) => void;
    setDestBin: (bin: string) => void;
}

export const PartDetailView: React.FC<PartDetailViewProps> = ({ activePart, setActivePart, setCurrentView, setTransferQty, setDestAisle, setDestBin }) => {
    const meta = getStatusMeta(activePart.status);

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 glass z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => { setActivePart(null); setCurrentView(View.INVENTORY); }} className="w-10 h-10 rounded-[15px] bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-[10px] text-brand-muted uppercase tracking-widest">Part Details</h3><h2 className="font-bold text-lg">{activePart.sku}</h2></div>
            </div>
            <div className="p-6">
                <div className="bg-app-surface p-6 rounded-[20px] border border-app-border mb-8 shadow-sm relative overflow-hidden text-app-text">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 bg-app-bg rounded-[18px] flex items-center justify-center text-3xl border border-app-border shadow-inner">{activePart.icon}</div>
                        <div className={`px-3 py-1.5 rounded-[10px] flex items-center gap-2 ${meta.bg}`}><i className={`fa-solid ${meta.icon} ${meta.color} text-xs`}></i><span className={`text-[10px] font-black uppercase tracking-widest ${meta.text}`}>{activePart.status} Stock</span></div>
                    </div>
                    <h1 className="text-2xl font-black mb-1 leading-tight">{activePart.name}</h1>
                    <div className="flex items-center gap-3 mb-6">
                        <p className="text-xs font-mono font-bold text-brand-muted tracking-wide">{activePart.sku}</p>
                        <LocationStatusTag status={activePart.locationStatus} size="md" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-app-bg p-4 rounded-[15px] border border-app-border"><p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">On Hand</p><p className="text-2xl font-black text-app-text">{activePart.qty} <span className="text-xs font-bold text-brand-muted">{activePart.unit}</span></p></div>
                        <div className="bg-app-bg p-4 rounded-[15px] border border-app-border"><p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Location</p><p className="text-xl font-black text-brand-primary truncate">{activePart.location}</p></div>
                    </div>
                </div>

                <StockChart part={activePart} />

                <div className="mt-8 space-y-3">
                    <button onClick={() => { setTransferQty(1); setDestAisle('A'); setDestBin('01'); setCurrentView(View.MOVE_STOCK); }} className="w-full bg-brand-primary text-white py-4 rounded-[15px] font-bold text-sm shadow-lg shadow-brand-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"><i className="fa-solid fa-dolly"></i> Move Stock</button>
                    <button className="w-full bg-app-surface border border-app-border text-app-text py-4 rounded-[15px] font-bold text-sm active:bg-app-surface-hover transition-all flex items-center justify-center gap-2"><i className="fa-solid fa-rotate"></i> Adjust Quantity</button>
                </div>
            </div>
        </div>
    );
};
