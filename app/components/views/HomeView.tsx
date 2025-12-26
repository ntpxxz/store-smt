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
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter bg-app-bg">
            <div className="px-6 pt-8 pb-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-app-text">
                        <div className="flex items-center gap-2 mb-2 opacity-60">
                            <i className="fa-solid fa-warehouse text-brand-primary text-sm"></i>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">Smart Warehouse</span>
                        </div>
                        <p className="text-app-text-muted text-[10px] uppercase tracking-wide font-semibold mb-1">Station B-12</p>
                        <h1 className="text-3xl font-bold leading-tight">Good Afternoon,<br /><span className="text-brand-primary">{user?.name || 'Alex M.'}</span></h1>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-app-surface border border-app-border flex items-center justify-center relative shadow-sm text-app-text">
                        <i className="fa-solid fa-user text-xl"></i>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-brand-success rounded-full border-[3px] border-app-bg"></div>
                    </div>
                </div>

                {/* KPI Section */}
                <div className="flex gap-4 mb-8">
                    <div className="flex-1 ios-card p-5 flex items-center gap-4 text-app-text">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-black/5" />
                                <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray="150.7" strokeDashoffset="30.1" className="text-brand-success" />
                            </svg>
                            <span className="absolute text-xs font-bold">98%</span>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-0.5">Accuracy</h5>
                            <p className="text-sm font-bold">Excellent</p>
                        </div>
                    </div>
                    <div className="flex-1 ios-card p-5 flex items-center gap-4 text-app-text">
                        <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xl">
                            <i className="fa-solid fa-gauge-high"></i>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-0.5">Speed</h5>
                            <p className="text-sm font-bold">42 items/h</p>
                        </div>
                    </div>
                </div>

                {/* Smart Advice Card */}
                <div className="ios-card p-6 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 -mr-12 -mt-12 rounded-full blur-[50px]"></div>
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/30"><i className="fa-solid fa-bolt-lightning text-white text-lg"></i></div>
                            <div>
                                <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Smart Priority</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">Live Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl leading-snug text-app-text font-medium mb-6 italic">"{aiInsight}"</p>
                    <div className="flex gap-3">
                        <button onClick={() => setCurrentView(View.PICKING)} className="flex-1 bg-black/5 border border-black/5 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-wider text-brand-primary flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-black/10">Go to Pick <i className="fa-solid fa-arrow-right text-[10px]"></i></button>
                        <button onClick={() => setCurrentView(View.INBOUND)} className="flex-1 bg-black/5 border border-black/5 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-wider text-app-text-muted flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-black/10">Inbound <i className="fa-solid fa-truck text-[10px]"></i></button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div onClick={() => setCurrentView(View.PICKING)} className="gradient-primary text-white p-6 rounded-[2rem] relative overflow-hidden cursor-pointer active:scale-[0.98] transition-all group shadow-lg shadow-brand-primary/30">
                        <div className="flex justify-between items-start mb-8"><span className="bg-white/20 px-3 py-1.5 rounded-xl text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm">Priority</span><div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center"><i className="fa-solid fa-arrow-right -rotate-45 text-lg"></i></div></div>
                        <h2 className="text-5xl font-bold mb-1">{moList.length}</h2>
                        <p className="text-sm font-semibold opacity-80 uppercase tracking-wide">Waiting MO</p>
                    </div>
                    <div onClick={() => { setCurrentView(View.LOCATIONS); setSelectedBin(null); }} className="ios-card p-6 relative overflow-hidden cursor-pointer active:scale-[0.98] transition-all hover:border-black/10 text-app-text">
                        <div className="flex justify-between items-start mb-8"><span className="bg-black/5 px-3 py-1.5 rounded-xl text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">Map</span><div className="w-10 h-10 rounded-2xl bg-black/5 flex items-center justify-center"><i className="fa-solid fa-chevron-right text-sm text-app-text-muted"></i></div></div>
                        <h2 className="text-5xl font-bold mb-1">12</h2>
                        <p className="text-sm text-app-text-muted font-semibold uppercase tracking-wide">Empty Bins</p>
                    </div>
                </div>

                {/* Recent Activity Timeline */}
                <div className="px-2">
                    <h4 className="text-[10px] font-bold text-app-text-muted uppercase tracking-wider mb-6">Recent Shifts Logs</h4>
                    <div className="space-y-6">
                        {activityLog.map(act => (
                            <div key={act.id} className="flex gap-5 relative">
                                <div className="flex flex-col items-center">
                                    <div className={`w-3 h-3 rounded-full mt-1.5 ${act.type === 'move' ? 'bg-brand-blue' : act.type === 'receive' ? 'bg-brand-success' : 'bg-brand-orange'} ring-4 ring-app-bg`}></div>
                                    <div className="w-0.5 flex-1 bg-black/5 my-1"></div>
                                </div>
                                <div className="pb-4 flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-bold text-app-text">{act.label}</span>
                                        <span className="text-[10px] text-app-text-muted font-semibold uppercase tracking-wider">{act.timestamp}</span>
                                    </div>
                                    <p className="text-xs text-app-text-muted leading-relaxed font-medium">{act.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



