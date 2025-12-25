import React from 'react';
import { View, Part } from '@/lib/types';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 glass z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => setCurrentView(View.PART_DETAIL)} className="w-10 h-10 flex items-center justify-center rounded-ios-sm bg-app-bg hover:bg-app-surface-hover border border-app-border transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-[10px] uppercase tracking-widest text-brand-muted">Stock Relocation</h3><h2 className="font-bold text-lg">{activePart.name}</h2></div>
            </div>
            <div className="p-6">
                <div className="ios-card p-8 mb-8 relative overflow-hidden text-app-text">
                    <div className="flex items-center justify-between mb-10">
                        <div className="text-center flex-1"><p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-2">Source</p><p className="font-bold text-brand-primary text-sm">{activePart.location}</p></div>
                        <div className="px-6 text-brand-muted opacity-30"><i className="fa-solid fa-arrow-right-long text-2xl"></i></div>
                        <div className="text-center flex-1"><p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-2">Destination</p><p className="font-bold text-brand-success text-sm">Aisle {destAisle}, Bin {destBin}</p></div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-brand-muted">
                            <span>Quantity to move</span>
                            <span className={`${isExceeding ? 'text-brand-error' : 'text-app-text'} font-bold`}>{transferQty} / {activePart.qty} {activePart.unit}</span>
                        </div>

                        <div className="relative">
                            <input
                                type="number"
                                value={transferQty}
                                onChange={(e) => setTransferQty(Math.max(0, parseInt(e.target.value) || 0))}
                                className={`w-full bg-app-bg border ${isExceeding ? 'border-brand-error' : 'border-app-border'} rounded-ios-sm py-5 text-app-text text-3xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary transition-all`}
                            />
                            {isExceeding && (
                                <p className="text-brand-error text-[10px] font-bold uppercase tracking-widest mt-3 text-center">Exceeds available stock</p>
                            )}
                        </div>

                        <input
                            type="range"
                            min="1"
                            max={activePart.qty}
                            value={transferQty > activePart.qty ? activePart.qty : transferQty}
                            onChange={(e) => setTransferQty(parseInt(e.target.value))}
                            className="w-full accent-brand-primary h-2 bg-app-bg rounded-full appearance-none cursor-pointer"
                        />

                        <div className="flex gap-3">
                            <button onClick={() => setTransferQty(Math.floor(activePart.qty * 0.25))} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-muted active:bg-app-surface transition-colors">25%</button>
                            <button onClick={() => setTransferQty(Math.floor(activePart.qty * 0.50))} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-muted active:bg-app-surface transition-colors">50%</button>
                            <button onClick={() => setTransferQty(activePart.qty)} className="flex-1 bg-app-bg py-3 rounded-ios-sm border border-app-border text-[10px] font-bold uppercase tracking-widest text-brand-primary active:bg-app-surface transition-colors">Max</button>
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <h4 className="font-bold text-[11px] uppercase tracking-widest text-brand-muted mb-5 pl-2">Select Target Bin</h4>
                    <div className="grid grid-cols-4 gap-4">
                        {['01', '02', '03', '04', '05', '06', '07', '08'].map(b => (
                            <button key={b} onClick={() => setDestBin(b)} className={`py-5 rounded-ios-sm text-sm font-bold transition-all border ${destBin === b ? `bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20` : 'bg-app-surface border-app-border text-brand-muted'}`}>{b}</button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleExecuteTransfer}
                    disabled={isInvalid}
                    className={`w-full py-5 rounded-ios-sm font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${!isInvalid ? 'bg-brand-primary text-white shadow-brand-primary/20 active:scale-95' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}
                >
                    Confirm Relocation
                </button>
            </div>
        </div>
    );
};
