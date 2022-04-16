import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react'
import ThemeTogler from '@components/Navbar/ThemeTogler'
import Brand from '@components/Navbar/Brand'
import NavItem from '@components/Navbar/NavItem'
import useMobile from '@hooks/useMobile'
import Link from '@components/Link'

const Navbar = props => {
	const isMobile = useMobile()

	return (
		<Box
			as='nav'
			bg={useColorModeValue('white', 'whiteAlpha.50')}
			color={useColorModeValue('gray.700', 'gray.200')}
			shadow='rgba(0, 0, 0, 0.19) 0px 4px 12px, rgba(0, 0, 0, 0.23) 0px 4px 4px'
			{...props}
		>
			<Container
				as={Stack}
				maxW='5xl'
				py={2}
				// direction={{ base: 'column', md: 'row' }}
				direction='row'
				spacing={isMobile ? 2 : 4}
				justify='space-between'
				align='center'
			>
				<Brand />
				<Stack direction='row' spacing={isMobile ? 2 : 4} align='center'>
					<NavItem color='purple'>
						<Link href='/cards/classic'>Classic Cards</Link>
					</NavItem>

					<NavItem color='pink'>
						<Link href='/cards/origin'>Origin Cards</Link>
					</NavItem>
					<ThemeTogler borderRadius='full' size={isMobile ? 'sm' : 'lg'} />
				</Stack>
			</Container>
		</Box>
	)
}

export default Navbar
