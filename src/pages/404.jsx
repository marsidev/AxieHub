import Head from 'next/head'
import Layout from '@layouts/main'
import { Heading, Container, Center, HStack, StackDivider } from '@chakra-ui/react'

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>404: This page could not be found</title>
			</Head>

			<Container>
				<Center>
					<HStack
						divider={<StackDivider minH='50px' borderColor='gray.400' />}
						spacing={4}
						align='center'
					>
						<Heading as='h1' fontWeight={600} fontSize={24}>
							404
						</Heading>

						<Heading as='h2' fontWeight={400} fontSize={14}>
							This page could not be found.
						</Heading>
					</HStack>
				</Center>
			</Container>
		</Layout>
	)
}
