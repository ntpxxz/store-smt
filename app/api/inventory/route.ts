import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { validateRequest, partSchema } from '@/lib/validation';
import { verifyAuth, createResponse, createErrorResponse, requireRole } from '@/lib/auth';
import { logger, captureException } from '@/lib/logger';

export async function GET(request: NextRequest) {
    // Verify authentication
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const search = searchParams.get('search');

        const where: any = {};

        if (status && status !== 'all') {
            where.status = status;
        }

        if (search) {
            const q = search.trim();
            where.OR = [
                { name: { contains: q, mode: 'insensitive' } },
                { sku: { contains: q, mode: 'insensitive' } },
            ];
        }

        const parts = await prisma.part.findMany({
            where,
            include: {
                movements: {
                    orderBy: { date: 'desc' },
                    take: 10,
                },
            },
            orderBy: { updatedAt: 'desc' },
        });

        return createResponse(parts);
    } catch (error) {
        logger.error({ err: error }, 'Get inventory error');
        captureException(error, { route: '/api/inventory', action: 'GET' });
        return createErrorResponse('Failed to fetch inventory', 500);
    }
}

export async function POST(request: NextRequest) {
    // Require OPERATOR or ADMIN to create parts
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        // Validate request
        const validation = validateRequest(partSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const validated = validation.data;

        // Normalize strings
        const sku = validated.sku.trim();
        const name = validated.name.trim();
        const location = validated.location.trim();
        const icon = validated.icon?.trim?.() || '';

        // Prevent duplicate SKU
        const existing = await prisma.part.findUnique({ where: { sku } });
        if (existing) {
            return createErrorResponse('Part with this SKU already exists', 409);
        }

        const part = await prisma.part.create({
            data: {
                name,
                qty: validated.qty,
                unit: validated.unit,
                status: validated.status,
                icon,
                sku,
                location,
                locationStatus: validated.locationStatus || 'Available',
            },
        });

        return createResponse(part, 201);
    } catch (error) {
        logger.error({ err: error }, 'Create part error');
        captureException(error, { route: '/api/inventory', action: 'POST' });
        return createErrorResponse('Failed to create part', 500);
    }
}
