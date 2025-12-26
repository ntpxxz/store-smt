import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';
import { validateRequest, moveInventorySchema } from '@/lib/validation';

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
        const validation = validateRequest(moveInventorySchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const { qty, destination, type } = validation.data;

        // Get current part
        const part = await prisma.part.findUnique({
            where: { id: params.id },
        });

        if (!part) {
            return createErrorResponse('Part not found', 404);
        }

        // Check if enough quantity available
        if (type === 'transfer' && part.qty < qty) {
            return createErrorResponse('Insufficient quantity', 400);
        }

        // Create movement record and update part quantity
        const result = await prisma.$transaction(async (tx) => {
            // Create movement
            const movement = await tx.movement.create({
                data: {
                    partId: params.id,
                    qty,
                    source: part.location,
                    destination,
                    type,
                },
            });

            // Update part quantity and location
            let newQty = part.qty;
            if (type === 'transfer') {
                newQty = part.qty - qty;
            } else if (type === 'inbound') {
                newQty = part.qty + qty;
            } else if (type === 'adjustment') {
                newQty = qty; // Direct adjustment
            }

            const updatedPart = await tx.part.update({
                where: { id: params.id },
                data: {
                    qty: newQty,
                    location: type === 'transfer' ? destination : part.location,
                    status: newQty === 0 ? 'critical' : newQty < 10 ? 'low' : 'normal',
                },
            });

            return { movement, part: updatedPart };
        });

        return createResponse(result);
    } catch (error) {
        console.error('Move inventory error:', error);
        return createErrorResponse('Failed to move inventory', 500);
    }
}
