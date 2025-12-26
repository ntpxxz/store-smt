import React, { useEffect } from 'react';

interface SystemAlertProps {
    message: string;
    type?: 'error' | 'success';
    onClose: () => void;
}

export const SystemAlert: React.FC<SystemAlertProps> = ({ message, type = 'error', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === 'success' ? 'bg-brand-success' : 'bg-brand-error';
    const shadowColor = type === 'success' ? 'shadow-brand-success/20' : 'shadow-brand-error/20';
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';

    return (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[120] w-[90%] max-w-[380px] animate-fade-in">
            <div className={`${bgColor} text-white p-5 rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] ${shadowColor} flex items-center gap-4 border border-white/20 backdrop-blur-xl`}>
                <div className="w-12 h-12 bg-white/20 rounded-[15px] flex items-center justify-center shrink-0 shadow-inner">
                    <i className={`fa-solid ${icon} text-2xl`}></i>
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-[10px] uppercase tracking-wider mb-0.5 opacity-80">{type === 'success' ? 'System Notification' : 'Security Alert'}</h4>
                    <p className="text-sm font-bold leading-tight">{message}</p>
                </div>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                    <i className="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>
    );
};


