import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/User"
import { encrypt, verify } from "../utils/passwordHandle"


const registerNewUser = async ({ name, email, password }: User) => {

    const check = await UserModel.findOne({ email: email })

    if (check) return "ALREDY_USER"

    const pass = await encrypt(password)

    console.log(pass)

    const registerNewUser = await UserModel.create({ name, email, password: pass })

    return registerNewUser
}

const loginuser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })

    if (!checkIs) return "NOT_FOUND_USER"

    const passwordHash = checkIs.password // encriptado

    const isCorrect = await verify(password, passwordHash)

    if (!isCorrect) return "PASSWORD_INCORRECT"

    return checkIs
}

export { registerNewUser, loginuser }