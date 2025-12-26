import { NextRequest } from 'next/server';
import { requireRole, createResponse, createErrorResponse } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { logger, captureException } from '@/lib/logger';

export async function GET(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        const rows = await prisma.syncCheckpoint.findMany({ orderBy: { createdAt: 'asc' } });
        const mapped = rows.map(r => ({ type: r.type, lastSynced: r.lastSynced ? r.lastSynced.toISOString() : null }));
        return createResponse(mapped);
    } catch (err) {
        logger.error({ err }, 'Failed to list sync checkpoints');
        captureException(err, { component: 'as400', action: 'checkpoint:list' });
        return createErrorResponse('Failed to list sync checkpoints', 500);
    }
}

export async function POST(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        const body = await request.json().catch(() => ({}));
        const type = String(body?.type || '').trim();
        if (!type) return createErrorResponse('Missing checkpoint type', 400);

        if (type === 'all') {
            await prisma.syncCheckpoint.updateMany({ data: { lastSynced: null } });
            return createResponse({ reset: 'all' });
        }

        await prisma.syncCheckpoint.upsert({
            where: { type },
            create: { type, lastSynced: null },
            update: { lastSynced: null },
        });

        return createResponse({ reset: type });
    } catch (err) {
        logger.error({ err }, 'Failed to reset sync checkpoint');
        captureException(err, { component: 'as400', action: 'checkpoint:reset' });
        return createErrorResponse('Failed to reset sync checkpoint', 500);
    }
}

export async function DELETE(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        await prisma.syncCheckpoint.deleteMany({});
        return createResponse({ cleared: true });
    } catch (err) {
        logger.error({ err }, 'Failed to clear all sync checkpoints');
        captureException(err, { component: 'as400', action: 'checkpoint:clear' });
        return createErrorResponse('Failed to clear all sync checkpoints', 500);
    }
}
