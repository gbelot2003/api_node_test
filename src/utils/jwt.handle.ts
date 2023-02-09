import { sign, verify } from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "tokern.001255"

const generateToker = async (id:string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    })
    
    return jwt
}

const verifyToken = async () => {

}

export { generateToker, verifyToken }