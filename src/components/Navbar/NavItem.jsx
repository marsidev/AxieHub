import { Button, useColorModeValue, useToken } from '@chakra-ui/react'

const NavItem = ({ color, children }) => {
  const [color1, color2] = useToken('colors', [`${color}.400`, `${color}.500`])

  return (
    <Button
      variant='ghost'
      boxShadow={`inset 0 0 0 0 ${color1}`}
      borderRadius={12}
      // bgGradient='linear(to-r, pink.400, orange.300)'
      _hover={{
        boxShadow: useColorModeValue(
          `inset 0 -2.5rem 0 0 ${color1}`,
          `inset 0 -2.5rem 0 0 ${color2}`
        )
      }}
    >
      {children}
    </Button>
  )
}

export default NavItem
