import { useEffect, useState } from 'react'

const useSsrValue = value => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? value : null
}

export default useSsrValue
