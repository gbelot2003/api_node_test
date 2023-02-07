/**
 * Modelo de Cars para items
 */

import { hash } from "bcryptjs";
import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
    {
        name: {
            required: true,
            type: String
        },
        email: {
            required: true,
            type: String,
            unique: true
        },
        password: {
            required: true,
            type: String
        },
        description: {
            type: String,
            default: "Soy un nuevo usuario de este website, Saludos"
        }

    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel = model('users', userSchema)

export default UserModel