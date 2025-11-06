import {Request, Response} from 'express';
//import { getAllUsers } from '../services/userService';
import { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient(); 

// export const createUser = async (req: Request, res: Response) => {
//     // Implementation for creating a user
//     
//     try {
//       const User = await createNewUser(req.body.user);
//       
//       res.json(User);
//    } 
//    catch (error) {
//       console.log(error);
//     }
//     
// }

export const login = async (req:Request, res: Response) => {
  try {
    const {email, password} = req.body;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    res.json(user);
  } catch (error) {
    console.log("Login Failed: ", error);
    return res.json({message: "Login Failed!"}); 
  } 
}
