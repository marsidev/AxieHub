export const onError = (error, req, res) => {
  console.error(error?.stack)

  if (error?.response?.data) {
    const { status, data } = error.response
    return res.status(status).json({ error: data })
  }

  if (error?.code === 'ECONNREFUSED') {
    return res.status(500).json({ error: 'Could not connect to the API' })
  }

  if (error?.code === 'ECONNRESET') {
    return res.status(500).json({ error: 'Could not connect to the API' })
  }

  if (error.message) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(500).end()
}

export const onNoMatch = (req, res) => {
  res.status(405).json({ error: 'Method not allowed' })
}
