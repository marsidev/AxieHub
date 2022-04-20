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
        destination: '/cards/classic',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
