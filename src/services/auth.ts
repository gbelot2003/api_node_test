import { User } from "../interfaces/user.interface"
import UserModel from "../models/User"
import { encrypt } from "../utils/passwordHandle"


const registerNewUser = async ({ name, email, password }: User) => {
   
    const check = await UserModel.findOne({ email: email })
    
    if (check) return "ALREDY_USER"

    const pass = await encrypt(password)
    
    console.log(pass)
    
    const registerNewUser = await UserModel.create({name, email, password: pass })

    return registerNewUser 
}

const loginuser = async () => {

}

export { registerNewUser, loginuser }