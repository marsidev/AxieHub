import axios from 'axios'
import Layout from '@layouts/main'
import Content from '@components/origin-cards/Content'
import { server } from '@lib/config'

export default function App({ cardsData, toolsData }) {
  return (
    <Layout>
      <Content cardsData={cardsData} toolsData={toolsData} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { data: cardsData } = await axios.get(`${server}/api/origin/cards`)
  const { data: toolsData } = await axios.get(`${server}/api/origin/tools`)

  return {
    props: {
      cardsData,
      toolsData
    }
  }
}
