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
        const { bomItemId } = body;

        if (!bomItemId) {
            return errorResponse('Missing BOM Item ID', 400);
        }

        const result = await prisma.$transaction(async (tx) => {
            // 1. Update BOM item status
            const updatedBomItem = await tx.bOMItem.update({
                where: { id: bomItemId, moId: id },
                data: { picked: true },
            });

            // 2. Calculate new progress for the MO
            const allBomItems = await tx.bOMItem.findMany({
                where: { moId: id },
            });

            const pickedCount = allBomItems.filter((i) => i.picked).length;
            const progress = Math.round((pickedCount / allBomItems.length) * 100);

            // 3. Update MO progress
            const updatedMO = await tx.productionOrder.update({
                where: { id: id },
                data: { progress },
                include: { parts: true },
            });

            return updatedMO;
        });

        return successResponse(result);
    } catch (error: any) {
        console.error('MO Pick error:', error);
        if (error.code === 'P2025') {
            return errorResponse('BOM Item or MO not found', 404);
        }
        return errorResponse('Failed to pick item', 500);
    }
}
