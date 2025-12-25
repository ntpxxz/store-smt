import React from 'react';
import { View } from '@/lib/types';

interface NavigationProps {
    active: View;
    onSwitch: (v: View) => void;
    onQuickRelocate: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ active, onSwitch, onQuickRelocate }) => {
    const tabs = [
        { id: View.HOME, icon: 'fa-house', label: 'Home' },
        { id: View.INBOUND, icon: 'fa-truck-ramp-box', label: 'Inbound' },
        { id: View.INVENTORY, icon: 'fa-shapes', label: 'Parts', center: true },
        { id: View.PICKING, icon: 'fa-dolly', label: 'Pick' },
        { id: View.MENU, icon: 'fa-bars', label: 'Menu' },
    ];

    return (
        <div className="absolute bottom-0 w-full h-[88px] bg-app-surface/90 backdrop-blur-xl border-t border-app-border flex items-center justify-around pb-6 z-40">
            {/* Quick Move FAB */}
            <button
                onClick={onQuickRelocate}
                className="absolute -top-16 right-6 w-14 h-14 bg-brand-primary rounded-full shadow-2xl shadow-brand-primary/40 flex items-center justify-center text-white active:scale-90 transition-transform z-50 group"
            >
                <i className="fa-solid fa-bolt text-xl group-active:rotate-12"></i>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-success rounded-full border-2 border-app-bg"></div>
            </button>

            {tabs.map((tab) => {
                const isActive = active === tab.id || (tab.id === View.INVENTORY && (active === View.PART_DETAIL || active === View.MOVE_STOCK || active === View.LOCATIONS));
                return (
                    <button
                        key={tab.id}
                        onClick={() => onSwitch(tab.id)}
                        className={`flex flex-col items-center gap-1.5 w-16 group transition-all ${isActive ? 'active' : 'opacity-60'} ${tab.center ? '-mt-8' : ''}`}
                    >
                        <div className={tab.center ? `w-14 h-14 bg-app-surface border border-app-border rounded-[15px] flex items-center justify-center shadow-lg group-[.active]:border-brand-primary group-[.active]:bg-brand-primary group-[.active]:shadow-[0_0_20px_rgba(0,70,255,0.4)]` : ''}>
                            <i className={`fa-solid ${tab.icon} text-xl ${isActive ? 'text-brand-primary' : 'text-brand-muted'} ${tab.center && isActive ? 'text-white' : ''}`}></i>
                        </div>
                        <span className={`text-[10px] ${isActive ? 'text-app-text font-bold' : 'text-brand-muted'} ${tab.center ? 'mt-1' : ''}`}>{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
};
