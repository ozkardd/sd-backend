import { Router } from 'express'
import passport from 'passport'
import * as paymentController from '../controllers/payment.controller'

const router = Router()

router.post(
	'/pay',
	paymentController.RegisterPayment,
)

router.get(
	'/pay_history',
	paymentController.GetAllPayments,
)


export default router