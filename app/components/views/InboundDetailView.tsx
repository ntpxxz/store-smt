import React from 'react';
import { View, InboundInvoice } from '@/lib/types';
import { Header } from '@/app/components/ui/Header';

interface InboundDetailViewProps {
    activeInbound: InboundInvoice;
    setActiveInbound: (inv: InboundInvoice | null) => void;
    setCurrentView: (view: View) => void;
    openScanner: (title: string, subtitle: string, expected: string, processed: boolean, onComplete: (val: string) => void) => void;
    handleReceiveItem: (invoiceId: string, itemId: string, actualQty: number) => void;
}

export const InboundDetailView: React.FC<InboundDetailViewProps> = ({ activeInbound, setActiveInbound, setCurrentView, openScanner, handleReceiveItem }) => {
    const rvdCount = activeInbound.items.filter(i => i.received).length;
    const totalItems = activeInbound.items.length;

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title={activeInbound.id}
                subtitle="Input Invoice"
                onBack={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }}
            />

            <div className="p-6">
                <div className="ios-card p-6 mb-8 relative overflow-hidden">
                    <div className="flex justify-between mb-4 border-b border-app-border pb-4">
                        <span className="text-[10px] text-app-text-muted font-semibold uppercase tracking-wider">Vendor</span>
                        <span className="text-sm font-bold text-app-text">{activeInbound.vendor}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[10px] text-app-text-muted font-semibold uppercase tracking-wider">PO Number</span>
                        <span className="text-sm font-bold text-app-text">{activeInbound.po}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6 px-2">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-app-text-muted">PO Items</h4>
                    <span className="text-[10px] text-brand-primary font-semibold uppercase tracking-wider bg-brand-primary/10 px-3 py-1.5 rounded-xl border border-brand-primary/20">{rvdCount}/{totalItems} Received</span>
                </div>

                <div className="space-y-4 mb-10">
                    {activeInbound.items.map((item) => (
                        <div key={item.id} className={`ios-card p-6 flex flex-col transition-all group relative overflow-hidden ${item.received ? 'border-brand-success/20 opacity-70' : ''}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-5 flex-1 min-w-0">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all shrink-0 ${item.received ? 'bg-brand-success text-white shadow-lg shadow-brand-success/20' : 'bg-black/5 text-app-text-muted border border-app-border'}`}>
                                        {item.received ? <i className="fa-solid fa-check"></i> : <span className="text-xs">{item.id}</span>}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-app-text text-lg leading-tight truncate mb-1">{item.name}</h4>
                                        <p className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">{item.sku}</p>
                                    </div>
                                </div>
                                {item.received ? (
                                    <div className="text-right">
                                        <p className="font-bold text-xl text-brand-success leading-none">{item.receivedQty || item.qty}</p>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-success mt-1">{item.unit}</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">Qty:</span>
                                            <span className="text-sm font-bold text-app-text">{item.qty} {item.unit}</span>
                                        </div>
                                        <button
                                            onClick={() => openScanner(`Receive ${item.name}`, `SKU: ${item.sku}`, item.id, item.received, () => handleReceiveItem(activeInbound.id, item.id, item.qty))}
                                            className="w-12 h-12 rounded-2xl gradient-primary text-white flex items-center justify-center active:scale-[0.9] transition-all shadow-lg shadow-brand-primary/30"
                                        >
                                            <i className="fa-solid fa-barcode text-xl"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    disabled={rvdCount < totalItems}
                    onClick={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }}
                    className={`w-full py-6 rounded-[2rem] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-2xl ${rvdCount === totalItems ? 'gradient-primary text-white shadow-brand-primary/30' : 'bg-black/5 text-app-text-muted cursor-not-allowed shadow-none'}`}
                >
                    Finish Inbound <i className="fa-solid fa-circle-check text-sm"></i>
                </button>

            </div>
        </div>
    );
};


