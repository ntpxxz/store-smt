import React from 'react';

export const StatusBar: React.FC = () => (
    <div className="h-12 w-full flex items-end justify-between px-6 pb-2 text-[10px] font-bold z-50 bg-app-bg/80 backdrop-blur-2xl sticky top-0 border-b border-app-border shrink-0 text-app-text uppercase tracking-wider">
        <span>9:41 AM</span>
        <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1.5 text-brand-success">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
                AS400 Online
            </span>
            <div className="flex gap-2 text-app-text-muted">
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-battery-full"></i>
            </div>
        </div>
    </div>
);


