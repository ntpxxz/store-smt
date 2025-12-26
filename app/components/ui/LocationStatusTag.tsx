import React from 'react';

interface LocationStatusTagProps {
    status?: string;
    size?: 'sm' | 'md';
}

export const LocationStatusTag: React.FC<LocationStatusTagProps> = ({ status, size = 'sm' }) => {
    if (!status) return null;
    let config = {
        color: 'text-app-text-muted',
        bg: 'bg-black/5',
        border: 'border-black/5',
        icon: 'fa-question-circle'
    };

    switch (status) {
        case 'Available':
            config = { color: 'text-brand-success', bg: 'bg-brand-success/10', border: 'border-brand-success/20', icon: 'fa-circle-check' };
            break;
        case 'Reserved':
            config = { color: 'text-brand-blue', bg: 'bg-brand-blue/10', border: 'border-brand-blue/20', icon: 'fa-clock' };
            break;
        case 'On Hold':
            config = { color: 'text-brand-orange', bg: 'bg-brand-orange/10', border: 'border-brand-orange/20', icon: 'fa-pause-circle' };
            break;
    }



    return (
        <span className={`flex items-center gap-1.5 font-semibold uppercase rounded-full border ${config.bg} ${config.color} ${config.border} ${size === 'sm' ? 'text-[8px] px-2 py-0.5' : 'text-[9px] px-2.5 py-1'}`}>
            <i className={`fa-solid ${config.icon} ${size === 'sm' ? 'text-[7px]' : 'text-[8px]'}`}></i>
            {status}
        </span>
    );
};
