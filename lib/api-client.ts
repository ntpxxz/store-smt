import { Part, MO, InboundInvoice } from './types';
import { enqueueRequest, getCachedData, setCachedData } from './offline';

const API_BASE = '/api';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    // Build URL
    const fullPath = `${API_BASE}${path}`;

    // Headers
    const headers = new Headers(options.headers);

    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/json');

    const method = (options.method || 'GET').toUpperCase();

    // If running in browser and offline, queue non-GET requests and return queued indicator
    if (typeof window !== 'undefined' && !navigator.onLine && method !== 'GET') {
        await enqueueRequest(method, path.startsWith('/') ? path : path, options.body ? JSON.parse(options.body as string) : undefined, Object.fromEntries(headers.entries()));
        // Return a lightweight queued response so callers can continue UX flows
        return ({ queued: true } as unknown) as T;
    }

    // GET caching: try fetch, fallback to cache
    if (method === 'GET' && typeof window !== 'undefined') {
        try {
            const response = await fetch(fullPath, { ...options, headers });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'API request failed');
            // Cache successful GET responses
            try { await setCachedData(fullPath, result.data); } catch (e) { /* ignore cache errors */ }
            return result.data as T;
        } catch (err) {
            // If fetch failed, try cached value
            const cached = await getCachedData(fullPath);
            if (cached !== null) return cached as T;
            throw err;
        }
    }

    // Default behavior for online requests (POST/PUT/etc.)
    const response = await fetch(fullPath, { ...options, headers });
    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'API request failed');
    }

    return result.data as T;
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
    },
    as400: {
        sync: (type: 'po' | 'mo' | 'all' = 'all') => request<any>('/as400/sync', { method: 'POST', body: JSON.stringify({ type }) }),
        history: {
            list: (limit?: number) => request<any[]>(`/as400/history?${new URLSearchParams(limit ? { limit: String(limit) } : {}).toString()}`),
            clear: () => request<any>('/as400/history', { method: 'DELETE' }),
        },
        checkpoint: {
            list: () => request<Array<{ type: string; lastSynced: string | null }>>('/as400/checkpoint'),
            reset: (type: string) => request<any>('/as400/checkpoint', { method: 'POST', body: JSON.stringify({ type }) }),
            clear: () => request<any>('/as400/checkpoint', { method: 'DELETE' }),
        }
    }
};
