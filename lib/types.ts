
export enum View {
    HOME = 'home',
    INBOUND = 'inbound',
    INVENTORY = 'inventory',
    PICKING = 'picking',
    MENU = 'menu',
    PART_DETAIL = 'part-detail',
    MO_DETAIL = 'mo-detail',
    LOCATIONS = 'locations',
    MOVE_STOCK = 'move-stock',
    QUICK_RELOCATE = 'quick-relocate'
}

export interface Activity {
    id: string;
    type: 'move' | 'receive' | 'pick';
    label: string;
    timestamp: string;
    description: string;
}

export interface Movement {
    id: string;
    date: string;
    qty: number;
    source: string;
    destination: string;
    type: 'transfer' | 'inbound' | 'adjustment';
}

export interface Part {
    id: string;
    name: string;
    qty: number;
    unit: string;
    status: 'normal' | 'low' | 'critical' | 'fast';
    icon: string;
    sku: string;
    location: string;
    locationStatus?: 'Available' | 'Reserved' | 'On Hold';
    movements?: Movement[];
}

export interface MO {
    id: string;
    status: 'ready' | 'scheduled' | 'urgent' | 'completed';
    line: string;
    description: string;
    dueTime: string;
    progress: number;
    parts: BOMItem[];
}

export interface BOMItem {
    id: string;
    name: string;
    requiredQty: number;
    picked: boolean;
    unit: string;
    moId: string;
}

export interface InboundInvoice {
    id: string;
    vendor: string;
    po: string;
    status: 'pending' | 'iqc' | 'putaway' | 'completed';
    items: InboundItem[];
}

export interface InboundItem {
    id: string;
    name: string;
    sku: string;
    qty: number;
    unit: string;
    received: boolean;
    receivedQty?: number;
}
