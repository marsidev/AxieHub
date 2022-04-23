export const server =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5900'
    : 'https://axiehub.vercel.app'
