import React from 'react';
import { View } from '@/lib/types';

interface NavigationProps {
    active: View;
    onSwitch: (v: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ active, onSwitch }) => {
    const tabs = [
        { id: View.HOME, icon: 'fa-house', label: 'Home' },
        { id: View.INBOUND, icon: 'fa-truck-ramp-box', label: 'Inbound' },
        { id: View.INVENTORY, icon: 'fa-shapes', label: 'Parts' },
        { id: View.PICKING, icon: 'fa-dolly', label: 'Pick' },
        { id: View.MENU, icon: 'fa-bars', label: 'Menu' },
    ];

    return (
        <div className="absolute bottom-0 w-full h-[88px] bg-app-surface/80 backdrop-blur-2xl border-t border-app-border flex items-center justify-around pb-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            {tabs.map((tab) => {
                const isActive = active === tab.id || (tab.id === View.INVENTORY && (active === View.PART_DETAIL || active === View.MOVE_STOCK));
                return (
                    <button
                        key={tab.id}
                        onClick={() => onSwitch(tab.id)}
                        className={`flex flex-col items-center gap-1.5 w-16 group transition-all ${isActive ? 'scale-110' : 'opacity-40 hover:opacity-60'}`}
                    >
                        <i className={`fa-solid ${tab.icon} text-xl ${isActive ? 'text-brand-primary drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]' : 'text-app-text'}`}></i>
                        <span className={`text-[10px] uppercase tracking-wider font-bold ${isActive ? 'text-brand-primary' : 'text-app-text'}`}>{tab.label}</span>
                    </button>
                );
            })}
        </div>
    );
};

