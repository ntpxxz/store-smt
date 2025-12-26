import React from 'react';
import { View, Part } from '@/lib/types';
import { getLocationMeta } from '@/lib/utils';
import { Header } from '@/app/components/ui/Header';

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

    const isFull = locationMeta.statusLabel === 'Full';
    const isEmpty = locationMeta.statusLabel === 'Empty';
    const statusColor = isEmpty ? 'brand-success' : isFull ? 'brand-error' : 'brand-blue';
    const statusBg = isEmpty ? 'bg-brand-success/10' : isFull ? 'bg-brand-error/10' : 'bg-brand-blue/10';
    const statusText = isEmpty ? 'text-brand-success' : isFull ? 'text-brand-error' : 'text-brand-blue';
    const statusDot = isEmpty ? 'bg-brand-success' : isFull ? 'bg-brand-error' : 'bg-brand-blue';
    const statusBorder = isEmpty ? 'border-brand-success/20' : isFull ? 'border-brand-error/20' : 'border-brand-blue/20';

    return (
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title={`Bin ${selectedBin}`}
                subtitle="Location Storage"
                onBack={() => setSelectedBin(null)}
            />

            <div className="p-6">
                {/* Status Card */}
                <div className={`p-8 ios-card border-2 ${statusBorder} mb-8 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-48 h-48 ${statusBg} rounded-bl-[8rem] -mr-16 -mt-16 transition-transform duration-500`}></div>

                    <div className="relative z-10 flex justify-between items-center">
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wide mb-2">Current Status</p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${statusDot} ring-4 ring-app-surface shadow-lg`}></div>
                                    <h2 className="font-bold text-3xl text-app-text">{locationMeta.statusLabel}</h2>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-black/5 px-4 py-2 rounded-2xl border border-app-border w-fit">
                                <i className={`fa-solid ${locationMeta.type.icon} text-xs ${statusText}`}></i>
                                <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">{locationMeta.type.name}</span>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wide mb-2">Occupancy</p>
                            <div className="relative inline-flex items-center justify-center">
                                <span className={`text-4xl font-bold ${statusText}`}>
                                    {locationMeta.occupancy.toFixed(0)}<span className="text-lg ml-0.5 font-medium">%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden p-0.5 border border-app-border">
                            <div
                                className={`h-full rounded-full ${statusDot} transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                                style={{ width: `${Math.max(locationMeta.occupancy, 5)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* SKU List Header */}
                <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-app-text-muted">Inventory Items</h4>
                        <span className="bg-black/5 text-app-text-muted text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {locationMeta.partsInBin.length}
                        </span>
                    </div>
                    {!isFull && (
                        <button
                            onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))}
                            className="bg-brand-primary/10 text-brand-primary text-[10px] font-semibold px-4 py-2 rounded-xl uppercase tracking-wider flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all active:scale-95"
                        >
                            <i className="fa-solid fa-plus"></i> Add Item
                        </button>
                    )}
                </div>

                {/* SKU List */}
                <div className="space-y-4">
                    {locationMeta.partsInBin.length === 0 ? (
                        <div className="text-center py-16 bg-black/5 border-2 border-dashed border-app-border rounded-[3rem] shadow-sm">
                            <div className="w-24 h-24 bg-black/5 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border border-app-border">
                                <i className="fa-solid fa-box-open text-app-text-muted/20 text-4xl"></i>
                            </div>
                            <h3 className="font-bold text-app-text mb-2">Location Empty</h3>
                            <p className="text-xs text-app-text-muted font-medium mb-8 max-w-[200px] mx-auto">This bin is currently available for storage.</p>
                            <button
                                onClick={() => openScanner('Assign Part', `Bin: ${selectedBin}`, '', false, (v) => handleAssignPartToBin(v, binFullString))}
                                className="gradient-primary text-white text-[10px] font-semibold uppercase tracking-wide px-10 py-4 rounded-2xl shadow-xl shadow-brand-primary/25 active:scale-95 transition-all"
                            >
                                Assign First SKU
                            </button>
                        </div>
                    ) : (
                        locationMeta.partsInBin.map(item => (
                            <div
                                key={item.id}
                                onClick={() => { setActivePart(item); setCurrentView(View.PART_DETAIL); }}
                                className="ios-card p-5 flex justify-between items-center group active:scale-[0.98] transition-all cursor-pointer hover:border-black/10"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center text-3xl border border-app-border transition-all group-hover:scale-110 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-app-text leading-tight mb-1 group-hover:text-brand-primary transition-colors">{item.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-medium text-app-text-muted uppercase tracking-wider">{item.sku}</span>
                                            <span className="w-1 h-1 rounded-full bg-black/10"></span>
                                            <span className="text-[10px] font-semibold text-brand-primary/60 uppercase tracking-wider">{item.status}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-2xl text-app-text leading-none">{item.qty.toLocaleString()}</p>
                                    <p className="text-[10px] font-semibold uppercase text-app-text-muted tracking-wider mt-1">{item.unit}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
};



