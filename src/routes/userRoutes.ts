import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

//Define user routes for the api

router.get('/', getUsers);

export default router;