import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        const where: any = {};
        if (status && status !== 'all') {
            where.status = status;
        }

        const invoices = await prisma.inboundInvoice.findMany({
            where,
            include: { items: true },
            orderBy: { updatedAt: 'desc' },
        });

        return successResponse(invoices);
    } catch (error: any) {
        console.error('Inbound GET error:', error);
        return errorResponse('Failed to fetch inbound invoices', 500);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { id, vendor, po, status, items } = body;

        if (!id || !vendor || !po) {
            return errorResponse('Missing required fields', 400);
        }

        const invoice = await prisma.inboundInvoice.create({
            data: {
                id,
                vendor,
                po,
                status: status || 'pending',
                items: {
                    create: items?.map((i: any) => ({
                        name: i.name,
                        sku: i.sku,
                        qty: i.qty,
                        unit: i.unit,
                        received: false,
                        receivedQty: 0,
                    })),
                },
            },
            include: { items: true },
        });

        return successResponse(invoice, 201);
    } catch (error: any) {
        console.error('Inbound POST error:', error);
        if (error.code === 'P2002') {
            return errorResponse('Invoice ID already exists', 400);
        }
        return errorResponse('Failed to create inbound invoice', 500);
    }
}
