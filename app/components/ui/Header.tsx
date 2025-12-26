import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
    onBack?: () => void;
    rightElement?: React.ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onBack, rightElement, className = '' }) => {
    return (
        <div className={`px-6 pt-8 pb-4 sticky top-0 bg-app-bg/80 backdrop-blur-2xl z-20 flex items-center justify-between border-b border-app-border ${className}`}>
            <div className="flex items-center gap-4">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="w-11 h-11 rounded-2xl bg-black/5 border border-black/5 shadow-sm flex items-center justify-center text-app-text active:scale-95 transition-all hover:bg-black/10"
                    >
                        <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                )}
                <div>
                    <h2 className="text-2xl font-bold text-app-text leading-tight">{title}</h2>
                    {subtitle && <p className="text-[10px] font-semibold text-app-text-muted uppercase tracking-wider mt-0.5">{subtitle}</p>}
                </div>
            </div>
            {rightElement && <div className="text-app-text">{rightElement}</div>}
        </div>
    );
};

