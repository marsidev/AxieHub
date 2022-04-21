export const queryMatch = (textFilter, card) => {
  const query = textFilter.toLowerCase()
  if (
    textFilter === ''
		|| card.cardId.toLowerCase().includes(query)
		|| card.name.toLowerCase().includes(query)
		|| card.class.toLowerCase().includes(query)
		|| card.type.toLowerCase().includes(query)
		|| card.cardName.toLowerCase().includes(query)
		|| card.description.toLowerCase().includes(query)
		|| card.abilityType.toLowerCase().includes(query)
		|| card.partId.toLowerCase().includes(query)
  ) {
    return true
  }
}

export const orderByOptions = [
  { label: 'Class', value: 'class' },
  { label: 'Damage', value: 'damage' },
  { label: 'Shield', value: 'shield' },
  { label: 'Healing', value: 'healing' },
  { label: 'Stats (damage + shield + healing)', value: 'stats' },
  { label: 'Energy', value: 'energy' },
  { label: 'Ability', value: 'ability' },
  { label: 'Card name', value: 'cardName' },
  { label: 'Part name', value: 'partName' }
]

export const orderModeOptions = [
  { label: 'Ascending', value: 'asc' },
  { label: 'Descending', value: 'desc' }
]

export const energyOptions = [
  { label: 'Any', value: 'any' },
  { label: '0', value: 0 },
  { label: '1', value: 1 },
  { label: '2', value: 2 }
]

export const classOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Aquatic', value: 'aquatic', colorScheme: 'aquatic' },
  { label: 'Beast', value: 'beast', colorScheme: 'beast' },
  { label: 'Bird', value: 'bird', colorScheme: 'bird' },
  { label: 'Bug', value: 'bug', colorScheme: 'bug' },
  { label: 'Plant', value: 'plant', colorScheme: 'plant' },
  { label: 'Reptile', value: 'reptile', colorScheme: 'reptile' }
]

export const partOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Back', value: 'back' },
  { label: 'Ears', value: 'ears' },
  { label: 'Eyes', value: 'eyes' },
  { label: 'Horn', value: 'horn' },
  { label: 'Mouth', value: 'mouth' },
  { label: 'Tail', value: 'tail' }
]

export const abilityOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Melee Attack', value: 'AttackMelee' },
  { label: 'Power', value: 'Power' },
  { label: 'Ranged Attack', value: 'AttackRanged' },
  { label: 'Secret', value: 'Secret' },
  { label: 'Skill', value: 'Skill' }
]

export default {
  classOptions,
  partOptions,
  abilityOptions,
  orderModeOptions,
  energyOptions,
  orderByOptions
}
