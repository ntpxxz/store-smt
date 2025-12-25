import React from 'react';
import { Part } from '@/lib/types';
import { getLocationMeta } from '@/lib/utils';

interface LocationMapViewProps {
    selectedAisle: string;
    setSelectedAisle: (aisle: string) => void;
    setSelectedBin: (bin: string) => void;
    inventory: Part[];
}

export const LocationMapView: React.FC<LocationMapViewProps> = ({ selectedAisle, setSelectedAisle, setSelectedBin, inventory }) => {
    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-24 page-enter">
            <div className="px-6 py-4 sticky top-0 bg-app-surface/95 backdrop-blur z-20 border-b border-app-border">
                <h2 className="text-xl font-bold mb-4 text-app-text">Warehouse Explorer</h2>
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
                    {['A', 'B', 'C', 'Z'].map(aisle => (
                        <button key={aisle} onClick={() => setSelectedAisle(aisle)} className={`px-6 py-2 rounded-[15px] text-xs font-black transition-all ${selectedAisle === aisle ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-app-surface border border-app-border text-brand-muted'}`}>Aisle {aisle}</button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2.5 px-1">
                    {[{ color: 'bg-brand-success', label: 'Empty' }, { color: 'bg-brand-blue', label: 'Normal' }, { color: 'bg-brand-error', label: 'Full' }].map(l => (
                        <div key={l.label} className="flex items-center gap-1.5 bg-app-surface/40 px-3 py-1.5 rounded-[10px] border border-app-border">
                            <div className={`w-2 h-2 rounded-full ${l.color}`}></div>
                            <span className="text-[9px] font-black text-brand-muted uppercase tracking-widest">{l.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(binNum => {
                        const meta = getLocationMeta(selectedAisle, binNum, inventory);
                        return (
                            <div key={binNum} onClick={() => setSelectedBin(`${selectedAisle}-0${binNum}`)} className={`bg-app-surface p-5 rounded-[15px] border transition-all cursor-pointer active:scale-95 group relative overflow-hidden border-app-border hover:border-brand-muted/50`}>
                                <div className={`absolute top-0 right-0 w-12 h-12 ${meta.statusColor.replace('text-', 'bg-')}/5 -mr-4 -mt-4 rounded-full blur-xl transition-colors`}></div>
                                <div className="flex justify-between items-start mb-4 relative z-10 text-app-text">
                                    <div>
                                        <h4 className="font-black text-xl tracking-tighter">{selectedAisle}-0{binNum}</h4>
                                        <div className="flex items-center gap-1.5 mt-1 opacity-60"><i className={`fa-solid ${meta.type.icon} text-[8px]`}></i><span className="text-[8px] font-black uppercase tracking-widest">{meta.type.short}</span></div>
                                    </div>
                                    <div className={`w-3 h-3 rounded-full ${meta.statusColor.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                                </div>
                                <div className="mt-6 space-y-1.5 relative z-10">
                                    <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-brand-muted"><span>Occupancy</span><span className={meta.statusLabel === 'Full' ? meta.statusColor : 'text-app-text'}>{meta.occupancy.toFixed(0)}%</span></div>
                                    <div className="w-full bg-app-bg h-1.5 rounded-full overflow-hidden border border-app-border"><div className={`h-full transition-all duration-700 ${meta.statusColor.replace('text-', 'bg-')}`} style={{ width: `${meta.occupancy}%` }}></div></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
