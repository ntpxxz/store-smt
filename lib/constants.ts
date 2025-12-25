import { Part, MO, InboundInvoice } from './types';

export const INITIAL_INVENTORY: Part[] = [
    {
        id: '882-991',
        name: 'Screw Hex M4x20',
        qty: 1250,
        unit: 'pcs',
        status: 'normal',
        icon: '🔩',
        sku: 'SH-M4-20',
        location: 'Aisle A, Bin 02',
        locationStatus: 'Available',
        movements: [
            { id: 'm1', date: '2024-05-10', qty: 500, source: 'Receiving Bay', destination: 'Aisle A, Bin 02', type: 'inbound' },
            { id: 'm2', date: '2024-05-12', qty: 100, source: 'Aisle A, Bin 02', destination: 'Line PD-01', type: 'transfer' }
        ]
    },
    {
        id: 'G-202',
        name: 'Gear Nylon 20T',
        qty: 12,
        unit: 'pcs',
        status: 'critical',
        icon: '⚙️',
        sku: 'GN-20T-001',
        location: 'Aisle B, Bin 03',
        locationStatus: 'Reserved',
        movements: [
            { id: 'm3', date: '2024-04-15', qty: 50, source: 'Inbound Dock', destination: 'Aisle B, Bin 03', type: 'inbound' },
            { id: 'm4', date: '2024-05-01', qty: 38, source: 'Aisle B, Bin 03', destination: 'Scrap/QA', type: 'adjustment' }
        ]
    },
    {
        id: 'W-001',
        name: 'Washer M6',
        qty: 5000,
        unit: 'pcs',
        status: 'fast',
        icon: '⭕',
        sku: 'WS-M6-STD',
        location: 'Aisle C, Bin 12',
        locationStatus: 'Available',
        movements: [
            { id: 'm5', date: '2024-05-18', qty: 10000, source: 'Supplier Ship', destination: 'Aisle C, Bin 12', type: 'inbound' }
        ]
    },
    {
        id: 'BL-441',
        name: 'Bolt M4 x 30',
        qty: 85,
        unit: 'pcs',
        status: 'low',
        icon: '🔩',
        sku: 'BL-M4-30',
        location: 'Aisle A, Bin 15',
        locationStatus: 'On Hold',
        movements: [
            { id: 'm6', date: '2024-05-05', qty: 200, source: 'Receiving', destination: 'Aisle A, Bin 15', type: 'inbound' },
            { id: 'm7', date: '2024-05-08', qty: 115, source: 'Aisle A, Bin 15', destination: 'PD-03', type: 'transfer' }
        ]
    },
    {
        id: 'LCD-101',
        name: 'LCD Display 7"',
        qty: 45,
        unit: 'pcs',
        status: 'low',
        icon: '📱',
        sku: 'LCD-7-IND',
        location: 'Aisle D, Bin 01',
        locationStatus: 'Available',
        movements: []
    },
    {
        id: 'PCB-A5',
        name: 'Main Board Rev A',
        qty: 250,
        unit: 'pcs',
        status: 'normal',
        icon: '📟',
        sku: 'PCB-MAIN-A5',
        location: 'Aisle B, Bin 10',
        locationStatus: 'Available',
        movements: []
    },
    {
        id: 'BAT-500',
        name: 'Battery Pack 5000mAh',
        qty: 120,
        unit: 'pcs',
        status: 'normal',
        icon: '🔋',
        sku: 'BAT-5K-LI',
        location: 'Aisle E, Bin 05',
        locationStatus: 'Available',
        movements: []
    },
    {
        id: 'CAB-USB-C',
        name: 'USB-C Cable 1m',
        qty: 1000,
        unit: 'pcs',
        status: 'fast',
        icon: '🔌',
        sku: 'CAB-USBC-1M',
        location: 'Aisle F, Bin 02',
        locationStatus: 'Available',
        movements: []
    }
];

export const INITIAL_MO_LIST: MO[] = [
    {
        id: '9988',
        status: 'ready',
        line: 'PD-01',
        description: 'Control Unit X-500',
        dueTime: '14:00',
        progress: 0,
        parts: [
            { id: 'A1', name: 'Screw M4', requiredQty: 500, picked: false, unit: 'pcs', moId: '9988' },
            { id: 'B2', name: 'Nut M4', requiredQty: 500, picked: false, unit: 'pcs', moId: '9988' },
            { id: 'C3', name: 'Washer M4', requiredQty: 500, picked: false, unit: 'pcs', moId: '9988' }
        ]
    },
    {
        id: '9992',
        status: 'urgent',
        line: 'PD-02',
        description: 'Pump Assembly P-2',
        dueTime: '16:00',
        progress: 60,
        parts: []
    },
    {
        id: '1004',
        status: 'scheduled',
        line: 'PD-03',
        description: 'Relay Module',
        dueTime: 'Tmrw 09:00',
        progress: 20,
        parts: []
    },
    {
        id: '1010',
        status: 'scheduled',
        line: 'PD-01',
        description: 'Smart Sensor Node',
        dueTime: 'Tmrw 13:00',
        progress: 0,
        parts: [
            { id: 'S1', name: 'Sensor Module', requiredQty: 100, picked: false, unit: 'pcs', moId: '1010' }
        ]
    }
];

export const INITIAL_INBOUND: InboundInvoice[] = [
    {
        id: 'INV-2024-001',
        vendor: 'TechParts Corp.',
        po: 'PO-2024-8821',
        status: 'pending',
        items: [
            { id: '1', name: 'Steel Plate 5mm', sku: 'SP-500', qty: 50, unit: 'pcs', received: false },
            { id: '2', name: 'Industrial Glue', sku: 'GL-200', qty: 20, unit: 'btl', received: false }
        ]
    },
    {
        id: 'INV-2024-002',
        vendor: 'Global Logistics',
        po: 'PO-2024-9001',
        status: 'pending',
        items: [
            { id: '3', name: 'Aluminum Case', sku: 'AL-CASE-01', qty: 100, unit: 'pcs', received: false }
        ]
    }
];
