import { useEffect, useState } from 'react'

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(1200)
	const handleResize = () => setScreenWidth(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return screenWidth
}

export default useScreenWidth
