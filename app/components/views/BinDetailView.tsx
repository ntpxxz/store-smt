import React from 'react';
import { View, Part } from '@/lib/types';
import { getLocationMeta } from '@/lib/utils';

interface BinDetailViewProps {
    selectedBin: string;
    selectedAisle: string;
    setSelectedBin: (bin: string | null) => void;
    inventory: Part[];
    setActivePart: (part: Part) => void;
    setCurrentView: (view: View) => void;
    openScanner: (title: string, subtitle: string, expected: string, processed: boolean, onComplete: (val: string) => void) => void;
    handleAssignPartToBin: (scannedPartSku: string, targetLocation: string) => void;
}

export const BinDetailView: React.FC<BinDetailViewProps> = ({ selectedBin, selectedAisle, setSelectedBin, inventory, setActivePart, setCurrentView, openScanner, handleAssignPartToBin }) => {
    const binIndex = parseInt(selectedBin.split('-')[1]);
    const locationMeta = getLocationMeta(selectedAisle, binIndex, inventory);
    const binFullString = `Aisle ${selectedAisle}, Bin ${binIndex < 10 ? '0' + binIndex : binIndex}`;

    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 flex items-center gap-4 border-b border-app-border text-app-text">
                <button onClick={() => setSelectedBin(null)} className="w-10 h-10 rounded-[15px] bg-app-bg flex items-center justify-center border border-app-border active:bg-app-surface-hover transition-colors"><i className="fa-solid fa-arrow-left"></i></button>
                <div><h3 className="font-bold text-xs text-brand-muted uppercase tracking-widest">Location Storage</h3><h2 className="font-black text-lg">Bin {selectedBin}</h2></div>
            </div>
            <div className="p-6">
                <div className="bg-app-surface p-6 rounded-[15px] border border-app-border mb-8 flex items-center justify-between shadow-inner relative overflow-hidden text-app-text">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 -mr-16 -mt-16 rounded-full blur-3xl`}></div>
                    <div>
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Status</p>
                        <div className="flex items-center gap-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${locationMeta.statusColor.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                            <p className="font-black text-lg">{locationMeta.statusLabel}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest mb-1">Occupancy</p>
                        <p className={`font-black text-lg ${locationMeta.statusColor}`}>{locationMeta.occupancy.toFixed(0)}%</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4 pl-2">
                    <h4 className="font-black text-xs uppercase tracking-widest text-brand-muted">Stored SKU List</h4>
                    {locationMeta.occupancy < 100 && (
                        <button onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))} className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center gap-1.5"><i className="fa-solid fa-plus-circle"></i> Assign Part</button>
                    )}
                </div>

                <div className="space-y-4">
                    {locationMeta.partsInBin.length === 0 ? (
                        <div className="text-center py-12 border-2 border-dashed border-app-border rounded-[20px] bg-app-bg/50">
                            <div className="w-16 h-16 bg-app-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-app-border">
                                <i className="fa-solid fa-box-open text-brand-muted text-2xl"></i>
                            </div>
                            <p className="text-xs text-brand-muted font-bold mb-4">Location is currently empty.</p>
                            <button onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))} className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-lg active:scale-95 transition-all">Assign New SKU</button>
                        </div>
                    ) : (
                        locationMeta.partsInBin.map(item => (
                            <div key={item.id} onClick={() => { setActivePart(item); setCurrentView(View.PART_DETAIL); }} className="bg-app-surface p-4 rounded-[15px] border border-app-border flex justify-between items-center group active:scale-95 transition-all cursor-pointer text-app-text">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-app-bg rounded-[15px] flex items-center justify-center text-2xl border border-app-border">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-sm">{item.name}</h4>
                                        <p className="text-[10px] font-mono font-bold text-brand-muted tracking-tighter">{item.sku}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black text-lg">{item.qty.toLocaleString()}</p>
                                    <p className="text-[9px] font-black uppercase text-brand-muted tracking-widest">{item.unit}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
