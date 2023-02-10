import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.handle"

const session = (req: Request, res: Response, next: NextFunction) => {
    try {

        const JWTByUser = req.headers.authorization || ''
        const jwt = JWTByUser.split(' ').pop() //
        const isUser = verifyToken(`${jwt}`)
        if (!isUser) {
            res.status(401)
            res.send("NO_VALID_SESSION")
        } else {

            next()
        }


    } catch (error) {
        res.status(400)
        res.send("SESSION_NO_VALIDA")
    }
}

export { session }