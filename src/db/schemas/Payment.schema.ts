import { Schema, model,Types } from 'mongoose'
import IPayment from './interfaces/IPayment.interface'

const PaymentSchema = new Schema<IPayment>(
  {
    userId:{
      type: Schema.Types.ObjectId,
      ref:"user"
    },
    businessId:{
      type: Schema.Types.ObjectId,
      ref:"business"
    },
    serviceId:{
      type: Schema.Types.ObjectId,
    },
    state: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    concept: {
      type: String,
      required: false,
      default: ''
    }
  } , { versionKey: false, timestamps: true },

)

PaymentSchema.plugin(require('mongoose-autopopulate'))

export default model<IPayment>('payment', PaymentSchema)
