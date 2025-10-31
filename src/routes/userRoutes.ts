import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = Router();

//Define user routes for the api

router.get('/', getUsers);
router.post('/user',createUser);

export default router;