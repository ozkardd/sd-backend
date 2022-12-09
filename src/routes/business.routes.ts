import { Router } from 'express'
import passport from 'passport'
import * as businessController from '../controllers/business.controller'

const router = Router()

router.get(
	'/',
	businessController.GetAllBussinessServices,
)

router.post(
	'/',
	businessController.RegisterBusiness,
)

export default router