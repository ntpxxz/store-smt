import React from 'react';

export const StatusBar: React.FC = () => (
    <div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-xs font-medium z-50 bg-app-surface/90 backdrop-blur-md sticky top-0 border-b border-app-border shrink-0 text-app-text">
        <span>9:41 AM</span>
        <div className="flex gap-2 items-center">
            <span className="flex items-center gap-1 text-brand-success">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse"></div>
                AS400 Online
            </span>
            <i className="fa-solid fa-wifi ml-2"></i>
            <i className="fa-solid fa-battery-full"></i>
        </div>
    </div>
);
