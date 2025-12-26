import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { validateRequest, productionOrderSchema } from '@/lib/validation';
import { verifyAuth, createResponse, createErrorResponse, requireRole } from '@/lib/auth';

export async function GET(request: NextRequest) {
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
                { id: { contains: q, mode: 'insensitive' } },
                { description: { contains: q, mode: 'insensitive' } },
            ];
        }

        const mos = await prisma.productionOrder.findMany({
            where,
            include: {
                parts: true,
            },
            orderBy: [
                { status: 'asc' }, // urgent first
                { createdAt: 'desc' },
            ],
        });

        return createResponse(mos);
    } catch (error) {
        console.error('Get MOs error:', error);
        return createErrorResponse('Failed to fetch production orders', 500);
    }
}

export async function POST(request: NextRequest) {
    // Require OPERATOR or ADMIN to create MOs
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        // Validate request
        const validation = validateRequest(productionOrderSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const validated = validation.data;

        // Normalize id and description
        const id = validated.id.trim();
        const description = validated.description.trim();

        const mo = await prisma.productionOrder.create({
            data: {
                id,
                status: validated.status,
                line: validated.line.trim(),
                description,
                dueTime: validated.dueTime,
                progress: validated.progress || 0,
                parts: {
                    create: (body.parts || []).map((p: any) => ({ ...p })),
                },
            },
            include: {
                parts: true,
            },
        });

        return createResponse(mo, 201);
    } catch (error) {
        console.error('Create MO error:', error);
        return createErrorResponse('Failed to create production order', 500);
    }
}