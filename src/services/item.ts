import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";


export const insertCars = async (item: Car) => {
  const responseInsert = await ItemModel.create(item)
  return responseInsert
}

export const getCars = async () => {
  const items = await ItemModel.find({})
  return items
}

export const getCar = async (id: string) => {
  const items = await ItemModel.findById(id)
  return items
}

export const updateCar = async (id: string, data: Car) => {
  const items = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true })
  return items
}

export const deleteCar = async (id: string) => {
  const items = await ItemModel.findOneAndRemove({ _id: id })
  return items
}