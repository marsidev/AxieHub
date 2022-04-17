export const server =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000'
		: 'https://axie-hub.vercel.app'
