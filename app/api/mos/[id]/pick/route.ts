import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';
import { validateRequest, pickPartSchema } from '@/lib/validation';

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
        const validation = validateRequest(pickPartSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const { bomItemId } = validation.data;

        // Update BOM item as picked and recalculate MO progress
        const result = await prisma.$transaction(async (tx) => {
            // Mark BOM item as picked
            const bomItem = await tx.bOMItem.update({
                where: { id: bomItemId },
                data: { picked: true },
            });

            // Get all BOM items for this MO
            const allBomItems = await tx.bOMItem.findMany({
                where: { moId: params.id },
            });

            // Calculate progress
            const pickedCount = allBomItems.filter(item => item.picked).length;
            const progress = Math.round((pickedCount / allBomItems.length) * 100);

            // Update MO progress and status
            const mo = await tx.productionOrder.update({
                where: { id: params.id },
                data: {
                    progress,
                    status: progress === 100 ? 'completed' : 'scheduled',
                },
                include: {
                    parts: true,
                },
            });

            return mo;
        });

        return createResponse(result);
    } catch (error) {
        console.error('Pick part error:', error);
        return createErrorResponse('Failed to pick part', 500);
    }
}
