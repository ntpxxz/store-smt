import { PrismaClient } from '../generated/prisma-client-v2';

const globalForPrisma = global as unknown as { prisma_v2: PrismaClient };

export const prisma =
    globalForPrisma.prisma_v2 ||
    new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma_v2 = prisma;