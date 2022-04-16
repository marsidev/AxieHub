
import { useEffect, useState } from 'react'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import AbilityCard from '@components/AbilityCard'
// import defCardsData from '@assets/data/classic_cards.json'
import { sortObjectByField } from '@utils/index'
import { RiFilterLine as FilterIcon, RiFilterFill as FilterFillIcon } from 'react-icons/ri'
import { FaRedo as ResetIcon, FaCog as CogIcon } from 'react-icons/fa'
import FilterForm from './FilterForm'

export default function App({ cardsData }) {
	const [showFilterForm, setShowFilterForm] = useState(true)
	const [textFilter, setTextFilter] = useState('')
	const [orderType, setOrderType] = useState('class')
	const [orderMode, setOrderMode] = useState('asc')
	const [classFilter, setClassFilter] = useState('any')
	const [energyFilter, setEnergyFilter] = useState('any')
	const [partFilter, setPartFilter] = useState('any')
	const [attackFilter, setAttackFilter] = useState('any')
	const [effectFilter, setEffectFilter] = useState('any')
	const [cardsList, setCardsList] = useState(cardsData)

	// if (!cardsData) return null

	const updateCardsList = () => {
		const temp = []

		const query = textFilter.toLowerCase()
		cardsData.forEach(card => {
			if (textFilter === ''
        || card.id.toLowerCase().includes(query)
        || card.partName.toLowerCase().includes(query)
        || card.skillName.toLowerCase().includes(query)
        || card.iconId.toLowerCase().includes(query)
        || card.triggerText.toLowerCase().includes(query)
        || card.description.toLowerCase().includes(query)) {
				if (['any', card.class].includes(classFilter)
          && ['any', card.defaultEnergy?.toString()].includes(energyFilter)
          && ['any', card.type].includes(partFilter)
          && ['any', card.expectType].includes(attackFilter)
          && ['any', card.iconId].includes(effectFilter)
				) {
					temp.push({
						...card,
						fullStats: card.defaultAttack + card.defaultDefense
					})
				}
			}
		})

		if (orderType === 'card-name') {
			sortObjectByField(temp, 'skillName', orderMode)
		} else if (orderType === 'part-name') {
			sortObjectByField(temp, 'partName', orderMode)
		} else if (orderType === 'energy') {
			sortObjectByField(temp, 'defaultEnergy', orderMode)
		} else if (orderType === 'damage') {
			sortObjectByField(temp, 'defaultAttack', orderMode)
		} else if (orderType === 'shield') {
			sortObjectByField(temp, 'defaultDefense', orderMode)
		} else if (orderType === 'stats') {
			sortObjectByField(temp, 'fullStats', orderMode)
		}

		setCardsList(temp)
	}

	useEffect(() => {
		updateCardsList()
	}, [textFilter, orderType, orderMode, classFilter, energyFilter, partFilter, attackFilter, effectFilter])

	const updateCardsByText = (e, { value }) => {
		let newValue = ''
		if (value.length > 0) newValue = value
		setTextFilter(newValue)
	}

	const updateOrderBy = (e, { value }) => {
		let newValue = 'default'
		if (value.length > 0) newValue = value
		setOrderType(newValue)
	}

	const updateOrderMode = (e, { value }) => {
		let newValue = 'default'
		if (value.length > 0) newValue = value
		setOrderMode(newValue)
	}

	const updateCardsByClass = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setClassFilter(newValue)
	}

	const updateCardsByEnergy = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setEnergyFilter(newValue)
	}

	const updateCardsByPart = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setPartFilter(newValue)
	}

	const updateCardsByAttackType = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setAttackFilter(newValue)
	}

	const updateCardsByEffect = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setEffectFilter(newValue)
	}

	const resetFilters = () => {
		setTextFilter('')
		setOrderType('class')
		setOrderMode('asc')
		setClassFilter('any')
		setEnergyFilter('any')
		setPartFilter('any')
		setAttackFilter('any')
		setEffectFilter('any')
	}

	const toggleFilterForm = () => {
		setShowFilterForm(!showFilterForm)
	}

	return (
		<Box
			as='section'
			// minW='4xl'
			// maxW='5xl'
			w='90%'
			py={4}
			minH='82vh'
			border='2px solid green'
		>
			<Box>
				<Flex flexDir='row' justify='flex-end'>
					<IconButton
						variant='ghost'
						icon={showFilterForm ? <FilterIcon /> : <FilterFillIcon />}
						aria-label='toggle filter form'
						onClick={toggleFilterForm}
					/>

					<IconButton
						variant='ghost'
						icon={<ResetIcon />}
						aria-label='reset filter form'
						onClick={resetFilters}
					/>

					<IconButton
						variant='ghost'
						icon={<CogIcon />}
						aria-label='toggle filter form'
					/>
				</Flex>

				<FilterForm
					updateCardsByText={updateCardsByText}
					updateOrderBy={updateOrderBy}
					updateOrderMode={updateOrderMode}
					updateCardsByClass={updateCardsByClass}
					updateCardsByEnergy={updateCardsByEnergy}
					updateCardsByPart={updateCardsByPart}
					updateCardsByAttackType={updateCardsByAttackType}
					updateCardsByEffect={updateCardsByEffect}
					display={showFilterForm ? 'block' : 'none'}
				/>
			</Box>

			<Box className='cardlist-container'>
				{cardsList.map(item => (
					<AbilityCard key={item.id} card={item} />
				))}
			</Box>
		</Box>
	)
}
