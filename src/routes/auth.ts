import { Request, Response, Router } from "express";
import { registerController, loginController } from "../controllers/auth"


const router = Router();

/**
 * http://localhost3002/auth/register
 */
router.post("/register")

/*
 * http://localhost3002/auth/login
*/
router.post("/login")

export { router }