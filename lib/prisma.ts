import { PrismaClient } from '@/generated/prisma-client-v2';
import { logger, captureException } from './logger';
import startAS400Cron from './as400-cron';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn', 'info'] : ['error'],
    });

// Attach runtime listeners to forward Prisma events to pino / Sentry
try {
    // Guard for $on presence
    const anyPrisma = prisma as unknown as { $on?: (event: string, cb: (payload: unknown) => void) => void };
    if (anyPrisma.$on) {
        anyPrisma.$on('query', (payload) => {
            try {
                logger.debug({ payload: typeof payload === 'object' ? JSON.parse(JSON.stringify(payload)) : String(payload) }, 'Prisma query');
            } catch (err) {
                logger.debug({ payload: String(payload) }, 'Prisma query (stringified)');
            }
        });

        anyPrisma.$on('info', (payload) => {
            logger.info({ payload: typeof payload === 'object' ? JSON.parse(JSON.stringify(payload)) : String(payload) }, 'Prisma info');
        });

        anyPrisma.$on('warn', (payload) => {
            logger.warn({ payload: typeof payload === 'object' ? JSON.parse(JSON.stringify(payload)) : String(payload) }, 'Prisma warn');
        });

        anyPrisma.$on('error', (payload) => {
            logger.error({ payload: typeof payload === 'object' ? JSON.parse(JSON.stringify(payload)) : String(payload) }, 'Prisma error');
            captureException(payload, { component: 'prisma' });
        });
    }
} catch (err) {
    // swallow
    logger.warn('Failed to attach Prisma event listeners', String(err));
}

// Start AS400 cron unless disabled and only on server
try {
    if (process.env.AS400_SYNC_ENABLED !== 'false' && typeof window === 'undefined') {
        startAS400Cron();
    }
} catch (e) {
    logger.warn('Failed to start AS400 cron from prisma module', String(e));
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;