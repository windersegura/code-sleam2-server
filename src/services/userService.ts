import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany();
}

export const createNewUser = async () => {
    //implementing loginc in prisma to create a new user
}