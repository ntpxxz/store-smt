import React from 'react';

interface ErrorModalProps {
    title: string;
    message: string;
    onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, onClose }) => {
    return (
        <div className="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-brand-error/20 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-sm bg-app-surface border border-brand-error/30 rounded-[30px] p-8 shadow-2xl text-center animate-shake">
                <div className="w-20 h-20 bg-brand-error rounded-[22px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
                    <i className="fa-solid fa-triangle-exclamation text-white text-4xl"></i>
                </div>
                <h2 className="text-2xl font-black text-app-text mb-2 tracking-tighter">{title}</h2>
                <p className="text-brand-muted text-sm mb-8 font-medium leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-brand-error text-white py-5 rounded-[18px] font-black text-lg shadow-xl active:scale-95 transition-all"
                >
                    Dismiss & Retry
                </button>
            </div>
        </div>
    );
};
