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

const loginController = async ({ body }: Request, res: Response) => {
    try {

        const { email, password } = body
        const responseUser = await loginuser({email, password})
        res.send(responseUser)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_REGISTER_USER', e)
    }
}


export { registerController, loginController }