import { Schema, model } from 'mongoose'
import IBusiness from './interfaces/IBusiness.interface'

const BusinessSchema = new Schema<IBusiness>(
  {
    name: {
      type: String,
      required: true
    },
    acronym: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    services: {
      type: [{
        name: {
          type: String,
          required: true
        },
        label: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: false,
          default: ''
        }
      }],
			default: [],
			autopopulate: true,
    }
  }
)

BusinessSchema.plugin(require('mongoose-autopopulate'))

export default model<IBusiness>('business', BusinessSchema)