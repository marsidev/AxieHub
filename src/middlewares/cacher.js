import NodeCache from 'node-cache'

// duration in seconds
const handler = (duration = 60) => {
  const cache = new NodeCache()
  return async (req, res, next) => {
    const key = req.url
    const cached = cache.get(key)
    if (cached) {
      return res.json(cached)
    }

    res.sendResponse = res.json
    res.json = body => {
      if (!body.error && duration && duration > 0 && res.statusCode < 400) {
        cache.set(key, body, duration)
      }

      res.sendResponse(body)
    }

    next()
  }
}

export default handler
