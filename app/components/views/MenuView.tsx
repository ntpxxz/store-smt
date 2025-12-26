import React from 'react';
import { View } from '@/lib/types';
import { Checkbox } from '@/app/components/ui/Checkbox';
import { SegmentedControl } from '@/app/components/ui/SegmentedControl';
import { Header } from '@/app/components/ui/Header';

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
}

export const MenuView: React.FC<MenuViewProps> = ({ setCurrentView, onLogout, darkMode, setDarkMode, soundEnabled, setSoundEnabled, hapticEnabled, setHapticEnabled, autoScan, setAutoScan, showHelp, setShowHelp, language, setLanguage, onNavigateToMap }) => {
    return (
        <div className="flex-col flex-1 overflow-y-auto no-scrollbar pb-32 page-enter bg-app-bg">
            <Header
                title="Settings"
                subtitle="System Preferences"
            />

            <div className="px-6 py-8">
                <div className="space-y-10">
                    <section>
                        <h4 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-5 pl-2">Navigation</h4>
                        <div className="ios-card overflow-hidden">
                            <button onClick={onNavigateToMap} className="w-full p-5 flex items-center justify-between hover:bg-black/5 transition-all group active:scale-[0.99]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-lg"><i className="fa-solid fa-map"></i></div>
                                    <span className="font-bold text-base text-app-text">Location Map</span>
                                </div>
                                <i className="fa-solid fa-chevron-right text-xs text-app-text-muted group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-5 pl-2">Interface</h4>
                        <div className="ios-card overflow-hidden">
                            <div className="p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange text-lg"><i className="fa-solid fa-language"></i></div>
                                    <span className="font-bold text-base text-app-text">Language</span>
                                </div>
                                <div className="w-32">
                                    <SegmentedControl options={['EN', 'ES', 'DE']} value={language} onChange={setLanguage} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-5 pl-2">Scanner Feedback</h4>
                        <div className="ios-card overflow-hidden">
                            <div className="p-5 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-success/10 flex items-center justify-center text-brand-success text-lg"><i className="fa-solid fa-volume-high"></i></div>
                                    <span className="font-bold text-base text-app-text">Sound Effects</span>
                                </div>
                                <Checkbox label="" checked={soundEnabled} onChange={setSoundEnabled} />
                            </div>
                            <div className="p-5 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue text-lg"><i className="fa-solid fa-mobile-screen"></i></div>
                                    <span className="font-bold text-base text-app-text">Haptic Feedback</span>
                                </div>
                                <Checkbox label="" checked={hapticEnabled} onChange={setHapticEnabled} />
                            </div>
                            <div className="p-5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-lg"><i className="fa-solid fa-bolt"></i></div>
                                    <span className="font-bold text-base text-app-text">Auto-Scan Mode</span>
                                </div>
                                <Checkbox label="" checked={autoScan} onChange={setAutoScan} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mb-5 pl-2">Support</h4>
                        <div className="ios-card overflow-hidden">
                            <div className="p-5 flex items-center justify-between border-b border-app-border">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-lg"><i className="fa-solid fa-circle-question"></i></div>
                                    <span className="font-bold text-base text-app-text">Show Help Tips</span>
                                </div>
                                <Checkbox label="" checked={showHelp} onChange={setShowHelp} />
                            </div>
                            <button onClick={onLogout} className="w-full p-5 flex items-center justify-between hover:bg-brand-error/10 transition-all group active:scale-[0.99]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-error/10 flex items-center justify-center text-brand-error group-hover:bg-brand-error group-hover:text-white transition-all text-lg"><i className="fa-solid fa-right-from-bracket"></i></div>
                                    <span className="font-bold text-base text-brand-error">Log Out</span>
                                </div>
                                <i className="fa-solid fa-chevron-right text-xs text-brand-error/30 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </section>
                </div>


                <div className="mt-16 text-center">
                    <p className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider">Warehouse OS v4.2.0</p>
                    <p className="text-[9px] text-app-text-muted/50 font-semibold mt-2 uppercase tracking-wider">Build 2024.12.25.01</p>
                </div>
            </div>
        </div>
    );
};


