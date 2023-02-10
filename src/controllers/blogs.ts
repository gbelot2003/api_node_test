import { Request, Response } from "express"
import { RequestUser } from "../interfaces/RequestUser.interface"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        res.send("hello form controller")
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const getBlogs = (req: RequestUser, res: Response) => {
    try {
        res.send({
            data: "Solo personal autorizado",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}

const postItem = ({ body }: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_POST_POST_BLOG')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_PUT_UPDATE_BLOG')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res, 'ERROR_DESTROY_DELETE_BLOG')
    }
}


export { getItem, getBlogs, updateItem, postItem, deleteItem }