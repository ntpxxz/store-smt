import { NextRequest } from 'next/server';
import { requireRole, createResponse, createErrorResponse } from '@/lib/auth';
import { listSyncHistory, clearSyncHistory } from '@/lib/sync-history';
import { logger, captureException } from '@/lib/logger';

export async function GET(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        const { searchParams } = new URL(request.url);
        const limit = Number(searchParams.get('limit') || '100');
        const list = await listSyncHistory(limit);
        return createResponse(list);
    } catch (err) {
        logger.error({ err }, 'Failed to list sync history');
        captureException(err, { component: 'as400', action: 'history:list' });
        return createErrorResponse('Failed to list sync history', 500);
    }
}

export async function DELETE(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        await clearSyncHistory();
        return createResponse({ cleared: true });
    } catch (err) {
        logger.error({ err }, 'Failed to clear sync history');
        captureException(err, { component: 'as400', action: 'history:clear' });
        return createErrorResponse('Failed to clear sync history', 500);
    }
}
