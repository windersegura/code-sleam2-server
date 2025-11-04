import {PrismaClient} from '@prisma/client';
import { CUser } from '../models/user';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany();
}

export const createNewUser = async (user: CUser) => {
    //implementing loginc in prisma to create a new use
    
    return await prisma.user.create({
      data: {
        password: user.password,
        email: user.email,
        completeName: user.completeName
      } 
      
    });
}
