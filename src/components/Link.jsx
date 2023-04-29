import { Link as ChakraLink, forwardRef } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Link = forwardRef(({ children, ...props }, ref) => (
  <ChakraLink _focus={false} _hover={{ textDecoration: 'none' }} ref={ref} as={NextLink} {...props}>
    {children}
  </ChakraLink>
))

export default Link
