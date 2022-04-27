import { memo, useEffect, useState } from 'react'
import { Box, Flex, HStack, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import ThemeTogler from '@components/Navbar/ThemeTogler'
import NavItem from '@components/Navbar/NavItem'
import SidebarNav from '@components/Navbar/SidebarNav'
import Brand from '@components/Navbar/Brand'
import Link from '@components/Link'
import { GoThreeBars as BarsIcon } from 'react-icons/go'

const Navbar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 150) setHasScrolled(true)
      else setHasScrolled(false)
    })
  }, [])

  return (
    <Box
      as='header'
      transition='box-shadow 0.2s ease 0s, background-color 0.2s ease 0s'
      pos='sticky'
      top={0}
      zIndex={3}
      bg={useColorModeValue('white', 'gray.800')}
      shadow={hasScrolled ? 'md' : 'none'}
      left={0}
      right={0}
      width='100%'
      {...props}
    >
      <Flex minH='10vh' h='full' mx='auto' maxW='5xl' align='center'>
        <Flex justify='space-between' align='center' w='100%' h='100%' px={6}>
          <Brand />

          <Flex align='center' justify='flex-end' w='100%' maxW='1100px'>
            <HStack align='center' display={{ base: 'none', md: 'block' }}>
              <NavItem color='savannah'>
                <Link href='/cards/classic'>Classic Cards</Link>
              </NavItem>

              <NavItem color='origin'>
                <Link href='/cards/origin'>Origin Cards</Link>
              </NavItem>
            </HStack>

            <HStack align='center'>
              <ThemeTogler />

              <Box ml={5} display={{ base: 'block', md: 'none' }}>
                <IconButton variant='ghost' onClick={onOpen}>
                  <BarsIcon />
                </IconButton>
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Flex>

      <SidebarNav isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default memo(Navbar)
