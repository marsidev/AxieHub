import { useEffect, useState } from 'react'
import useScreenWidth from '@hooks/useScreenWidth'

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false)
	const screenWidth = useScreenWidth()

	useEffect(() => {
		setIsMobile(screenWidth <= 768)
	}, [screenWidth])

	return isMobile
}

export default useMobile
