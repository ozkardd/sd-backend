import { Types } from 'mongoose'

export default interface IService {
  _id?: Types.ObjectId
  name: string
  label: string
  description?: string
}