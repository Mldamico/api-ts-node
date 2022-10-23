import { deleteCar, updateCar } from './../services/item';
import { Request, Response } from "express"
import { insertCars, getCars, getCar } from "../services/item"
import { handleHttp } from "../utils/error.handle"


const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const item = await getCar(id)
    res.send(item)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (req: Request, res: Response) => {

  try {
    const item = await getCars()
    res.send(item)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const createItem = async ({ body }: Request, res: Response) => {
  try {
    const item = await insertCars(body)
    res.send(item)
  } catch (e) {
    handleHttp(res, 'ERROR_CREATE_ITEM', e)
  }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const item = await updateCar(id, body)
    res.send(item)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const item = await deleteCar(id)
    res.send(item)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItem, getItems, createItem, updateItem, deleteItem }