import React, { useState } from 'react';
import { View } from '@/lib/types';
import { Checkbox } from '@/app/components/ui/Checkbox';
import { Header } from '@/app/components/ui/Header';
import { api } from '@/lib/api-client';
import SyncHistoryModal from '@/app/components/ui/SyncHistoryModal';
import CheckpointModal from '@/app/components/ui/CheckpointModal';

interface MenuViewProps {
    setCurrentView: (view: View) => void;
    onLogout: () => void;
    darkMode: boolean;
    setDarkMode: (v: boolean) => void;
    soundEnabled: boolean;
    setSoundEnabled: (v: boolean) => void;
    hapticEnabled: boolean;
    setHapticEnabled: (v: boolean) => void;
    autoScan: boolean;
    setAutoScan: (v: boolean) => void;
    showHelp: boolean;
    setShowHelp: (v: boolean) => void;
    language: string;
    setLanguage: (v: string) => void;
    onNavigateToMap: () => void;
    setSysAlert?: (arg: { message: string; type: 'error' | 'success' }) => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ setCurrentView, onLogout, darkMode, setDarkMode, soundEnabled, setSoundEnabled, hapticEnabled, setHapticEnabled, autoScan, setAutoScan, showHelp, setShowHelp, language, setLanguage, onNavigateToMap, setSysAlert }) => {
    const [syncing, setSyncing] = useState(false);
    const [historyOpen, setHistoryOpen] = useState(false);
    const [checkpointOpen, setCheckpointOpen] = useState(false);

    const handleAS400Sync = async (type: 'all' | 'po' | 'mo' = 'all') => {
        if (syncing) return;
        setSyncing(true);
        try {
            const res = await api.as400.sync(type);
            const msg = `AS400 sync completed. ${res?.results ? JSON.stringify(res.results) : ''}`;
            if (setSysAlert) setSysAlert({ message: msg, type: 'success' });
        } catch (err: any) {
            if (setSysAlert) setSysAlert({ message: `AS400 sync failed: ${err?.message || String(err)}`, type: 'error' });
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-40 page-enter bg-gradient-to-b from-app-bg to-app-bg/95">
            <Header title="Settings" subtitle="System Preferences" />

            <div className="px-4 py-6 max-w-2xl mx-auto w-full">
                {/* AS/400 Integration - Featured Section */}
                <section className="mb-8">
                    <div className="bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-primary/60 rounded-2xl p-6 text-white shadow-lg">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl flex-shrink-0 backdrop-blur-sm">
                                <i className="fa-solid fa-network-wired"></i>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">Enterprise Integration</div>
                                <h2 className="text-2xl font-bold mb-1">AS/400 Sync</h2>
                                <p className="text-sm text-white/80">Real-time PO & MO synchronization</p>
                            </div>
                        </div>

                        {/* AS/400 Action Buttons */}
                        <div className="grid grid-cols-5 gap-2">
                            <button 
                                onClick={() => handleAS400Sync('po')} 
                                disabled={syncing}
                                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95 disabled:opacity-50 border border-white/20"
                            >
                                <i className="fa-solid fa-box text-xl mb-1"></i>
                                <span className="text-[10px] font-bold text-center">Sync POs</span>
                            </button>
                            <button 
                                onClick={() => handleAS400Sync('mo')} 
                                disabled={syncing}
                                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95 disabled:opacity-50 border border-white/20"
                            >
                                <i className="fa-solid fa-gears text-xl mb-1"></i>
                                <span className="text-[10px] font-bold text-center">Sync MOs</span>
                            </button>
                            <button 
                                onClick={() => handleAS400Sync('all')} 
                                disabled={syncing}
                                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/25 hover:bg-white/35 backdrop-blur-sm transition-all active:scale-95 disabled:opacity-50 border border-white/30 col-span-1 font-bold"
                            >
                                <i className={`fa-solid ${syncing ? 'fa-spinner fa-spin' : 'fa-sync'} text-xl mb-1`}></i>
                                <span className="text-[10px] font-bold">{syncing ? 'Syncing...' : 'All'}</span>
                            </button>
                            <button 
                                onClick={() => setHistoryOpen(true)}
                                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95 border border-white/20"
                            >
                                <i className="fa-solid fa-history text-xl mb-1"></i>
                                <span className="text-[10px] font-bold text-center">History</span>
                            </button>
                            <button 
                                onClick={() => setCheckpointOpen(true)}
                                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95 border border-white/20"
                            >
                                <i className="fa-solid fa-hourglass-end text-xl mb-1"></i>
                                <span className="text-[10px] font-bold text-center">Checkpoints</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Settings Sections Grid */}
                <div className="space-y-6">
                    {/* Navigation */}
                    <section>
                        <h3 className="text-xs font-bold text-app-text-muted uppercase tracking-widest mb-3 px-2">Navigation</h3>
                        <button 
                            onClick={onNavigateToMap}
                            className="w-full bg-app-surface hover:bg-app-surface/80 border border-app-border rounded-2xl p-4 flex items-center justify-between transition-all active:scale-95"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xl">
                                    <i className="fa-solid fa-map"></i>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-app-text">Location Map</div>
                                    <div className="text-xs text-app-text-muted">Warehouse layout & zones</div>
                                </div>
                            </div>
                            <i className="fa-solid fa-chevron-right text-app-text-muted"></i>
                        </button>
                    </section>

                    {/* Scanner Feedback */}
                    <section>
                        <h3 className="text-xs font-bold text-app-text-muted uppercase tracking-widest mb-3 px-2">Feedback & Alerts</h3>
                        <div className="space-y-2">
                            <div className="bg-app-surface border border-app-border rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-success/10 flex items-center justify-center text-brand-success text-xl">
                                        <i className="fa-solid fa-volume-high"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-app-text">Sound Effects</div>
                                        <div className="text-xs text-app-text-muted">Scan & interaction audio</div>
                                    </div>
                                </div>
                                <Checkbox label="" checked={soundEnabled} onChange={setSoundEnabled} />
                            </div>

                            <div className="bg-app-surface border border-app-border rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xl">
                                        <i className="fa-solid fa-mobile-screen"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-app-text">Haptic Feedback</div>
                                        <div className="text-xs text-app-text-muted">Device vibrations</div>
                                    </div>
                                </div>
                                <Checkbox label="" checked={hapticEnabled} onChange={setHapticEnabled} />
                            </div>

                            <div className="bg-app-surface border border-app-border rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xl">
                                        <i className="fa-solid fa-bolt"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-app-text">Auto-Scan</div>
                                        <div className="text-xs text-app-text-muted">Automatic submission</div>
                                    </div>
                                </div>
                                <Checkbox label="" checked={autoScan} onChange={setAutoScan} />
                            </div>
                        </div>
                    </section>

                    {/* Support & Preferences */}
                    <section>
                        <h3 className="text-xs font-bold text-app-text-muted uppercase tracking-widest mb-3 px-2">Support</h3>
                        <div className="space-y-2">
                            <div className="bg-app-surface border border-app-border rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xl">
                                        <i className="fa-solid fa-circle-question"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-app-text">Help Tips</div>
                                        <div className="text-xs text-app-text-muted">Interactive hints</div>
                                    </div>
                                </div>
                                <Checkbox label="" checked={showHelp} onChange={setShowHelp} />
                            </div>

                            <button 
                                onClick={onLogout}
                                className="w-full bg-brand-error/10 border border-brand-error/20 hover:bg-brand-error/20 rounded-2xl p-4 flex items-center justify-between transition-all active:scale-95"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-error/20 flex items-center justify-center text-brand-error text-xl">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-brand-error">Log Out</div>
                                        <div className="text-xs text-app-text-muted">Sign out of account</div>
                                    </div>
                                </div>
                                <i className="fa-solid fa-chevron-right text-brand-error/40"></i>
                            </button>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-app-border/20 text-center space-y-2">
                    <p className="text-xs font-bold text-app-text-muted uppercase tracking-wider">Warehouse OS v4.2.0</p>
                    <p className="text-[10px] text-app-text-muted/60">Build 2024.12.25.01</p>
                </div>
            </div>

            {historyOpen && <SyncHistoryModal onClose={() => setHistoryOpen(false)} setSysAlert={setSysAlert} />}
            {checkpointOpen && <CheckpointModal onClose={() => setCheckpointOpen(false)} setSysAlert={setSysAlert} />}
        </div>
    );
};

export default MenuView;


