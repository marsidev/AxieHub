/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  images: {
    domains: ['cdn.axieinfinity.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cards/origin',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
