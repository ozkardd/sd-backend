import { ObjectOutDto } from './../db/schemas/dtos/ObjectOut.dto';
import { NextFunction, Request, Response } from 'express'
import { PaymentObjectDto } from '../db/schemas/dtos/PaymentObject.dto'
import { InternalServerException } from '../exceptions'
import * as paymentService from '../services/Payment.service'
import IPayment from '../db/schemas/interfaces/IPayment.interface';

export const RegisterPayment = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
  	const paymentInfo : PaymentObjectDto = _req.body
	try {
		const payment = await paymentService.RegisterPayment(paymentInfo, next)
		const outDto: ObjectOutDto = {
			data: payment,
			resultCode: 201,
			message: 'Se han registrado correctamente el pago'
		}
		return res
			.status(201)
			.send(outDto)
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the RegisterPayment controller. ${e.message}`,
			),
		)
	}
}