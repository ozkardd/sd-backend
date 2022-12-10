import { Router } from 'express'
import passport from 'passport'
import * as businessController from '../controllers/business.controller'

const router = Router()

router.get(
	'/',
	businessController.GetAllBussinessServices,
)

router.get(
	'/:_id',
	businessController.GetAllServicesUsers,
)

router.post(
	'/',
	businessController.RegisterBusiness,
)

export default router