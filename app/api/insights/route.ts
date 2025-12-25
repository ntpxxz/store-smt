import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET() {
    try {
        // 1. Analyze Inventory for Critical items
        const criticalParts = await prisma.part.findMany({
            where: { status: 'critical' },
            take: 2,
        });

        // 2. Analyze Orders for Urgent/Late items
        const urgentMos = await prisma.productionOrder.findMany({
            where: { status: 'urgent', progress: { lt: 100 } },
            take: 2,
        });

        // 3. Analyze Inbound for Pending items
        const pendingInbound = await prisma.inboundInvoice.findMany({
            where: { status: 'pending' },
            take: 2,
        });

        let insight = "Operations nominal. Standby for tasks.";

        // 4. Deterministic Decision Tree
        if (urgentMos.length > 0) {
            insight = `🚀 Priority: Rush MO #${urgentMos[0].id} (${urgentMos[0].description}) immediately. ${urgentMos.length > 1 ? `Also ${urgentMos.length - 1} more urgent orders.` : ''}`;
        } else if (criticalParts.length > 0) {
            insight = `⚠️ Alert: Stockout risk for ${criticalParts[0].name}. Replenish now.`;
        } else if (pendingInbound.length > 0) {
            insight = `📦 Inbound: ${pendingInbound.length} invoices waiting for processing. Start with ${pendingInbound[0].vendor}.`;
        } else {
            insight = "✅ All clear. System optimized for inbound processing.";
        }

        return successResponse({ insight });
    } catch (e) {
        console.error('Insights GET error:', e);
        return successResponse({ insight: "System ready." });
    }
}