import cron from 'node-cron';
import { logger, captureException } from './logger';
import { syncPOsToLocal, syncMOsToLocal } from './as400';

const CRON_EXPR = process.env.AS400_SYNC_CRON || '*/5 * * * *'; // every 5 minutes by default

let started = false as boolean;

export function startAS400Cron() {
    if (started) return;
    // Avoid starting in browser or edge environments
    if (typeof window !== 'undefined') return;

    try {
        logger.info({ cron: CRON_EXPR }, 'Starting AS400 cron job');
        cron.schedule(CRON_EXPR, async () => {
            logger.info('AS400 cron tick - starting sync');
            try {
                const pRes = await syncPOsToLocal();
                logger.info({ importedPOs: pRes.imported }, 'AS400 POs synced');
            } catch (err) {
                captureException(err, { component: 'as400', action: 'cron:syncPOs' });
                logger.error({ err }, 'AS400 PO sync failed in cron');
            }

            try {
                const mRes = await syncMOsToLocal();
                logger.info({ importedMOs: mRes.imported }, 'AS400 MOs synced');
            } catch (err) {
                captureException(err, { component: 'as400', action: 'cron:syncMOs' });
                logger.error({ err }, 'AS400 MO sync failed in cron');
            }
        }, { scheduled: true });

        started = true;
    } catch (err) {
        captureException(err, { component: 'as400', action: 'cron:start' });
        logger.warn('Failed to start AS400 cron job', String(err));
    }
}

export default startAS400Cron;
