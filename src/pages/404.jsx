import Head from 'next/head'
import Layout, { siteTitle } from '@layouts/main'
import { Heading, Container, Center } from '@chakra-ui/react'

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>Page not found - {siteTitle}</title>
			</Head>

			<Container>
				<Center>
					<Heading as='h1'>404 - Page not found</Heading>
				</Center>
			</Container>
		</Layout>
	)
}
