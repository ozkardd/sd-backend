import { CorsOptions } from 'cors'
import { envConfig } from './env'

const { NODE_ENV, REDIRECT_URL_PRODUCTION } = envConfig

export const corsOptions: CorsOptions = {
	origin:
		NODE_ENV === 'development'
			? 'http://localhost:3000'
			: REDIRECT_URL_PRODUCTION,
	credentials: true,
	methods: [
		'GET',
		'POST',
		'PUT',
		'DELETE',
		'PATCH',
		'OPTIONS',
	],
}
