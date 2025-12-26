import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';

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
            where.OR = [
                { id: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
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
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        const mo = await prisma.productionOrder.create({
            data: {
                id: body.id,
                status: body.status,
                line: body.line,
                description: body.description,
                dueTime: body.dueTime,
                progress: body.progress || 0,
                parts: {
                    create: body.parts || [],
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