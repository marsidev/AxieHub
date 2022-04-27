import { useEffect, useState } from 'react'
import { Box, Flex, HStack, IconButton, Show, useColorModeValue, useDisclosure } from '@chakra-ui/react'
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
      <Box h='full' mx='auto' maxW='8xl'>
        <Flex justify='space-between' align='center' w='100%' h='100%' px={6}>
          <Brand />

          <Flex align='center' justify='flex-end' w='100%' maxW='1100px'>
            <HStack align='center'>
              <Show above='md'>
                <NavItem color='savannah'>
                  <Link href='/cards/classic'>Classic Cards</Link>
                </NavItem>

                <NavItem color='origin'>
                  <Link href='/cards/origin'>Origin Cards</Link>
                </NavItem>
              </Show>
            </HStack>

            <HStack align='center'>
              <ThemeTogler />

              <Show below='md'>
                <IconButton variant='ghost' ml={5} onClick={onOpen}>
                  <BarsIcon />
                </IconButton>
              </Show>
            </HStack>
          </Flex>
        </Flex>
      </Box>

      <SidebarNav isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Navbar
