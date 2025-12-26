import React from 'react';
import { View, Part } from '@/lib/types';
import { getStatusMeta } from '@/lib/utils';
import { StockChart } from '@/app/components/ui/StockChart';
import { LocationStatusTag } from '@/app/components/ui/LocationStatusTag';
import { Header } from '@/app/components/ui/Header';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title={activePart.sku}
                subtitle="Part Details"
                onBack={() => { setActivePart(null); setCurrentView(View.INVENTORY); }}
            />

            <div className="p-6">
                <div className="ios-card p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-bl-[4rem] -mr-8 -mt-8"></div>

                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className="w-24 h-24 bg-black/5 rounded-[2rem] flex items-center justify-center text-5xl border border-app-border shadow-inner group-hover:scale-110 transition-transform duration-500">
                            {activePart.icon}
                        </div>
                        <div className={`px-4 py-2 rounded-2xl flex items-center gap-2.5 ${meta.bg} border border-black/5 shadow-sm`}>
                            <i className={`fa-solid ${meta.icon} ${meta.color} text-xs`}></i>
                            <span className={`text-[10px] font-semibold uppercase tracking-wider ${meta.text}`}>{activePart.status}</span>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold mb-2 leading-tight text-app-text">{activePart.name}</h1>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider bg-black/5 px-3 py-1 rounded-full border border-app-border">
                                {activePart.sku}
                            </span>
                            <LocationStatusTag status={activePart.locationStatus} size="md" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/5 p-5 rounded-[2rem] border border-app-border group hover:border-brand-primary/20 transition-colors">
                                <p className="text-[9px] font-semibold text-app-text-muted uppercase tracking-wider mb-2">On Hand</p>
                                <p className="text-3xl font-bold text-app-text">
                                    {activePart.qty} <span className="text-sm font-medium text-app-text-muted ml-1">{activePart.unit}</span>
                                </p>
                            </div>
                            <div className="bg-black/5 p-5 rounded-[2rem] border border-app-border group hover:border-brand-primary/20 transition-colors">
                                <p className="text-[9px] font-semibold text-app-text-muted uppercase tracking-wider mb-2">Location</p>
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-location-dot text-[10px] text-brand-primary"></i>
                                    <p className="text-sm font-bold text-brand-primary truncate">{activePart.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ios-card p-6 mb-10">
                    <StockChart part={activePart} />
                </div>

                <div className="space-y-4">
                    <button
                        onClick={() => { setTransferQty(1); setDestAisle('A'); setDestBin('01'); setCurrentView(View.MOVE_STOCK); }}
                        className="w-full gradient-primary text-white py-6 rounded-[2rem] font-bold text-xs uppercase tracking-wider shadow-2xl shadow-brand-primary/30 active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                        <i className="fa-solid fa-dolly text-sm"></i> Move Stock
                    </button>
                    <button
                        className="w-full bg-black/5 border-2 border-app-border text-app-text py-6 rounded-[2rem] font-bold text-xs uppercase tracking-wider active:bg-black/10 transition-all flex items-center justify-center gap-3 shadow-sm"
                    >
                        <i className="fa-solid fa-rotate text-sm text-app-text-muted"></i> Adjust Quantity
                    </button>
                </div>
            </div>

        </div>
    );
};



