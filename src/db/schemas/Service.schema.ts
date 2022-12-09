import { Schema, model } from 'mongoose'

const ServiceSchema = new Schema(
  {
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
  }
)

ServiceSchema.plugin(require('mongoose-autopopulate'))

export default model('service', ServiceSchema)