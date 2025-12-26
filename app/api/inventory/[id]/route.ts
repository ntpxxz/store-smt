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
        const part = await prisma.part.findUnique({
            where: { id: params.id },
            include: {
                movements: {
                    orderBy: { date: 'desc' },
                },
            },
        });

        if (!part) {
            return createErrorResponse('Part not found', 404);
        }

        return createResponse(part);
    } catch (error) {
        console.error('Get part error:', error);
        return createErrorResponse('Failed to fetch part', 500);
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        const part = await prisma.part.update({
            where: { id: params.id },
            data: {
                ...body,
                updatedAt: new Date(),
            },
        });

        return createResponse(part);
    } catch (error) {
        console.error('Update part error:', error);
        return createErrorResponse('Failed to update part', 500);
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        await prisma.part.delete({
            where: { id: params.id },
        });

        return createResponse({ message: 'Part deleted successfully' });
    } catch (error) {
        console.error('Delete part error:', error);
        return createErrorResponse('Failed to delete part', 500);
    }
}
