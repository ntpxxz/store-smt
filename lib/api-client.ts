import { Part, MO, InboundInvoice } from './types';

const API_BASE = '/api';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;

    const headers = new Headers(options.headers);
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');

    const response = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers,
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'API request failed');
    }

    return result.data;
}

export const api = {
    inventory: {
        getAll: (status?: string, search?: string) => {
            const params = new URLSearchParams();
            if (status) params.append('status', status);
            if (search) params.append('search', search);
            return request<Part[]>(`/inventory?${params.toString()}`);
        },
        getOne: (id: string) => request<Part>(`/inventory/${id}`),
        create: (data: Partial<Part>) => request<Part>('/inventory', { method: 'POST', body: JSON.stringify(data) }),
        update: (id: string, data: Partial<Part>) => request<Part>(`/inventory/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
        move: (id: string, data: { qty: number; destination: string; type: string }) =>
            request<any>(`/inventory/${id}/move`, { method: 'POST', body: JSON.stringify(data) }),
        transfer: (id: string, qty: number, destination: string) =>
            request<any>(`/inventory/${id}/move`, { method: 'POST', body: JSON.stringify({ qty, destination, type: 'transfer' }) }),
    },
    mos: {
        getAll: (status?: string, search?: string) => {
            const params = new URLSearchParams();
            if (status) params.append('status', status);
            if (search) params.append('search', search);
            return request<MO[]>(`/mos?${params.toString()}`);
        },
        getOne: (id: string) => request<MO>(`/mos/${id}`),
        pick: (moId: string, bomItemId: string) =>
            request<MO>(`/mos/${moId}/pick`, { method: 'POST', body: JSON.stringify({ bomItemId }) }),
    },
    inbound: {
        getAll: (status?: string) => {
            const params = new URLSearchParams();
            if (status) params.append('status', status);
            return request<InboundInvoice[]>(`/inbound?${params.toString()}`);
        },
        receive: (invoiceId: string, itemId: string, receivedQty: number) =>
            request<any>(`/inbound/${invoiceId}/receive`, { method: 'POST', body: JSON.stringify({ itemId, receivedQty }) }),
    },
    insights: {
        get: () => request<{ insight: string }>('/insights'),
    },
    auth: {
        login: (credentials: any) => request<any>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
        register: (data: any) => request<any>('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    }
};
