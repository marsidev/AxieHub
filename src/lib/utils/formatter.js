export const formatClassicCardsData = data => {
  let newData = []
  for (const part in data) {
    const { iconId } = data[part]
    const className = part.split('-')[0]
    const type = part.split('-')[1]
    const partValue = part.split('-')[2]
    const image = `https://cdn.axieinfinity.com/game/cards/base/${part}.png`
    const effectImage = `https://cdn.axieinfinity.com/game/cards/effect-icons/${iconId}.png`
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

    const cardImage = `https://cdn.axieinfinity.com/game/origin-cards/base/${cardId}.png`

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
  const tools = data.filter(t => t.status === '!1' && t.toolCard === '!1')
  const statuses = data.filter(t => t.status === '!0' && t.toolCard === '!1')
  let abilities = data.filter(t => t.status === '!1' && t.toolCard === '!0')

  abilities = abilities
    .map(a => {
      const { data, ...rest } = a

      const { ability_type: abilityType, ...restOfData } = data

      const cardImage = `https://cdn.axieinfinity.com/game/origin-cards/base/tool-${restOfData.code.toLowerCase()}-02.png`

      const image = `https://www.axie.tech/images/templates/card/art/tool-${restOfData.code.toLowerCase()}-02.jpg`

      return {
        ...rest,
        data: {
          ...restOfData,
          abilityType,
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
