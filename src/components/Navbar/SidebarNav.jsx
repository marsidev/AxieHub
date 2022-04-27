import { memo } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import Link from '@components/Link'
import { IoClose as CloseIcon } from 'react-icons/io5'

const DrawerItem = ({ href, label }) => {
  return (
    <Box
      as='li'
      display='flex'
      userSelect='none'
      alignItems='center'
      lineHeight='1.5'
      w='100%'
    >
      <Link
        href={href}
        px={3}
        py={1}
        borderRadius='md'
        fontSize='sm'
        fontWeight={500}
        color='gray.700'
        transition='all 0.2s'
      >
        {label}
      </Link>
    </Box>
  )
}

const SidebarNav = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={4}>
          <Flex align='center' justify='flex-end'>
            <IconButton variant='ghost' onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Flex>

          <VStack align='center' textAlign='left'>
            <Box w='100%' mt={4}>
              <Text
                w='100%'
                textTransform='uppercase'
                letterSpacing='wide'
                fontSize='xs'
                fontWeight='bold'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                userSelect='none'
                color={useColorModeValue('teal.500', 'teal.300')}
              >
                Cards Explorer
              </Text>

              <Box mt={2} mx='calc(var(--chakra-space-3) * -1)'>
                <VStack as='ul'>
                  <DrawerItem href='/cards/origin' label='Origin Cards' />
                  <DrawerItem href='/cards/classic' label='Classic Cards' />
                </VStack>
              </Box>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default memo(SidebarNav)
