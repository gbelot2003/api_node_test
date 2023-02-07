import { Request, Response } from "express"
import { loginuser, registerNewUser } from "../services/auth"
import { handleHttp } from "../utils/error.handle"

const registerController = async ({ body }: Request, res: Response) => {
    
    try {
        const responseUser = await registerNewUser(body)
        res.send(responseUser)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_REGISTER_USER', e)
    }

 }

const loginController = async (req: Request, res: Response) => { }


export { registerController, loginController }