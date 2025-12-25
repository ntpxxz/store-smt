import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(request: Request) {
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
                { id: { contains: search, mode: 'insensitive' } },
            ];
        }

        const parts = await prisma.part.findMany({
            where,
            orderBy: { updatedAt: 'desc' },
            include: {
                movements: {
                    take: 10,
                    orderBy: { date: 'desc' },
                },
            },
        });

        return successResponse(parts);
    } catch (error: any) {
        console.error('Inventory GET error:', error);
        return errorResponse('Failed to fetch inventory', 500);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, qty, unit, status, icon, sku, location } = body;

        // Basic validation
        if (!name || !sku || !location) {
            return errorResponse('Missing required fields', 400);
        }

        const part = await prisma.part.create({
            data: {
                name,
                qty: Number(qty) || 0,
                unit,
                status: status || 'normal',
                icon: icon || '📦',
                sku,
                location,
            },
        });

        return successResponse(part, 201);
    } catch (error: any) {
        console.error('Inventory POST error:', error);
        if (error.code === 'P2002') {
            return errorResponse('SKU already exists', 400);
        }
        return errorResponse('Failed to create part', 500);
    }
}
