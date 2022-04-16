import axios from 'axios'
import Layout from '@layouts/main'
import Content from './Content'

export default function App({ cardsData }) {
	return (
		<Layout>
			<Content cardsData={cardsData} />
		</Layout>
	)
}

export async function getServerSideProps() {
	const { data: cardsData } = await axios.get('http://localhost:5000/api/classic/cards')

	return {
		props: {
			cardsData
		}
	}
}
