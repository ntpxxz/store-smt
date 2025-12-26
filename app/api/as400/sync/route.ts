import { NextRequest } from 'next/server';
import { requireRole, createResponse, createErrorResponse } from '@/lib/auth';
import { syncPOsToLocal, syncMOsToLocal } from '@/lib/as400';
import { logger, captureException } from '@/lib/logger';

export async function POST(request: NextRequest) {
    const authResult = await requireRole(['ADMIN', 'OPERATOR'])(request);
    if ('error' in authResult) return createErrorResponse(authResult.error, authResult.status);

    try {
        const { type } = await request.json().catch(() => ({ type: 'all' }));

        const results: any = {};
        if (type === 'po') {
            const r = await syncPOsToLocal();
            results.pos = r;
        } else if (type === 'mo') {
            const r = await syncMOsToLocal();
            results.mos = r;
        } else {
            const r1 = await syncPOsToLocal();
            const r2 = await syncMOsToLocal();
            results.pos = r1;
            results.mos = r2;
        }

        logger.info({ results }, 'AS400 sync performed via API');
        return createResponse({ success: true, results });
    } catch (err) {
        logger.error({ err }, 'AS400 sync failed');
        captureException(err, { component: 'as400', action: 'api:sync' });
        return createErrorResponse('AS400 sync failed', 500);
    }
}
