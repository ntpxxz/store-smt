import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { itemId, receivedQty } = body;

        if (!itemId || receivedQty === undefined) {
            return errorResponse('Missing required fields', 400);
        }

        const result = await prisma.$transaction(async (tx) => {
            // 1. Update Inbound Item
            const updatedItem = await tx.inboundItem.update({
                where: { id: itemId, invoiceId: id },
                data: {
                    received: true,
                    receivedQty: Number(receivedQty),
                },
            });

            // 2. Find or update the Part in inventory
            let part = await tx.part.findUnique({
                where: { sku: updatedItem.sku },
            });

            if (part) {
                // Update existing part quantity
                part = await tx.part.update({
                    where: { id: part.id },
                    data: {
                        qty: part.qty + Number(receivedQty),
                    },
                });
            } else {
                // This is a new part, we might want to create it or handle as error
                part = await tx.part.create({
                    data: {
                        name: updatedItem.name,
                        sku: updatedItem.sku,
                        qty: Number(receivedQty),
                        unit: updatedItem.unit,
                        status: 'normal',
                        icon: '📦',
                        location: 'Receiving Bay',
                    },
                });
            }

            // 3. Create movement record
            await tx.movement.create({
                data: {
                    qty: Number(receivedQty),
                    source: 'Inbound Dock',
                    destination: part.location,
                    type: 'inbound',
                    partId: part.id,
                },
            });

            // 4. Check if all items in invoice are received
            const allItems = await tx.inboundItem.findMany({
                where: { invoiceId: id },
            });

            const allReceived = allItems.every((i) => i.received);
            if (allReceived) {
                await tx.inboundInvoice.update({
                    where: { id: id },
                    data: { status: 'completed' },
                });
            }

            return { item: updatedItem, part };
        });

        return successResponse(result);
    } catch (error: any) {
        console.error('Inbound Receive error:', error);
        if (error.code === 'P2025') {
            return errorResponse('Inbound Item or Invoice not found', 404);
        }
        return errorResponse('Failed to receive item', 500);
    }
}
