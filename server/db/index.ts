import { PrismaClient, Prisma } from '@prisma/client'

const client = new PrismaClient()

export { client, Prisma }