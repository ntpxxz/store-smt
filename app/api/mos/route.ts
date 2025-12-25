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
                { id: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
                { line: { contains: search, mode: 'insensitive' } },
            ];
        }

        const mos = await prisma.productionOrder.findMany({
            where,
            include: { parts: true },
            orderBy: { updatedAt: 'desc' },
        });

        return successResponse(mos);
    } catch (error: any) {
        console.error('MOs GET error:', error);
        return errorResponse('Failed to fetch production orders', 500);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, status, line, description, dueTime, parts } = body;

        if (!id || !line || !description) {
            return errorResponse('Missing required fields', 400);
        }

        const mo = await prisma.productionOrder.create({
            data: {
                id,
                status: status || 'ready',
                line,
                description,
                dueTime,
                progress: 0,
                parts: {
                    create: parts?.map((p: any) => ({
                        name: p.name,
                        requiredQty: p.requiredQty,
                        unit: p.unit,
                        picked: false,
                    })),
                },
            },
            include: { parts: true },
        });

        return successResponse(mo, 201);
    } catch (error: any) {
        console.error('MOs POST error:', error);
        if (error.code === 'P2002') {
            return errorResponse('MO ID already exists', 400);
        }
        return errorResponse('Failed to create production order', 500);
    }
}