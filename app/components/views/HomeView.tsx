import React from 'react';
import { View, MO, Activity } from '@/lib/types';

interface HomeViewProps {
    user: any;
    moList: MO[];
    aiInsight: string;
    activityLog: Activity[];
    setCurrentView: (view: View) => void;
    setSelectedBin: (bin: string | null) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ user, moList, aiInsight, activityLog, setCurrentView, setSelectedBin }) => {
    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 pt-6 pb-2">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-app-text">
                        <div className="flex items-center gap-2 mb-2 opacity-50">
                            <i className="fa-solid fa-warehouse text-brand-primary text-xs"></i>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Smart Warehouse</span>
                        </div>
                        <p className="text-brand-muted text-xs uppercase tracking-wider font-bold mb-1">Station B-12</p>
                        <h1 className="text-2xl font-bold">Good Afternoon,<br /><span className="text-brand-primary font-black">{user?.name || 'Alex M.'}</span></h1>
                    </div>
                    <div className="w-12 h-12 rounded-[15px] bg-app-surface border border-app-border flex items-center justify-center relative shadow-lg text-app-text">
                        <i className="fa-solid fa-user"></i>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-success rounded-full border-2 border-app-surface"></div>
                    </div>
                </div>

                {/* KPI Section */}
                <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-app-surface border border-app-border p-4 rounded-[20px] shadow-lg flex items-center gap-4 text-app-text">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-app-bg" />
                                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="25.12" className="text-brand-success" />
                            </svg>
                            <span className="absolute text-[10px] font-black">98%</span>
                        </div>
                        <div>
                            <h5 className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Accuracy</h5>
                            <p className="text-xs font-black">Excellent</p>
                        </div>
                    </div>
                    <div className="flex-1 bg-app-surface border border-app-border p-4 rounded-[20px] shadow-lg flex items-center gap-4 text-app-text">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                            <i className="fa-solid fa-gauge-high"></i>
                        </div>
                        <div>
                            <h5 className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Speed</h5>
                            <p className="text-xs font-black">42 items/h</p>
                        </div>
                    </div>
                </div>

                {/* Smart Advice Card */}
                <div className="bg-app-surface/80 border border-app-border p-5 rounded-[20px] mb-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 -mr-12 -mt-12 rounded-full blur-[40px]"></div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-primary rounded-[12px] flex items-center justify-center shadow-[0_0_15px_rgba(0,70,255,0.3)]"><i className="fa-solid fa-bolt-lightning text-white text-sm"></i></div>
                            <div>
                                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Smart Priority</h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <div className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse"></div>
                                    <span className="text-[8px] font-black text-brand-muted uppercase tracking-widest">Live Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg leading-tight text-app-text font-medium mb-5 italic">"{aiInsight}"</p>
                    <div className="flex gap-2">
                        <button onClick={() => setCurrentView(View.PICKING)} className="flex-1 bg-app-bg border border-app-border py-2.5 rounded-[12px] text-[10px] font-black uppercase tracking-widest text-brand-primary flex items-center justify-center gap-2 active:scale-95 transition-all">Go to Pick <i className="fa-solid fa-arrow-right text-[8px]"></i></button>
                        <button onClick={() => setCurrentView(View.INBOUND)} className="flex-1 bg-app-bg border border-app-border py-2.5 rounded-[12px] text-[10px] font-black uppercase tracking-widest text-brand-muted flex items-center justify-center gap-2 active:scale-95 transition-all">Inbound <i className="fa-solid fa-truck text-[8px]"></i></button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div onClick={() => setCurrentView(View.PICKING)} className="bg-brand-primary text-white p-5 rounded-[15px] relative overflow-hidden cursor-pointer active:scale-95 transition-all group shadow-[0_0_20px_rgba(0,70,255,0.25)]">
                        <div className="flex justify-between items-start mb-8"><span className="bg-black/20 px-2.5 py-1 rounded-[3px] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">Priority</span><div className="w-8 h-8 rounded-[15px] bg-black/20 flex items-center justify-center"><i className="fa-solid fa-arrow-right -rotate-45 text-sm"></i></div></div>
                        <h2 className="text-4xl font-black mb-1 tracking-tighter">{moList.length}</h2>
                        <p className="text-xs font-bold opacity-80 uppercase tracking-wide">Waiting MO (Pick)</p>
                    </div>
                    <div onClick={() => { setCurrentView(View.LOCATIONS); setSelectedBin(null); }} className="bg-app-surface border border-app-border p-5 rounded-[15px] relative overflow-hidden cursor-pointer active:scale-95 transition-all hover:border-brand-muted/50 text-app-text">
                        <div className="flex justify-between items-start mb-8"><span className="bg-app-bg px-2.5 py-1 rounded-[3px] text-[10px] font-bold text-brand-muted uppercase tracking-wider">Map</span><div className="w-8 h-8 rounded-[15px] bg-app-bg flex items-center justify-center"><i className="fa-solid fa-chevron-right text-xs text-brand-muted"></i></div></div>
                        <h2 className="text-4xl font-black mb-1 tracking-tighter">12</h2>
                        <p className="text-xs text-brand-muted uppercase tracking-wide">Empty Bins</p>
                    </div>
                </div>

                {/* Recent Activity Timeline */}
                <div className="px-2">
                    <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-[0.3em] mb-4">Recent Shifts Logs</h4>
                    <div className="space-y-4">
                        {activityLog.map(act => (
                            <div key={act.id} className="flex gap-4 relative">
                                <div className="flex flex-col items-center">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 ${act.type === 'move' ? 'bg-brand-blue' : act.type === 'receive' ? 'bg-brand-success' : 'bg-brand-orange'}`}></div>
                                    <div className="w-0.5 flex-1 bg-app-border my-1"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-[10px] font-black text-app-text">{act.label}</span>
                                        <span className="text-[8px] text-brand-muted font-bold uppercase tracking-widest">{act.timestamp}</span>
                                    </div>
                                    <p className="text-[11px] text-brand-muted leading-tight">{act.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
