import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';

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
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { sku: { contains: search, mode: 'insensitive' } },
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
        console.error('Get inventory error:', error);
        return createErrorResponse('Failed to fetch inventory', 500);
    }
}

export async function POST(request: NextRequest) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        const part = await prisma.part.create({
            data: {
                name: body.name,
                qty: body.qty,
                unit: body.unit,
                status: body.status,
                icon: body.icon,
                sku: body.sku,
                location: body.location,
                locationStatus: body.locationStatus || 'Available',
            },
        });

        return createResponse(part, 201);
    } catch (error) {
        console.error('Create part error:', error);
        return createErrorResponse('Failed to create part', 500);
    }
}
