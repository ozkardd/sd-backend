import { NextFunction, Request, Response } from 'express'
import { InternalServerException } from '../exceptions'
import * as userService from '../services/User.service'

export const getAllUsers = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const users = await userService.GetAllUsers(next)
		return res
			.status(200)
			.send({ status: 200, allUsers: users })
	} catch (e: any) {
		return next(
			new InternalServerException(
				`There was an unexpected error with the getAllUsers controller. ${e.message}`,
			),
		)
	}
}