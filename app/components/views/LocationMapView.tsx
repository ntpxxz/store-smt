import React from 'react';
import { Part, View } from '@/lib/types';
import { getLocationMeta } from '@/lib/utils';
import { Header } from '@/app/components/ui/Header';

interface LocationMapViewProps {
    selectedAisle: string;
    setSelectedAisle: (aisle: string) => void;
    setSelectedBin: (bin: string) => void;
    inventory: Part[];
    setCurrentView: (view: View) => void;
}

export const LocationMapView: React.FC<LocationMapViewProps> = ({ selectedAisle, setSelectedAisle, setSelectedBin, inventory, setCurrentView }) => {
    const aisles = ['A', 'B', 'C', 'Z'];
    const bins = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter bg-app-bg">
            <Header
                title="Warehouse Map"
                subtitle="Location Explorer"
                onBack={() => setCurrentView(View.MENU)}
            />

            {/* Aisle Selection & Legend */}
            <div className="px-6 mb-8 space-y-6">
                <div className="bg-black/5 p-1.5 rounded-[2rem] border border-app-border flex gap-1 shadow-sm">
                    {aisles.map(aisle => (
                        <button
                            key={aisle}
                            onClick={() => setSelectedAisle(aisle)}
                            className={`flex-1 py-3 rounded-[1.6rem] text-[11px] font-semibold uppercase tracking-wide transition-all duration-300 ${selectedAisle === aisle
                                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-[1.02]'
                                : 'text-app-text-muted hover:text-app-text hover:bg-black/5'
                                }`}
                        >
                            Aisle {aisle}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between px-1">
                    <div className="flex gap-4">
                        {[
                            { color: 'bg-brand-success', label: 'Empty' },
                            { color: 'bg-brand-blue', label: 'Normal' },
                            { color: 'bg-brand-error', label: 'Full' }
                        ].map(l => (
                            <div key={l.label} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${l.color} shadow-[0_0_8px_rgba(0,0,0,0.1)]`}></div>
                                <span className="text-[9px] font-medium text-app-text-muted uppercase tracking-wider">{l.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-[10px] font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                        {bins.length} Bins
                    </div>
                </div>
            </div>

            {/* Bins Grid */}
            <div className="px-6 pb-12">
                <div className="grid grid-cols-2 gap-4">
                    {bins.map(binNum => {
                        const meta = getLocationMeta(selectedAisle, binNum, inventory);
                        const isFull = meta.statusLabel === 'Full';
                        const isEmpty = meta.statusLabel === 'Empty';

                        const statusColor = isEmpty ? 'brand-success' : isFull ? 'brand-error' : 'brand-blue';
                        const statusBg = isEmpty ? 'bg-brand-success/10' : isFull ? 'bg-brand-error/10' : 'bg-brand-blue/10';
                        const statusText = isEmpty ? 'text-brand-success' : isFull ? 'text-brand-error' : 'text-brand-blue';
                        const statusDot = isEmpty ? 'bg-brand-success' : isFull ? 'bg-brand-error' : 'bg-brand-blue';
                        const statusBorder = isEmpty ? 'border-brand-success/20' : isFull ? 'border-brand-error/20' : 'border-brand-blue/20';

                        return (
                            <div
                                key={binNum}
                                onClick={() => setSelectedBin(`${selectedAisle}-0${binNum}`)}
                                className={`group relative ios-card border-2 ${statusBorder} p-5 transition-all duration-300 cursor-pointer active:scale-95 hover:border-black/10 overflow-hidden`}
                            >
                                {/* Background Accent */}
                                <div className={`absolute top-0 right-0 w-24 h-24 ${statusBg} rounded-bl-[5rem] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500`}></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[9px] font-semibold uppercase tracking-wider ${statusText} opacity-80`}>
                                                    {meta.type.short}
                                                </span>
                                                {isFull && (
                                                    <span className="flex h-1.5 w-1.5 rounded-full bg-brand-error animate-pulse"></span>
                                                )}
                                            </div>
                                            <h4 className="font-bold text-2xl text-app-text">
                                                {selectedAisle}-0{binNum}
                                            </h4>
                                        </div>
                                        <div className={`w-10 h-10 rounded-2xl ${statusBg} flex items-center justify-center transition-transform group-hover:rotate-12`}>
                                            <i className={`fa-solid ${meta.type.icon} text-xs ${statusText}`}></i>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-medium text-app-text-muted uppercase tracking-wider block">Occupancy</span>
                                                <span className={`text-lg font-bold leading-none ${statusText}`}>
                                                    {meta.occupancy.toFixed(0)}<span className="text-[10px] ml-0.5 font-medium">%</span>
                                                </span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                {meta.partsInBin.slice(0, 3).map((_, i) => (
                                                    <div key={i} className={`w-6 h-6 rounded-full border-2 border-app-surface ${statusDot} opacity-${80 - (i * 20)} shadow-sm`}></div>
                                                ))}
                                                {meta.partsInBin.length > 3 && (
                                                    <div className="w-6 h-6 rounded-full border-2 border-app-surface bg-black/5 flex items-center justify-center text-[8px] font-bold text-app-text-muted shadow-sm">
                                                        +{meta.partsInBin.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden p-0.5">
                                            <div
                                                className={`h-full rounded-full ${statusDot} transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                                                style={{ width: `${Math.max(meta.occupancy, 5)}%` }}
                                            ></div>
                                        </div>

                                        <div className="flex justify-between items-center pt-1">
                                            <span className={`text-[9px] font-semibold uppercase tracking-wider ${statusText}`}>
                                                {meta.statusLabel}
                                            </span>
                                            <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                                <i className="fa-solid fa-chevron-right text-[8px]"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};



