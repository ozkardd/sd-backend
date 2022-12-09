import { Router } from 'express'

import userRoutes from './user.routes'
import businessRoutes from './business.routes'
import paymentRoutes from './payment.routes'


import { NotFoundException } from '../exceptions'

const router = Router()

router.use('/users', userRoutes)
router.use('/business', businessRoutes)
router.use('/payment', paymentRoutes)

router.use('*', (_req, _res, next) => {
	return next(
		new NotFoundException('This route does not exist'),
	)
})

export default router
