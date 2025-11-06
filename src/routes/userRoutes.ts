import { Router } from "express";
import { login } from "../controllers/userController";

const router = Router();

//Define user routes for the api

router.post('/login',login);

export default router;
