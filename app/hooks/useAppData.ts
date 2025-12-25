import { useState, useEffect, useCallback } from 'react';
import { api } from '@/lib/api-client';
import { Part, MO, InboundInvoice, Activity } from '@/lib/types';

export const useAppData = (isAuthenticated: boolean) => {
    const [inventory, setInventory] = useState<Part[]>([]);
    const [moList, setMoList] = useState<MO[]>([]);
    const [inbound, setInbound] = useState<InboundInvoice[]>([]);
    const [activityLog, setActivityLog] = useState<Activity[]>([]);
    const [aiInsight, setAiInsight] = useState<string>("Analyzing logistics...");
    const [loading, setLoading] = useState(true);
    const [sysAlert, setSysAlert] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

    const fetchData = useCallback(async () => {
        if (!isAuthenticated) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const [invData, mosData, inbData, insightData] = await Promise.all([
                api.inventory.getAll(),
                api.mos.getAll(),
                api.inbound.getAll(),
                api.insights.get()
            ]);
            setInventory(invData);
            setMoList(mosData);
            setInbound(inbData);
            setAiInsight(insightData.insight);
        } catch (err) {
            console.error('Data fetch error:', err);
            setSysAlert({ message: 'Failed to sync with server', type: 'error' });
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Mock AI Insight updates
    useEffect(() => {
        if (!isAuthenticated) return;
        const insights = [
            "Inventory levels for Gear Nylon 20T are critical. Consider reordering.",
            "Picking speed is up 12% this shift. Great job!",
            "Inbound dock is clear. Ready for next shipment.",
            "Smart Priority: Focus on MO #9992 for urgent delivery."
        ];
        // Only update if we don't have a real one or just to simulate liveliness
        // For now, we rely on API, but this was in the original code as an effect dependent on inventory/moList
        // We can keep it or rely on API. The original code updated it on inventory/moList change.
        // Let's keep the API one as primary, but maybe fallback or rotate if needed.
        // Actually, the original code overwrote the API insight with random ones on dependency change.
        // Let's preserve that behavior for "liveliness" if desired, or stick to API.
        // The original code:
        // useEffect(() => { setAiInsight(...) }, [inventory, moList]);
        // This runs AFTER fetchData sets it. So it overwrites API data immediately.
        // I will keep it to preserve behavior.
        setAiInsight(insights[Math.floor(Math.random() * insights.length)]);
    }, [inventory, moList, isAuthenticated]);

    const addActivity = useCallback((type: Activity['type'], label: string, description: string) => {
        const newActivity: Activity = {
            id: Math.random().toString(36).substring(2, 9),
            type,
            label,
            timestamp: 'Just now',
            description
        };
        setActivityLog(prev => [newActivity, ...prev].slice(0, 5));
    }, []);

    return {
        inventory,
        setInventory,
        moList,
        setMoList,
        inbound,
        setInbound,
        activityLog,
        aiInsight,
        loading,
        sysAlert,
        setSysAlert,
        fetchData,
        addActivity
    };
};
