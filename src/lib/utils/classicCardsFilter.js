export const queryMatch = (textFilter, card) => {
	const query = textFilter.toLowerCase()
	if (
		textFilter === ''
		|| card.id.toLowerCase().includes(query)
		|| card.partName.toLowerCase().includes(query)
		|| card.skillName.toLowerCase().includes(query)
		|| card.iconId.toLowerCase().includes(query)
		|| card.triggerText.toLowerCase().includes(query)
		|| card.description.toLowerCase().includes(query)
	) {
		return true
	}
}

export const filterMatch = (filter, card, propName) => {
	const values = filter.map(v => v.value)
	if (values.includes(card[propName]) || values.includes('any')) {
		return true
	}
}

export const patchOptions = [
	{ key: 'current', label: 'Current Patch', value: 'current' },
	{ key: 's19', label: 'Season 19 Patch', value: 's19' },
	{ key: 's18', label: 'Season 18 Patch', value: 's18' }
]

export const orderByOptions = [
	{ label: 'Class', value: 'class' },
	{ label: 'Damage', value: 'damage' },
	{ label: 'Shield', value: 'shield' },
	{ label: 'Stats (damage + shield)', value: 'stats' },
	{ label: 'Energy', value: 'energy' },
	{ label: 'Card name', value: 'card-name' },
	{ label: 'Part name', value: 'part-name' }
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
	{ label: 'Mouth', value: 'mouth' },
	{ label: 'Horn', value: 'horn' },
	{ label: 'Back', value: 'back' },
	{ label: 'Tail', value: 'tail' }
]

export const effectOptions = [
	{ label: 'Any', value: 'any' },
	{ label: 'aroma', value: 'aroma' },
	{ label: 'stun', value: 'stun' },
	{ label: 'fear', value: 'fear' },
	{ label: 'fragile', value: 'fragile' },
	{ label: 'poison', value: 'poison' },
	{ label: 'lethal', value: 'lethal' },
	{ label: 'sleep', value: 'sleep' },
	{ label: 'stench', value: 'stench' },
	{ label: 'jinx', value: 'jinx' },
	{ label: 'chill', value: 'chill' },
	{ label: 'attack-up', value: 'attack-up' },
	{ label: 'attack-down', value: 'attack-down' },
	{ label: 'speed-up', value: 'speed-up' },
	{ label: 'speed-down', value: 'speed-down' },
	{ label: 'morale-up', value: 'morale-up' },
	{ label: 'morale-down', value: 'morale-down' },
	{ label: 'ally-heal', value: 'ally-heal' },
	{ label: 'critical', value: 'critical' },
	{ label: 'critical-block', value: 'critical-block' },
	{ label: 'damage-reflect', value: 'damage-reflect' },
	{ label: 'disable-ability', value: 'disable-ability' },
	{ label: 'discard', value: 'discard' },
	{ label: 'draw-card', value: 'draw-card' },
	{ label: 'double-hit', value: 'double-hit' },
	{ label: 'end-last-stand', value: 'end-last-stand' },
	{ label: 'energy-destroy', value: 'energy-destroy' },
	{ label: 'fixed-damage', value: 'fixed-damage' },
	{ label: 'gain-energy', value: 'gain-energy' },
	{ label: 'heal-block', value: 'heal-block' },
	{ label: 'multi-hit', value: 'multi-hit' },
	{ label: 'raise-damage', value: 'raise-damage' },
	{ label: 'raise-shield', value: 'raise-shield' },
	{ label: 'remove-debuff', value: 'remove-debuff' },
	{ label: 'self-heal', value: 'self-heal' },
	{ label: 'strike-first', value: 'strike-first' },
	{ label: 'untargetable', value: 'untargetable' },
	{ label: 'prioritize', value: 'prioritize' }
]

export const attackOptions = [
	{ label: 'Any', value: 'any' },
	{ label: 'Melee', value: 'melee' },
	{ label: 'Ranged', value: 'ranged' },
	{ label: 'Support', value: 'support' }
]

export default {
	classOptions,
	partOptions,
	effectOptions,
	attackOptions,
	orderModeOptions,
	energyOptions,
	orderByOptions,
	patchOptions
}
