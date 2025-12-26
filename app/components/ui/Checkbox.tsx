import React from 'react';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer group select-none">
        <div
            onClick={() => onChange(!checked)}
            className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${checked ? 'bg-brand-primary border-brand-primary shadow-lg shadow-brand-primary/20' : 'bg-black/5 border-black/10 group-hover:border-black/20'}`}
        >
            {checked && <i className="fa-solid fa-check text-white text-[10px]"></i>}
        </div>
        {label && <span className="text-xs font-bold text-app-text-muted group-hover:text-app-text transition-colors">{label}</span>}
    </label>
);

