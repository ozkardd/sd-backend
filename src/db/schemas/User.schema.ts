import { Schema, model } from 'mongoose'
import { IUser } from './interfaces/IUser.interface'

const UserSchema = new Schema<IUser>(
  {
    name: {
			type: String,
			required: true,
		},
    email: {
			type: String,
			required: true,
			unique: true,
		}
  },
  { versionKey: false, timestamps: true },
)

UserSchema.plugin(require('mongoose-autopopulate'))

export default model<IUser>('user', UserSchema)