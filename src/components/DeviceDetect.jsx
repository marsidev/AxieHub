import useMobile from '@hooks/useMobile'
import { Box } from '@chakra-ui/react'

export const MobileView = ({ children, ...props }) => {
  const isMobile = useMobile()

  if (!isMobile) return null
  return <Box {...props}>{children}</Box>
}

export const DesktopView = ({ children, ...props }) => {
  const isMobile = useMobile()

  if (isMobile) return null
  return <Box {...props}>{children}</Box>
}

