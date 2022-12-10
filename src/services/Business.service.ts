import { NextFunction } from 'express'
import { Types } from 'mongoose'
import { envConfig } from '../config'
import {
	InternalServerException,
	InvalidCredentialsException,
	BadRequestException,
} from '../exceptions'
import Business from '../db/schemas/Business.schema'
import Payment from '../db/schemas/Payment.schema'
import { BusinessObjectDto } from '../db/schemas/dtos/BusinessObject.dto'

export const GetAllBusinessServices = async (next: NextFunction) => {
	try {
		return await Business.find({})
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the GetAllBusinessServices service. ${e.message}`,
			),
		)
	}
}

export const RegisterBusiness = async (
  businessInfo: BusinessObjectDto,
  next: NextFunction
) => {
	try {
		return await Business.create({
      name: businessInfo.name,
      acronym: businessInfo.acronym,
      description: businessInfo.description,
      services: businessInfo.services
    })
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the RegisterBusiness service. ${e.message}`,
			),
		)
	}
}

export const GetAllServicesUsers = async (next: NextFunction, _id: string) => {
	try {
		return await Payment.find({businessId: _id})
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the GetAllPayments service. ${e.message}`,
			),
		)
	}
}