import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsNumber,
	IsIn,
	IsMongoId
} from 'class-validator'
import { Types } from 'mongoose'

export class PaymentObjectDto {
	@IsMongoId({ message: 'userId must be a MongoId' })
	@IsNotEmpty({ message: 'userId is required' })
	userId!: Types.ObjectId

	@IsMongoId({ message: 'businessId must be a MongoId' })
	@IsNotEmpty({ message: 'businessId is required' })
	businessId!:Types.ObjectId

	@IsMongoId({ message: 'serviceId must be a MongoId' })
	@IsNotEmpty({ message: 'serviceId is required' })
	serviceId!:Types.ObjectId

  @IsNotEmpty({ message: 'Amount is required' })
	@IsNumber()
	amount: number

  @IsOptional()
	@IsString({ message: 'Concept must be a string' })
	concept?: string
}