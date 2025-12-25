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
            className={`w-6 h-6 rounded-ios-sm border-2 flex items-center justify-center transition-all ${checked ? 'bg-brand-primary border-brand-primary' : 'border-app-border group-hover:border-brand-primary/50'}`}
        >
            {checked && <i className="fa-solid fa-check text-white text-xs"></i>}
        </div>
        <span className="text-xs font-bold text-brand-muted group-hover:text-app-text transition-colors">{label}</span>
    </label>
);
