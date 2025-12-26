import { Part } from './types';

export const getLocationMeta = (aisle: string, binNumber: number, inventory: Part[]) => {
    const binFullString = `Aisle ${aisle}, Bin ${binNumber < 10 ? '0' + binNumber : binNumber}`;
    const partsInBin = inventory.filter(p => p.location === binFullString);

    const types = [
        { name: 'IQC Zone', icon: 'fa-microscope', short: 'IQC' },
        { name: 'Pick Zone', icon: 'fa-hand-pointer', short: 'PICK' },
        { name: 'Bulk Store', icon: 'fa-box-archive', short: 'STORE' },
        { name: 'Restricted', icon: 'fa-lock', short: 'SAFE' }
    ];

    const typeIndex = Math.floor((binNumber - 1) / 2);
    const type = types[typeIndex] || types[2];

    let occupancy = partsInBin.length > 0 ? (partsInBin.length / 5) * 100 : 0;
    if (occupancy > 100) occupancy = 100;

    let statusColor = 'brand-blue';
    let statusLabel = 'Normal';

    if (partsInBin.length === 0) {
        statusColor = 'brand-success';
        statusLabel = 'Empty';
    } else if (partsInBin.length >= 5) {
        statusColor = 'brand-error';
        statusLabel = 'Full';
    } else {
        statusColor = 'brand-blue';
        statusLabel = 'Normal';
    }

    return { type, occupancy, statusColor, statusLabel, partsInBin };
};

export const getStatusMeta = (status: Part['status']) => {
    switch (status) {
        case 'critical': return { icon: 'fa-triangle-exclamation', color: 'text-brand-error', bg: 'bg-brand-error/10', text: 'text-brand-error' };
        case 'low': return { icon: 'fa-circle-exclamation', color: 'text-brand-orange', bg: 'bg-brand-orange/10', text: 'text-brand-orange' };
        case 'normal': return { icon: 'fa-circle-check', color: 'text-brand-success', bg: 'bg-brand-success/10', text: 'text-brand-success' };
        case 'fast': return { icon: 'fa-bolt', color: 'text-brand-blue', bg: 'bg-brand-blue/10', text: 'text-brand-blue' };
        default: return { icon: 'fa-circle', color: 'text-app-text-muted', bg: 'bg-white/5', text: 'text-app-text-muted' };
    }
};

