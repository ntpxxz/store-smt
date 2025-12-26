import React from 'react';
import { View, MO } from '@/lib/types';
import { Header } from '@/app/components/ui/Header';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title={`MO #${activeMO.id}`}
                subtitle="Order Checklist"
                onBack={() => setCurrentView(View.PICKING)}
            />

            <div className="p-6">
                <div className="ios-card p-8 mb-8 relative overflow-hidden">
                    <div className="flex justify-between mb-5">
                        <span className="text-[10px] text-app-text-muted font-semibold uppercase tracking-wider">Product</span>
                        <span className="text-sm font-bold text-app-text">{activeMO.description}</span>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex justify-between text-[10px] font-semibold uppercase tracking-wider text-app-text-muted">
                            <span>Progress</span>
                            <span className="text-brand-primary font-bold">{activeMO.progress}%</span>
                        </div>
                        <div className="w-full bg-black/5 h-2.5 rounded-full overflow-hidden border border-app-border">
                            <div className={`h-full transition-all duration-500 bg-brand-primary shadow-[0_0_10px_rgba(124,58,237,0.2)]`} style={{ width: `${activeMO.progress}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-10">
                    {activeMO.parts.map((part, idx) => (
                        <div key={part.id} className={`ios-card p-5 flex items-center justify-between transition-all ${part.picked ? 'opacity-50 border-brand-success/20' : ''}`}>
                            <div className="flex items-center gap-5 flex-1 min-w-0">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${part.picked ? 'bg-brand-success text-white shadow-lg shadow-brand-success/20' : 'bg-black/5 text-app-text-muted border border-app-border'}`}>
                                    {part.picked ? <i className="fa-solid fa-check"></i> : idx + 1}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-app-text text-lg leading-tight truncate mb-1">{part.name}</h4>
                                    <p className="text-[10px] text-app-text-muted font-semibold uppercase tracking-wider">{part.id}</p>
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
                                    className="w-14 h-14 rounded-2xl gradient-primary text-white flex items-center justify-center shadow-lg shadow-brand-primary/30 active:scale-[0.9] transition-all"
                                >
                                    <i className="fa-solid fa-barcode text-xl"></i>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    disabled={pkdCount < totParts}
                    onClick={() => { setActiveMO(null); setCurrentView(View.PICKING) }}
                    className={`w-full py-6 rounded-[2rem] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-2xl ${pkdCount === totParts ? 'gradient-primary text-white shadow-brand-primary/30' : 'bg-black/5 text-app-text-muted cursor-not-allowed shadow-none'}`}
                >
                    Complete Order <i className="fa-solid fa-circle-check text-sm"></i>
                </button>

            </div>
        </div>
    );
};


