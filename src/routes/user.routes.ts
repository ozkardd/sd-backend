import { Router } from 'express'
import passport from 'passport'
import * as userController from '../controllers/user.controller'

const router = Router()

router.get(
	'/',
	userController.getAllUsers,
)

export default router