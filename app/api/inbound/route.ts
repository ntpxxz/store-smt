import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';
import { logger, captureException } from '@/lib/logger';

export async function GET(request: NextRequest) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        const where: any = {};

        if (status && status !== 'all') {
            where.status = status;
        }

        const invoices = await prisma.inboundInvoice.findMany({
            where,
            include: {
                items: true,
            },
            orderBy: { createdAt: 'desc' },
        });

        return createResponse(invoices);
    } catch (error) {
        logger.error({ err: error }, 'Get inbound error');
        captureException(error, { route: '/api/inbound', action: 'GET' });
        return createErrorResponse('Failed to fetch inbound invoices', 500);
    }
}

export async function POST(request: NextRequest) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        const body = await request.json();

        const invoice = await prisma.inboundInvoice.create({
            data: {
                id: body.id,
                vendor: body.vendor,
                po: body.po,
                status: body.status || 'pending',
                items: {
                    create: body.items || [],
                },
            },
            include: {
                items: true,
            },
        });

        return createResponse(invoice, 201);
    } catch (error) {
        logger.error({ err: error }, 'Create inbound error');
        captureException(error, { route: '/api/inbound', action: 'POST' });
        return createErrorResponse('Failed to create inbound invoice', 500);
    }
}
