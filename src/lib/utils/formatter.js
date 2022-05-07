const { AXIE_CLASSIC_CARDS_BASE_URL, AXIE_CLASSIC_EFFECTS_BASE_URL } = process.env
const AXIE_ORIGIN_CARDS_BASE_URL = 'https://cdn.axieinfinity.com/game/origin-cards/base/version-20220125'

export const formatClassicCardsData = data => {
  let newData = []
  for (const part in data) {
    const { iconId } = data[part]
    const className = part.split('-')[0]
    const type = part.split('-')[1]
    const partValue = part.split('-')[2]
    const image = `${AXIE_CLASSIC_CARDS_BASE_URL}/${part}.png`
    const effectImage = `${AXIE_CLASSIC_EFFECTS_BASE_URL}/${iconId}.png`

    const temp = {
      class: className,
      type,
      partValue,
      ...data[part],
      defaultStats: data[part].defaultAttack + data[part].defaultDefense,
      image,
      effectImage
    }
    newData = [...newData, temp]
  }

  return newData
}

export const formatOriginCardsData = data => {
  let newData = []
  for (const part in data) {
    const { originCard } = data[part]
    const {
      id, // removing it since has not use and it's not unique
      partClass, // duplicated
      partType, // duplicated
      cardId,
      ...rest
    } = originCard

    const cardImage = `${AXIE_ORIGIN_CARDS_BASE_URL}/${cardId}.png`

    const image = `https://www.axie.tech/images/templates/card/art/${cardId}.jpg`

    const defaultStats = rest.defaultAttack + rest.defaultDefense + rest.healing

    const temp = {
      cardId,
      ...rest,
      defaultStats,
      image,
      cardImage
    }
    newData = [...newData, temp]
  }

  newData = newData
    .sort((a, b) => (a.class < b.class ? -1 : 1))
    .sort((a, b) => (a.type < b.type ? -1 : 1))
    .sort((a, b) => (a.specialGenes < b.specialGenes ? -1 : 1))
    .sort((a, b) => (a.cardName < b.cardName ? -1 : 1))

  return newData.sort((a, b) => (a.cardName < b.cardName ? -1 : 1))
}

export const formatOriginToolsData = data => {
  const tools = data.filter(t => t.status === false && t.toolCard === false)
  const statuses = data.filter(t => t.status === true && t.toolCard === false)
  let abilities = data.filter(t => t.status === false && t.toolCard === true)

  abilities = abilities
    .map(a => {
      const { data, ...rest } = a

      const { ability_type: abilityType, ...restOfData } = data

      const imageId = `tool-${restOfData.code.toLowerCase()}-02`

      const cardImage = `${AXIE_ORIGIN_CARDS_BASE_URL}/${imageId}.png`

      const image = `https://www.axie.tech/images/templates/card/art/${imageId}.jpg`

      return {
        ...rest,
        data: {
          ...restOfData,
          abilityType,
          imageId,
          image,
          cardImage
        }
      }
    })
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  return {
    abilities,
    tools,
    statuses
  }
}
