import nc from 'next-connect'
import { onError, onNoMatch } from '../../../middlewares/nc'
import cacher from '../../../middlewares/cacher'
import cardsData from '@assets/data/origin/cards.json'
import { filterObjectArray } from '@utils/index'
import { formatOriginCardsData as formatter } from '@utils/formatter'

const noSpecialGenes = data => {
  const newData = []

  data.forEach(item => {
    if (item.specialGenes === '') {
      newData.push(item)
    }

    // if (item.specialGenes !== '') {
    // 	// check if this item exists more than once in data. Uses the cardId to check
    // 	const exists = data.filter(item2 => item2.cardId === item.cardId)
    // 	if (exists.length === 1) {
    // 		newData.push(item)
    // 	}
    // }
  })

  return newData
}

const handler = nc({ onError, onNoMatch })
  .use(cacher(1 * 60 * 60)) // 1 hour cache
  .get(async (req, res) => {
    const { query } = req
    const { format = 'default', showSpecial = false } = query

    if (format === 'original') res.json(cardsData)
    else {
      const formattedData = formatter(cardsData)
      const filteredData = filterObjectArray(formattedData, query)

      if (showSpecial) return res.json(filteredData)

      return res.json(noSpecialGenes(filteredData))
    }
  })

export default handler
