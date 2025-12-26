import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const mo = await prisma.productionOrder.findUnique({
            where: { id: params.id },
            include: {
                parts: true,
            },
        });

        if (!mo) {
            return createErrorResponse('Production order not found', 404);
        }

        return createResponse(mo);
    } catch (error) {
        console.error('Get MO error:', error);
        return createErrorResponse('Failed to fetch production order', 500);
    }
}
