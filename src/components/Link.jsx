import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const CustomLink = ({ href, children, ...props }) => (
  <NextLink passHref href={href}>
    <Link _focus={false} _hover={{ textDecoration: 'none' }} {...props}>
      {children}
    </Link>
  </NextLink>
)

export default CustomLink
