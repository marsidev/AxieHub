import { memo } from 'react'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1, ease: 'easeOut' }
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.1, ease: 'easeOut' }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.1, ease: 'easeOut' }
  },
  hidden: {
    opacity: 0.5,
    scale: 0.5,
    transition: { duration: 0.1, ease: 'easeOut' }
  }
}

const FloatingButton = props => {
  const {
    ariaLabel,
    onClickHandler,
    icon,
    top = '80%',
    left = '80%',
    ...rest
  } = props

  const MotionButton = motion(IconButton)

  return (
    <MotionButton
      aria-label={ariaLabel}
      onClick={onClickHandler}
      top={top}
      left={left}
      icon={icon}
      variants={variants}
      initial='initial'
      exit='hidden'
      animate='animate'
      whileTap='tap'
      whileHover='hover'
      variant='solid'
      color='white'
      bg={useColorModeValue('blue.500', 'blue.600')}
      _hover={{ bg: useColorModeValue('blue.400', 'blue.500') }}
      _active={{ bg: useColorModeValue('blue.400', 'blue.500') }}
      borderRadius='full'
      border='none'
      zIndex={9}
      size='lg'
      fontSize='20px'
      boxShadow='rgba(0, 0, 0, 0.19) 0px 4px 12px, rgba(0, 0, 0, 0.23) 0px 4px 4px'
      pos='fixed'
      transition='all .5s ease-in-out'
      {...rest}
    />
  )
}

export default memo(FloatingButton)
