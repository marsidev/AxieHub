/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		PROJECT_ROOT: __dirname
	},
	images: {
		domains: ['cdn.axieinfinity.com']
	}
}

module.exports = nextConfig
