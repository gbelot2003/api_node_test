import { Request, Response, Router } from "express";
import { registerController, loginController } from "../controllers/auth"


const router = Router();

/**
 * http://localhost3002/auth/register
 */
router.post("/register", registerController)

/*
 * http://localhost3002/auth/login
*/
router.post("/login", loginController)

export { router }