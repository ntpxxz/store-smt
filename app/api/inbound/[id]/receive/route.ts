import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';
import { validateRequest, inboundReceiveSchema } from '@/lib/validation';

export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        // Validate request
        const validation = validateRequest(inboundReceiveSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const { itemId, receivedQty } = validation.data;

        // Update inbound item and check if all items received
        const result = await prisma.$transaction(async (tx) => {
            // Mark item as received
            const item = await tx.inboundItem.update({
                where: { id: itemId },
                data: {
                    received: true,
                    receivedQty,
                },
            });

            // Get all items for this invoice
            const allItems = await tx.inboundItem.findMany({
                where: { invoiceId: params.id },
            });

            // Check if all items received
            const allReceived = allItems.every(i => i.received);

            // Update invoice status
            const invoice = await tx.inboundInvoice.update({
                where: { id: params.id },
                data: {
                    status: allReceived ? 'completed' : 'iqc',
                },
                include: {
                    items: true,
                },
            });

            return invoice;
        });

        return createResponse(result);
    } catch (error) {
        console.error('Receive inbound error:', error);
        return createErrorResponse('Failed to receive inbound item', 500);
    }
}
