import React from 'react';

interface SegmentedControlProps {
    options: string[];
    value: string;
    onChange: (v: any) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, value, onChange }) => (
    <div className="flex bg-app-bg p-1 rounded-ios-sm border border-app-border w-full">
        {options.map((opt) => (
            <button
                key={opt}
                onClick={() => onChange(opt.toLowerCase())}
                className={`flex-1 py-1.5 rounded-[10px] text-[10px] font-bold uppercase tracking-widest transition-all ${value.toLowerCase() === opt.toLowerCase() ? 'bg-app-surface text-app-text shadow-sm' : 'text-brand-muted hover:text-app-text'}`}
            >
                {opt}
            </button>
        ))}
    </div>
);
