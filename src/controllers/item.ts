import { Request, response, Response } from "express"
import { insertItem, getCars, getCar, updateCar, deleteCar } from "../services/items"
import { handleHttp } from "../utils/error.handle"

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await getCar(id)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertItem(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_POST_ITEM', e)
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await updateCar(id, body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_PUT_UPDATE_ITEM')
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const responseItem = await deleteCar(id)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_DESTROY_DELETE_ITEM')
    }
}


export { getItem, getItems, updateItem, postItem, deleteItem }