import {Request, Response} from 'express';
import { getAllUsers, createNewUser } from '../services/userService';
import { CUser } from "../models/user"

export const getUsers = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.json(users);
}

export const createUser = async (req: Request, res: Response) => {
    // Implementation for creating a user
    const newUser: CUser = new CUser();
    
    //new user mapping 
    try {
      newUser.password = req.body.user.password;
      newUser.email = req.body.user.email;
      newUser.completeName = req.body.user.completeName;
     // newUser.createAt = Date.now();
      const User = await createNewUser(newUser)
      
      res.json(User);
   } 
   catch (error) {
      console.log(error);
    }

    
}
