import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const mo = await prisma.productionOrder.findUnique({
            where: { id: id },
            include: { parts: true },
        });

        if (!mo) {
            return errorResponse('Production Order not found', 404);
        }

        return successResponse(mo);
    } catch (error: any) {
        console.error('MO Item GET error:', error);
        return errorResponse('Failed to fetch production order', 500);
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { status, progress, line, description, dueTime } = body;

        const mo = await prisma.productionOrder.update({
            where: { id: id },
            data: {
                status,
                progress: progress !== undefined ? Number(progress) : undefined,
                line,
                description,
                dueTime,
            },
            include: { parts: true },
        });

        return successResponse(mo);
    } catch (error: any) {
        console.error('MO Item PUT error:', error);
        if (error.code === 'P2025') {
            return errorResponse('Production Order not found', 404);
        }
        return errorResponse('Failed to update production order', 500);
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // Delete associated BOM items first (or rely on cascade if configured)
        await prisma.bOMItem.deleteMany({
            where: { moId: id },
        });

        await prisma.productionOrder.delete({
            where: { id: id },
        });

        return successResponse({ message: 'Production Order deleted successfully' });
    } catch (error: any) {
        console.error('MO Item DELETE error:', error);
        if (error.code === 'P2025') {
            return errorResponse('Production Order not found', 404);
        }
        return errorResponse('Failed to delete production order', 500);
    }
}
