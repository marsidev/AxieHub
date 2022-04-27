import { memo } from 'react'
import { Box, Flex, IconButton, useColorModeValue, Text } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Link from '@components/Link'

const TWITTER_URL = 'https://twitter.com/marsigliacr'
const GITHUB_URL = 'https://github.com/marsigliadev/AxieHub'

const SocialButton = ({ children, href }) => {
  return (
    <Link href={href} isExternal>
      <IconButton
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        variant='ghost'
        borderRadius='full'
        transition='background 0.3s ease'
        gap={{ base: 'sm', md: 'lg' }}
        _hover={{ bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300') }}
      >
        {children}
      </IconButton>
    </Link>
  )
}

const Footer = props => {
  return (
    <Box
      as='footer'
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      shadow='md'
      width='100%'
      h='auto'
      {...props}
    >
      <Flex
        minH='10vh'
        h='full'
        mx='auto'
        maxW='5xl'
        align='center'
        py={2}
      >
        <Flex
          justify='space-between'
          align='center'
          w='100%'
          h='100%'
          px={6}
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
        >
          <Flex align='left' justify='flex-start'>
            <Text
              color={useColorModeValue('#8e8e8e', 'gray.500')}
              fontSize='14px'
            >
              {'Made with ♥ by '}
              <Link
                href={TWITTER_URL}
                color={useColorModeValue('blue.600', 'blue.300')}
                isExternal
              >
                Luis Marsiglia
              </Link>
              {'.'}
            </Text>
          </Flex>

          <Flex
            align='center'
            justify='flex-end'
            maxW='1100px'
            gap={{ base: 2, md: 4 }}
          >
            <SocialButton href={GITHUB_URL}>
              <FaGithub />
            </SocialButton>
            <SocialButton href={TWITTER_URL}>
              <FaTwitter />
            </SocialButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default memo(Footer)
