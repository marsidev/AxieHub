import axios from 'axios'
import Layout from '@layouts/main'
import Content from '@components/classic-cards/Content'
import { server } from '@lib/config'

export default function App({ cardsData }) {
	return (
		<Layout>
			<Content cardsData={cardsData} />
		</Layout>
	)
}

export async function getServerSideProps() {
	const { data: cardsData } = await axios.get(`${server}/api/classic/cards`)

	return {
		props: {
			cardsData
		}
	}
}
