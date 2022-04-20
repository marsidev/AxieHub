import { Flex, Text } from '@chakra-ui/react'
import Link from '@components/Link'

const Brand = props => {
  return (
    <Flex
      {...props}
      align='center'
      textAlign='center'
      justify='center'
      ml={2}
    >
      <Link href='/'>
        {/* <Image
          boxSize='40px'
          src={'/favicon.ico'}
          float='left'
        /> */}
        <Text fontSize={['md', 'lg']}>
          Axie<strong>Hub</strong>
        </Text>
      </Link>
    </Flex>
  )
}

export default Brand
