import { syncPOsToLocal, syncMOsToLocal } from './as400';
import { logger, captureException } from './logger';

const LOOP = process.env.AS400_SYNC_LOOP !== 'false'; // default true for containerized worker
const INTERVAL = Number(process.env.AS400_SYNC_INTERVAL || '300'); // seconds

async function runOnce() {
    try {
        logger.info('Starting AS400 sync (one-shot)');
        const p = await syncPOsToLocal();
        logger.info({ importedPOs: p.imported }, 'PO sync finished');
    } catch (err) {
        captureException(err, { component: 'as400-sync', action: 'po' });
        logger.error({ err }, 'PO sync failed');
    }

    try {
        const m = await syncMOsToLocal();
        logger.info({ importedMOs: m.imported }, 'MO sync finished');
    } catch (err) {
        captureException(err, { component: 'as400-sync', action: 'mo' });
        logger.error({ err }, 'MO sync failed');
    }
}

async function sleepSeconds(s: number) {
    return new Promise((res) => setTimeout(res, s * 1000));
}

async function main() {
    if (!LOOP) {
        await runOnce();
        process.exit(0);
    }

    logger.info({ interval: INTERVAL }, 'Starting AS400 sync loop');
    let running = true;
    process.on('SIGINT', () => { running = false; });
    process.on('SIGTERM', () => { running = false; });

    while (running) {
        try {
            await runOnce();
        } catch (err) {
            captureException(err, { component: 'as400-sync', action: 'loop' });
            logger.error({ err }, 'AS400 sync loop iteration failed');
        }
        // wait
        let waited = 0;
        while (running && waited < INTERVAL) {
            await sleepSeconds(1);
            waited += 1;
        }
    }

    logger.info('AS400 sync worker shutting down');
    process.exit(0);
}

main().catch(err => {
    captureException(err, { component: 'as400-sync', action: 'main' });
    logger.error({ err }, 'AS400 sync worker failed');
    process.exit(1);
});
