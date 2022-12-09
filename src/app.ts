import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {
  corsOptions,
	envConfig
} from './config'
import passport from 'passport'
import routes from './routes/index.routes'

const app: Express = express()

if (envConfig.NODE_ENV === 'development') {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}

app.use(
	express.urlencoded({ extended: true, limit: '25mb' }),
)
app.use(express.json({ limit: '25mb' }))
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(helmet())

app.use(passport.initialize())
app.use('/grogupay/api', routes)

export default app
