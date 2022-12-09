import { ObjectOutDto } from './../db/schemas/dtos/ObjectOut.dto';
import { NextFunction, Request, Response } from 'express'
import { BusinessObjectDto } from '../db/schemas/dtos/BusinessObject.dto'
import { InternalServerException } from '../exceptions'
import * as businessService from '../services/Business.service'
import IBusiness from '../db/schemas/interfaces/IBusiness.interface';

export const GetAllBussinessServices = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const businesses = await businessService.GetAllBusinessServices(next)
    const outDto: ObjectOutDto = {
      data: businesses,
      resultCode: 200,
      message: 'Ok'
    }
		return res
			.status(200)
			.send(outDto)
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the getAllUsers controller. ${e.message}`,
			),
		)
	}
}

export const RegisterBusiness = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
  const businessInfo : BusinessObjectDto = _req.body
	try {
		const business = await businessService.RegisterBusiness(businessInfo, next)
    const outDto: ObjectOutDto = {
      data: business,
      resultCode: 200,
      message: 'Se han registrado correctamente a la empresa y a sus servicios'
    }
		return res
			.status(200)
			.send(outDto)
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the RegisterBusiness controller. ${e.message}`,
			),
		)
	}
}