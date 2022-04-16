import { memo } from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { BsSunFill as SunIcon, BsMoonFill as MoonIcon } from 'react-icons/bs'
import { motion } from 'framer-motion'

const variants = {
	initial: { scale: 1 },
	tap: { scale: 0.9, transition: { duration: 0.1, ease: 'easeOut' } },
	hover: { scale: 1.1, transition: { duration: 0.1, ease: 'easeOut' } }
}

const ThemeToggler = ({ ...props }) => {
	const { colorMode, toggleColorMode } = useColorMode()

	const MotionButton = motion(IconButton)

	return (
		<MotionButton
			variants={variants}
			initial='initial'
			whileTap='tap'
			variant='ghost'
			transition='background 0.3s ease'
			size='lg'
			onClick={toggleColorMode}
			{...props}
		>
			{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
		</MotionButton>
	)
}

export default memo(ThemeToggler)
