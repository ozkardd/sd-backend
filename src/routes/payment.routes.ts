import { Router } from 'express'
import passport from 'passport'
import * as paymentController from '../controllers/payment.controller'
import { requestBodyValidation } from '../middlewares/validators/requests'
import { PaymentObjectDto } from '../db/schemas/dtos/PaymentObject.dto'

const router = Router()

router.post(
	'/',
	[requestBodyValidation(PaymentObjectDto)],
	paymentController.RegisterPayment,
)

router.get(
	'/',
	paymentController.GetAllPayments,
)


export default router