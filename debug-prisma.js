const { PrismaClient } = require('./generated/prisma-client-v2');
const prisma = new PrismaClient();
console.log('Prisma models:', Object.keys(prisma).filter(k => !k.startsWith('$')));
console.log('User model exists:', !!prisma.user);
process.exit(0);
