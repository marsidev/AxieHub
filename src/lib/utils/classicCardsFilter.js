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
