import { PrismaClient } from '@prisma/client';
export * from '@prisma/client';

declare global {
var prisma: PrismaClient;
}

export default function prisma(): PrismaClient {
    globalThis.prisma = globalThis.prisma || new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });

    return globalThis.prisma;
}
