import { PrismaClient } from "@prisma/client";

const client = globalThis.prisma || new PrismaClient();
if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') globalThis.prisma = client;

export default client