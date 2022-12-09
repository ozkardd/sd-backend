import { Types } from 'mongoose'
import IService from './IService.interface'

export default interface IBusiness {
  _id?: Types.ObjectId
  name: string
  acronym: string
  description?: string
  services: Array<IService>
}