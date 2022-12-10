import { NextFunction } from 'express'
import {
	InternalServerException,
	InvalidCredentialsException,
	BadRequestException,
} from '../exceptions'
import Payment from '../db/schemas/Payment.schema'
import { PaymentObjectDto } from '../db/schemas/dtos/PaymentObject.dto'

export const RegisterPayment = async (
  paymentInfo: PaymentObjectDto,
  next: NextFunction
) => {
	try {
		//should validate if id's exists but nodeJs's callbacks get f*** 
		return await Payment.create({
			userId:paymentInfo.userId,
  			businessId: paymentInfo.businessId,
  			serviceId: paymentInfo.serviceId,
  			state: "PROCESADO",
  			amount: paymentInfo.amount,
  			concept: paymentInfo.concept})
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the RegisterPayment service. ${e.message}`,
			),
		)
	}
}

export const GetAllPayments = async (
  next: NextFunction
) => {
	try {
		return await Payment.find({})
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the GetAllPayments service. ${e.message}`,
			),
		)
	}
}