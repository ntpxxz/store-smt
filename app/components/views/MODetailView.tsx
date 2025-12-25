import React from 'react';
import { View, MO } from '@/lib/types';

interface MODetailViewProps {
    activeMO: MO;
    setActiveMO: (mo: MO | null) => void;
    setCurrentView: (view: View) => void;
    openScanner: (title: string, subtitle: string, expected: string, processed: boolean, onComplete: (val: string) => void, onError: (val: string) => void) => void;
    handlePickPart: (moId: string, partId: string) => void;
    setProminentError: (error: { title: string; message: string }) => void;
}

export const MODetailView: React.FC<MODetailViewProps> = ({ activeMO, setActiveMO, setCurrentView, openScanner, handlePickPart, setProminentError }) => {
    const pkdCount = activeMO.parts.filter(p => p.picked).length;
    const totParts = activeMO.parts.length;

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 glass z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => setCurrentView(View.PICKING)} className="w-10 h-10 rounded-ios-sm bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-[10px] text-brand-muted uppercase tracking-widest">Order Checklist</h3><h2 className="font-bold text-lg">MO #{activeMO.id}</h2></div>
            </div>
            <div className="p-6">
                <div className="ios-card p-6 mb-8 relative overflow-hidden text-app-text">
                    <div className="flex justify-between mb-4"><span className="text-xs text-brand-muted font-bold uppercase tracking-widest">Product</span><span className="text-sm font-bold">{activeMO.description}</span></div>
                    <div className="mt-6 space-y-2.5">
                        <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-brand-muted"><span>Progress</span><span className="text-brand-primary">{activeMO.progress}%</span></div>
                        <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-500 bg-brand-primary`} style={{ width: `${activeMO.progress}%` }}></div></div>
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    {activeMO.parts.map((part, idx) => (
                        <div key={part.id} className={`ios-card p-5 flex items-center justify-between transition-all ${part.picked ? 'opacity-50 bg-brand-success/5' : ''}`}>
                            <div className="flex items-center gap-5 flex-1 min-w-0 text-app-text">
                                <div className={`w-14 h-14 rounded-ios-sm flex items-center justify-center font-bold ${part.picked ? 'bg-brand-success text-white' : 'bg-app-bg text-brand-muted border border-app-border'}`}>{part.picked ? <i className="fa-solid fa-check"></i> : idx + 1}</div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-base truncate mb-0.5">{part.name}</h4>
                                    <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">{part.id}</p>
                                </div>
                            </div>
                            {!part.picked && (
                                <button
                                    onClick={() => openScanner(
                                        `Pick ${part.name}`,
                                        `BOM ID: ${part.id}`,
                                        part.id,
                                        part.picked,
                                        (v) => handlePickPart(activeMO.id, v),
                                        (scanned) => setProminentError({
                                            title: "BOM SKU Mismatch",
                                            message: `Scanned code "${scanned}" is not part of this manufacturing order. Please verify the physical component and try again.`
                                        })
                                    )}
                                    className="w-12 h-12 rounded-ios-sm bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm active:scale-90 transition-transform"
                                >
                                    <i className="fa-solid fa-barcode text-xl"></i>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <button disabled={pkdCount < totParts} onClick={() => { setActiveMO(null); setCurrentView(View.PICKING) }} className={`w-full py-4.5 rounded-ios-sm font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${pkdCount === totParts ? 'bg-brand-primary text-white shadow-brand-primary/20' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}>Complete Order</button>
            </div>
        </div>
    );
};
