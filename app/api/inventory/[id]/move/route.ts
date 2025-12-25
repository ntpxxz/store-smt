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
        const { qty, source, destination, type } = body;

        if (!qty || !destination || !type) {
            return errorResponse('Missing required fields', 400);
        }

        // Use a transaction to ensure both movement record and part update succeed
        const result = await prisma.$transaction(async (tx) => {
            const part = await tx.part.findUnique({
                where: { id: id },
            });

            if (!part) {
                throw new Error('Part not found');
            }

            // Create movement record
            const movement = await tx.movement.create({
                data: {
                    qty: Number(qty),
                    source: source || part.location,
                    destination,
                    type,
                    partId: id,
                },
            });

            // Update part location and quantity if needed
            const updatedPart = await tx.part.update({
                where: { id: id },
                data: {
                    location: destination,
                },
            });

            return { movement, updatedPart };
        });

        return successResponse(result);
    } catch (error: any) {
        console.error('Inventory Move error:', error);
        if (error.message === 'Part not found') {
            return errorResponse('Part not found', 404);
        }
        return errorResponse('Failed to move part', 500);
    }
}
