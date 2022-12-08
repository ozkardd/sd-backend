import { NextFunction } from 'express'
import { Types } from 'mongoose'
import { envConfig } from '../config'
import {
	InternalServerException,
	InvalidCredentialsException,
	BadRequestException,
} from '../exceptions'
import User from '../db/schemas/User.schema'

export const GetAllUsers = async (next: NextFunction) => {
	try {
		return await User.find({})
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the GetAllUsers service. ${e.message}`,
			),
		)
	}
}