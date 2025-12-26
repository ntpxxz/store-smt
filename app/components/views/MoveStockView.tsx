import React from 'react';
import { View, Part } from '@/lib/types';
import { Header } from '@/app/components/ui/Header';

interface MoveStockViewProps {
    activePart: Part;
    transferQty: number;
    setTransferQty: (qty: number) => void;
    destAisle: string;
    setDestAisle: (aisle: string) => void;
    destBin: string;
    setDestBin: (bin: string) => void;
    handleExecuteTransfer: () => void;
    setCurrentView: (view: View) => void;
}

export const MoveStockView: React.FC<MoveStockViewProps> = ({ activePart, transferQty, setTransferQty, destAisle, setDestAisle, destBin, setDestBin, handleExecuteTransfer, setCurrentView }) => {
    const isExceeding = transferQty > activePart.qty;
    const isInvalid = transferQty <= 0 || isExceeding || `Aisle ${destAisle}, Bin ${destBin}` === activePart.location;

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title={activePart.name}
                subtitle="Stock Relocation"
                onBack={() => setCurrentView(View.PART_DETAIL)}
            />

            <div className="p-6">
                {/* Movement Path Card */}
                <div className="ios-card p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>

                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="text-center flex-1">
                            <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-app-border">
                                <i className="fa-solid fa-box text-brand-primary/40 text-sm"></i>
                            </div>
                            <p className="text-[9px] font-semibold text-app-text-muted uppercase tracking-wider mb-1">Source</p>
                            <p className="font-bold text-app-text text-xs">{activePart.location}</p>
                        </div>

                        <div className="px-4 flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                <i className="fa-solid fa-arrow-right text-brand-primary text-xs animate-pulse"></i>
                            </div>
                        </div>

                        <div className="text-center flex-1">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-brand-primary/20">
                                <i className="fa-solid fa-location-dot text-brand-primary text-sm"></i>
                            </div>
                            <p className="text-[9px] font-semibold text-app-text-muted uppercase tracking-wider mb-1">Destination</p>
                            <p className="font-bold text-brand-primary text-xs">Aisle {destAisle}, Bin {destBin}</p>
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <p className="text-[9px] font-semibold text-app-text-muted uppercase tracking-wider">Quantity to move</p>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl font-bold ${isExceeding ? 'text-brand-error' : 'text-app-text'}`}>
                                        {transferQty}
                                    </span>
                                    <span className="text-xs font-semibold text-app-text-muted">/ {activePart.qty} {activePart.unit}</span>
                                </div>
                            </div>
                            {isExceeding && (
                                <div className="bg-brand-error/10 px-3 py-1 rounded-full flex items-center gap-2">
                                    <i className="fa-solid fa-triangle-exclamation text-[10px] text-brand-error"></i>
                                    <span className="text-[9px] font-semibold text-brand-error uppercase tracking-wider">Stock Limit</span>
                                </div>
                            )}
                        </div>

                        <div className="relative pt-2">
                            <input
                                type="range"
                                min="1"
                                max={activePart.qty}
                                value={transferQty > activePart.qty ? activePart.qty : transferQty}
                                onChange={(e) => setTransferQty(parseInt(e.target.value))}
                                className="w-full accent-brand-primary h-1.5 bg-black/5 rounded-full appearance-none cursor-pointer"
                            />
                        </div>

                        <div className="flex gap-2">
                            {[25, 50, 75, 100].map(pct => (
                                <button
                                    key={pct}
                                    onClick={() => setTransferQty(Math.floor(activePart.qty * (pct / 100)))}
                                    className={`flex-1 py-3 rounded-xl border text-[10px] font-semibold uppercase tracking-wider transition-all ${transferQty === Math.floor(activePart.qty * (pct / 100))
                                        ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20'
                                        : 'bg-black/5 border-app-border text-app-text-muted hover:bg-black/10'
                                        }`}
                                >
                                    {pct === 100 ? 'Max' : `${pct}%`}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bin Selection */}
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-6 px-2">
                        <h4 className="font-semibold text-[10px] uppercase tracking-wider text-app-text-muted">Select Target Bin</h4>
                        <span className="text-[10px] font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                            Aisle {destAisle}
                        </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {['01', '02', '03', '04', '05', '06', '07', '08'].map(b => (
                            <button
                                key={b}
                                onClick={() => setDestBin(b)}
                                className={`py-5 rounded-2xl text-sm font-bold transition-all border-2 ${destBin === b
                                    ? 'bg-brand-primary border-brand-primary text-white shadow-xl shadow-brand-primary/25 scale-105'
                                    : 'bg-black/5 border-app-border text-app-text-muted hover:border-black/10'
                                    }`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={handleExecuteTransfer}
                    disabled={isInvalid}
                    className={`w-full py-6 rounded-[2rem] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-2xl ${!isInvalid
                        ? 'gradient-primary text-white shadow-brand-primary/30 active:scale-95'
                        : 'bg-black/5 text-app-text-muted cursor-not-allowed shadow-none'
                        }`}
                >
                    Confirm Relocation
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${!isInvalid ? 'bg-white/20' : 'bg-white/10'}`}>
                        <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </div>
                </button>
            </div>

        </div>
    );
};



