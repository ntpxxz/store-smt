import React from 'react';
import { View, InboundInvoice } from '@/lib/types';

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
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }} className="w-10 h-10 rounded-[15px] bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-xs text-brand-muted uppercase tracking-widest">Input Invoice</h3><h2 className="font-black text-lg">{activeInbound.id}</h2></div>
            </div>
            <div className="p-6">
                <div className="bg-app-surface p-5 rounded-[15px] border border-app-border mb-8 shadow-inner relative overflow-hidden text-app-text">
                    <div className="flex justify-between mb-2"><span className="text-xs text-brand-muted font-bold uppercase tracking-wider">Vendor</span><span className="text-xs font-black">{activeInbound.vendor}</span></div>
                    <div className="flex justify-between mb-2"><span className="text-xs text-brand-muted font-bold uppercase tracking-wider">PO Number</span><span className="text-xs font-mono font-bold">{activeInbound.po}</span></div>
                </div>
                <div className="flex justify-between items-end mb-4 px-2">
                    <h4 className="font-black text-xs uppercase tracking-widest text-brand-muted">PO Items</h4>
                    <span className="text-[10px] text-brand-primary font-bold">{rvdCount}/{totalItems} Received</span>
                </div>
                <div className="space-y-3 mb-8">
                    {activeInbound.items.map((item) => (
                        <div key={item.id} className={`bg-app-surface p-4 rounded-[15px] border flex flex-col transition-all group relative overflow-hidden ${item.received ? 'border-brand-success/30 bg-brand-success/5 opacity-60' : 'border-app-border hover:border-brand-primary/50'}`}>
                            <div className="flex items-center justify-between text-app-text">
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div className={`w-12 h-12 rounded-[15px] flex items-center justify-center font-black transition-colors shrink-0 ${item.received ? 'bg-brand-success text-white' : 'bg-app-bg text-brand-muted border border-app-border'}`}>{item.received ? <i className="fa-solid fa-check"></i> : item.id}</div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-base truncate">{item.name}</h4>
                                        <p className="text-[10px] font-mono font-bold text-brand-muted tracking-tighter">{item.sku}</p>
                                    </div>
                                </div>
                                {item.received ? (
                                    <div className="text-right">
                                        <p className="font-black text-lg text-brand-success">{item.receivedQty || item.qty}</p>
                                        <p className="text-[10px] font-black uppercase tracking-wider text-brand-success">{item.unit}</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Expected:</span>
                                            <span className="text-sm font-black text-app-text">{item.qty} {item.unit}</span>
                                        </div>
                                        <button onClick={() => openScanner(`Receive ${item.name}`, `SKU: ${item.sku}`, item.id, item.received, () => handleReceiveItem(activeInbound.id, item.id, item.qty))} className="w-12 h-12 rounded-[15px] bg-brand-primary text-white flex items-center justify-center active:scale-90 transition-all shadow-lg"><i className="fa-solid fa-barcode text-xl"></i></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button disabled={rvdCount < totalItems} onClick={() => { setActiveInbound(null); setCurrentView(View.INBOUND); }} className={`w-full py-5 rounded-[15px] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-2xl ${rvdCount === totalItems ? 'bg-brand-primary text-white' : 'bg-app-surface text-brand-muted cursor-not-allowed border border-app-border'}`}>Finish Inbound <i className="fa-solid fa-circle-check"></i></button>
            </div>
        </div>
    );
};
