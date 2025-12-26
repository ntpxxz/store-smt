import React from 'react';

interface SegmentedControlProps {
    options: string[];
    value: string;
    onChange: (v: any) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, value, onChange }) => (
    <div className="flex bg-black/5 p-1 rounded-2xl border border-app-border w-full">
        {options.map((opt) => (
            <button
                key={opt}
                onClick={() => onChange(opt.toLowerCase())}
                className={`flex-1 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${value.toLowerCase() === opt.toLowerCase() ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-app-text-muted hover:text-app-text'}`}
            >
                {opt}
            </button>
        ))}
    </div>
);

