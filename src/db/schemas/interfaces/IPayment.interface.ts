import { Types } from 'mongoose'
import IService from './IService.interface'

export default interface IPayment {
  _id?: Types.ObjectId
  userId: Types.ObjectId
  businessId: Types.ObjectId
  serviceId: Types.ObjectId
  state: string
  amount: Types.Decimal128
  concept: string
}