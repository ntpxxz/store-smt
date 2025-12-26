import React from 'react';

interface ErrorModalProps {
    title: string;
    message: string;
    onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, onClose }) => {
    return (
        <div className="absolute inset-0 z-[110] flex items-center justify-center p-6 bg-black/20 backdrop-blur-xl animate-fade-in">
            <div className="w-full max-w-sm ios-card border-brand-error/20 p-8 text-center animate-shake">
                <div className="w-20 h-20 bg-brand-error rounded-[22px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(239,68,68,0.2)]">
                    <i className="fa-solid fa-triangle-exclamation text-white text-4xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-app-text mb-2">{title}</h2>
                <p className="text-app-text-muted text-sm mb-8 font-medium leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full bg-brand-error text-white py-5 rounded-[18px] font-bold text-lg shadow-xl shadow-brand-error/20 active:scale-95 transition-all"
                >
                    Dismiss & Retry
                </button>
            </div>
        </div>
    );
};


