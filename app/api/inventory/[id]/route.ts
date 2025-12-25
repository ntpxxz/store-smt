import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const part = await prisma.part.findUnique({
            where: { id: id },
            include: { movements: { orderBy: { date: 'desc' } } },
        });

        if (!part) {
            return errorResponse('Part not found', 404);
        }

        return successResponse(part);
    } catch (error: any) {
        console.error('Inventory Item GET error:', error);
        return errorResponse('Failed to fetch part', 500);
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { name, qty, unit, status, icon, sku, location, locationStatus } = body;

        const part = await prisma.part.update({
            where: { id: id },
            data: {
                name,
                qty: qty !== undefined ? Number(qty) : undefined,
                unit,
                status,
                icon,
                sku,
                location,
                locationStatus,
            },
        });

        return successResponse(part);
    } catch (error: any) {
        console.error('Inventory Item PUT error:', error);
        if (error.code === 'P2025') {
            return errorResponse('Part not found', 404);
        }
        return errorResponse('Failed to update part', 500);
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.part.delete({
            where: { id: id },
        });

        return successResponse({ message: 'Part deleted successfully' });
    } catch (error: any) {
        console.error('Inventory Item DELETE error:', error);
        if (error.code === 'P2025') {
            return errorResponse('Part not found', 404);
        }
        return errorResponse('Failed to delete part', 500);
    }
}
