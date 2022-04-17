import {
	Box,
	Container,
	HStack,
	IconButton,
	Stack,
	useColorModeValue,
	Text
} from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import useMobile from '@hooks/useMobile'
import Link from '@components/Link'

const TWITTER_URL = 'https://twitter.com/marsigliacr'
const GITHUB_URL = 'https://github.com/marsigliadev/AxieHub'

const SocialButton = ({ children, href, isMobile }) => {
	return (
		<Link href={href} isExternal>
			<IconButton
				bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
				variant='ghost'
				borderRadius='full'
				transition='background 0.3s ease'
				size={isMobile ? 'sm' : 'lg'}
				_hover={
					isMobile
						? null
						: { bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300') }
				}
			>
				{children}
			</IconButton>
		</Link>
	)
}

const Footer = props => {
	const isMobile = useMobile()

	return (
		<Box
			as='footer'
			bg={useColorModeValue('white', 'whiteAlpha.50')}
			color={useColorModeValue('gray.700', 'gray.200')}
			shadow='rgba(0, 0, 0, 0.19) 0px 4px 12px, rgba(0, 0, 0, 0.23) 0px 4px 4px'
			{...props}
		>
			<Container
				as={Stack}
				maxW='5xl'
				py={2}
				direction={{ base: 'column', md: 'row' }}
				spacing={isMobile ? 2 : 4}
				justify='space-between'
				align='center'
			>

				<Box>
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
				</Box>

				<HStack spacing={isMobile ? 2 : 4} align='center'>
					<SocialButton href={GITHUB_URL} isMobile={isMobile}>
						<FaGithub />
					</SocialButton>
					<SocialButton href={TWITTER_URL} isMobile={isMobile}>
						<FaTwitter />
					</SocialButton>
				</HStack>
			</Container>
		</Box>
	)
}

export default Footer
