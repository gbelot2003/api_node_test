import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/items"

const getCars = async () => {
    const responseItems = await ItemModel.find({})
    return responseItems
}

const getCar = async (id: String) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem
}


const insertItem = async (item: Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}


const updateCar = async (id: String, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true })
    return responseItem
}

const deleteCar = async (id: String) => {
    const responseItem = await ItemModel.remove({ _id: id })
    return responseItem
}

export { insertItem, getCars, getCar, updateCar, deleteCar }