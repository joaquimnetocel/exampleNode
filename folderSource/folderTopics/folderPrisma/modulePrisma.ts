// NPM MODULES
import prisma from "@prisma/client";
/////

const { PrismaClient } = prisma;
const modulePrisma = new PrismaClient();

export { modulePrisma };
