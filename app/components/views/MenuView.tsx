import React from 'react';
import { View } from '@/lib/types';
import { Checkbox } from '@/app/components/ui/Checkbox';
import { SegmentedControl } from '@/app/components/ui/SegmentedControl';

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
}

export const MenuView: React.FC<MenuViewProps> = ({ setCurrentView, onLogout, darkMode, setDarkMode, soundEnabled, setSoundEnabled, hapticEnabled, setHapticEnabled, autoScan, setAutoScan, showHelp, setShowHelp, language, setLanguage }) => {
    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter">
            <div className="px-6 py-8">
                <h1 className="text-3xl font-black text-app-text mb-2">Settings</h1>
                <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-8">System Preferences</p>

                <div className="space-y-8">
                    <section>
                        <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] mb-4 pl-2">Interface</h4>
                        <div className="bg-app-surface border border-app-border rounded-[20px] overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"><i className="fa-solid fa-moon"></i></div>
                                    <span className="font-bold text-sm text-app-text">Dark Mode</span>
                                </div>
                                <Checkbox label="" checked={darkMode} onChange={setDarkMode} />
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange"><i className="fa-solid fa-language"></i></div>
                                    <span className="font-bold text-sm text-app-text">Language</span>
                                </div>
                                <div className="w-32">
                                    <SegmentedControl options={['EN', 'ES', 'DE']} value={language} onChange={setLanguage} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] mb-4 pl-2">Scanner Feedback</h4>
                        <div className="bg-app-surface border border-app-border rounded-[20px] overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success"><i className="fa-solid fa-volume-high"></i></div>
                                    <span className="font-bold text-sm text-app-text">Sound Effects</span>
                                </div>
                                <Checkbox label="" checked={soundEnabled} onChange={setSoundEnabled} />
                            </div>
                            <div className="p-4 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue"><i className="fa-solid fa-mobile-screen"></i></div>
                                    <span className="font-bold text-sm text-app-text">Haptic Feedback</span>
                                </div>
                                <Checkbox label="" checked={hapticEnabled} onChange={setHapticEnabled} />
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500"><i className="fa-solid fa-bolt"></i></div>
                                    <span className="font-bold text-sm text-app-text">Auto-Scan Mode</span>
                                </div>
                                <Checkbox label="" checked={autoScan} onChange={setAutoScan} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] mb-4 pl-2">Support</h4>
                        <div className="bg-app-surface border border-app-border rounded-[20px] overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"><i className="fa-solid fa-circle-question"></i></div>
                                    <span className="font-bold text-sm text-app-text">Show Help Tips</span>
                                </div>
                                <Checkbox label="" checked={showHelp} onChange={setShowHelp} />
                            </div>
                            <button onClick={onLogout} className="w-full p-4 flex items-center justify-between hover:bg-red-500/5 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-error/10 flex items-center justify-center text-brand-error group-hover:bg-brand-error group-hover:text-white transition-colors"><i className="fa-solid fa-right-from-bracket"></i></div>
                                    <span className="font-bold text-sm text-brand-error">Log Out</span>
                                </div>
                                <i className="fa-solid fa-chevron-right text-xs text-brand-error/50"></i>
                            </button>
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Warehouse OS v4.2.0</p>
                    <p className="text-[9px] text-brand-muted/50 font-bold mt-1">Build 2024.12.25.01</p>
                </div>
            </div>
        </div>
    );
};
