import dotenv from 'dotenv'
dotenv.config()

export const envConfig = {
	NODE_ENV: process.env.NODE_ENV as string,
	MONGODB_PRODUCTION_URI: process.env.MONGODB_PRODUCTION_URI as string,
	REDIRECT_URL_PRODUCTION: process.env.REDIRECT_URL_PRODUCTION as string,
}
