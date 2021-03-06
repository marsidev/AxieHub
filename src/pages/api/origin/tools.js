import nc from 'next-connect'
import { onError, onNoMatch } from '../../../middlewares/nc'
import cacher from '../../../middlewares/cacher'
import cardsData from '@assets/data/origin/tools.json'
import { formatOriginToolsData as formatter } from '@utils/formatter'

const handler = nc({ onError, onNoMatch })
  .use(cacher(1 * 60 * 60)) // 1 hour cache
  .get(async (req, res) => {
    const { query } = req
    const { format = 'default' } = query

    if (format === 'original') res.json(cardsData)
    else {
      const formattedData = formatter(cardsData)
      res.json(formattedData)
    }
  })

export default handler
