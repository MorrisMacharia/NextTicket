import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const globalAny: typeof globalThis & { prisma?: PrismaClient } = global;

if (!globalThis.prisma) {
  globalAny.prisma = new PrismaClient();
}
prisma = globalAny.prisma;

export default prisma;
