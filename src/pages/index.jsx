import {
	useColorMode,
	Flex,
	Heading,
	Text,
	Code,
	useToken,
	chakra
} from '@chakra-ui/react'
import Link from '@components/Link'
import Layout from '@layouts/main'

const Card = ({ href, title, description }) => {
	const [teal300, gray200] = useToken('colors', ['teal.300', 'gray.200'])

	return (
		<Link
			isExternal
			href={href}
			m={4}
			p={6}
			textAlign='left'
			border={`1px solid ${gray200}`}
			borderRadius={12}
			transition='0.15s all ease-in-out'
			maxW='340px'
			color='inherit'
			textDecoration='none'
			_hover={{ color: teal300, borderColor: teal300 }}
			_active={{ color: teal300, borderColor: teal300 }}
		>
			<Heading as='h2' fontSize='1.5rem'>
				{title} &rarr;
			</Heading>
			<Text fontSize='1.25rem'>{description}</Text>
		</Link>
	)
}

export default function Home() {
	const { toggleColorMode } = useColorMode()

	return (
		<Layout>
			<chakra.section textAlign='center'>
				<Heading as='h1'>
					Welcome to{' '}
					<Link isExternal color='teal.300' href='https://nextjs.org'>
						Next.js!
					</Link>
				</Heading>

				<Text
					as='button'
					textAlign='center'
					fontSize='1rem'
					mt={2}
					textDecoration='underline'
					cursor='pointer'
					_hover={{ color: 'teal.300' }}
					onClick={toggleColorMode}
				>
					Switch theme
				</Text>

				<Text as='h2' textAlign='center' fontSize='1.3rem' my={6}>
					Get started by editing{' '}
					<Code children='pages/index.js' fontSize='1.2rem' />
				</Text>
			</chakra.section>

			<Flex
				as='section'
				align='center'
				justify='center'
				flexWrap='wrap'
				maxW={800}
				w='100%'
				flexDir={['column', 'row']}
			>
				<Card
					href='https://nextjs.org/docs'
					title='NextJS Docs'
					description='Find in-depth information about Next.js features and API.'
				/>

				<Card
					href='https://nextjs.org/learn'
					title='Learn NextJS'
					description='Learn about Next.js in an interactive course with quizzes!'
				/>

				<Card
					href='https://github.com/vercel/next.js/tree/canary/examples'
					title='NextJS Examples'
					description='Discover and deploy boilerplate example Next.js projects.'
				/>

				<Card
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					title='Deploy'
					description='Instantly deploy your Next.js site to a public URL with Vercel.'
				/>

				<Card
					href='https://chakra-ui.com/docs'
					title='Chakra UI Docs'
					description='Learn how to use the Chakra UI components.'
				/>
			</Flex>
		</Layout>
	)
}
