import { Flex, Text } from '@chakra-ui/react'
import Link from '@components/Link'

const Brand = () => {
  return (
    <Flex align='center'>
      <Link href='/' aria-label='Axie Hub, Back to homepage'>
        <Text fontSize={['md', 'lg']}>
          Axie<strong>Hub</strong>
        </Text>
      </Link>
    </Flex>
  )
}

export default Brand
