/* eslint-disable max-depth */
/* eslint-disable complexity */

import { useEffect, useState } from 'react'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import AbilityCard from '@components/AbilityCard'
import defCardsData from '@assets/data/classic_cards.json'
import { sortObjectByField } from '@utils/index'
import { RiFilterLine as FilterIcon, RiFilterFill as FilterFillIcon } from 'react-icons/ri'
import { FaRedo as ResetIcon, FaCog as CogIcon } from 'react-icons/fa'
import FilterForm from './FilterForm'

const classes = ['aquatic', 'beast', 'bird', 'bug', 'plant', 'reptile']
const parts = ['back', 'horn', 'mouth', 'tail']
const indexes = ['02', '04', '06', '08', '10', '12']

export default function Home() {
	const [showFilterForm, setShowFilterForm] = useState(true)
	const [orderType, setOrderType] = useState('class')
	const [orderMode, setOrderMode] = useState('asc')
	const [textFilter, setTextFilter] = useState('')
	const [classFilter, setClassFilter] = useState('any')
	const [energyFilter, setEnergyFilter] = useState('any')
	const [partFilter, setPartFilter] = useState('any')
	const [attackFilter, setAttackFilter] = useState('any')
	const [effectFilter, setEffectFilter] = useState('any')
	const [updateState, setUpdateState] = useState(true)
	// const [cardsData, setCardsData] = useState(defCardsData)
	const cardsData = defCardsData
	const [cardsNames] = useState([])
	const [cardsList, setCardsList] = useState([])

	const updateCardsList = () => {
		if (cardsNames.length < 144) {
			for (let i = 0; i < classes.length; i++) {
				for (let j = 0; j < parts.length; j++) {
					for (let k = 0; k < indexes.length; k++) {
						const txt = classes[i] + '-' + parts[j] + '-' + indexes[k]
						cardsNames.push(txt)
					}
				}
			}
		}

		if (cardsData && cardsNames.length > 0 && updateState === true) {
			const temp = []
			for (let k = 0; k < cardsNames.length; k++) {
				if (cardsData[cardsNames[k]]) {
					if (
						textFilter === ''
						|| cardsData[cardsNames[k]].id
							.toLowerCase()
							.includes(textFilter.toLowerCase())
						|| cardsData[cardsNames[k]].partName
							.toLowerCase()
							.includes(textFilter.toLowerCase())
						|| cardsData[cardsNames[k]].skillName
							.toLowerCase()
							.includes(textFilter.toLowerCase())
						|| cardsData[cardsNames[k]].iconId
							.toLowerCase()
							.includes(textFilter.toLowerCase())
						|| cardsData[cardsNames[k]].triggerText
							.toLowerCase()
							.includes(textFilter.toLowerCase())
						|| cardsData[cardsNames[k]].description
							.toLowerCase()
							.includes(textFilter.toLowerCase())
					) {
						if (
							classFilter === 'any'
							|| classFilter === cardsData[cardsNames[k]].id.split('-')[0]
						) {
							if (
								energyFilter === 'any'
								|| energyFilter
									=== cardsData[cardsNames[k]].defaultEnergy.toString()
							) {
								if (
									partFilter === 'any'
									|| partFilter === cardsData[cardsNames[k]].id.split('-')[1]
								) {
									if (
										attackFilter === 'any'
										|| attackFilter === cardsData[cardsNames[k]].expectType
									) {
										if (
											effectFilter === 'any'
											|| effectFilter === cardsData[cardsNames[k]].iconId
										) {
											temp.push({
												id: cardsData[cardsNames[k]].id,
												partName: cardsData[cardsNames[k]].partName,
												skillName: cardsData[cardsNames[k]].skillName,
												defaultAttack: cardsData[cardsNames[k]].defaultAttack,
												defaultDefense: cardsData[cardsNames[k]].defaultDefense,
												defaultEnergy: cardsData[cardsNames[k]].defaultEnergy,
												expectType: cardsData[cardsNames[k]].expectType,
												iconId: cardsData[cardsNames[k]].iconId,
												triggerColor: cardsData[cardsNames[k]].triggerColor,
												triggerText: cardsData[cardsNames[k]].triggerText,
												description: cardsData[cardsNames[k]].description,
												'full-stats':
													cardsData[cardsNames[k]].defaultAttack
													+ cardsData[cardsNames[k]].defaultDefense
											})
										}
									}
								}
							}
						}
					}
				}
			}

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
				sortObjectByField(temp, 'full-stats', orderMode)
			}

			setCardsList(temp)
			setUpdateState(false)
		}
	}

	useEffect(() => {
		updateCardsList()
	}, [cardsData, cardsList])

	const updateCardsByText = (e, { value }) => {
		let newValue = ''
		if (value.length > 0) newValue = value
		setTextFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateOrderBy = (e, { value }) => {
		let newValue = 'default'
		if (value.length > 0) newValue = value
		setOrderType(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateOrderMode = (e, { value }) => {
		let newValue = 'default'
		if (value.length > 0) newValue = value
		setOrderMode(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateCardsByClass = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setClassFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateCardsByEnergy = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setEnergyFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateCardsByPart = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setPartFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateCardsByAttackType = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setAttackFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const updateCardsByEffect = (e, { value }) => {
		let newValue = 'any'
		if (value.length > 0) newValue = value
		setEffectFilter(newValue)
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
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
		setUpdateState(true)
		setCardsList([])
		updateCardsList()
	}

	const toggleFilterForm = () => {
		setShowFilterForm(!showFilterForm)
	}

	return (
		<Box
			as='section'
			w='80%'
			py={4}
			minH='82vh'
			// border='2px solid green'
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
					<AbilityCard
						key={item.id}
						id={item.id}
						partName={item.partName}
						partClass={item.id.split('-')[0]}
						partType={item.id.split('-')[1]}
						bgUrl={
							'https://storage.googleapis.com/axie-cdn/game/cards/base/'
							+ item.id
							+ '.png'
						}
						effectUrl={
							'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/'
							+ item.iconId
							+ '.png'
						}
						expectType={item.expectType}
						skillName={item.skillName}
						defaultEnergy={item.defaultEnergy}
						description={item.description}
						defaultAttack={item.defaultAttack}
						defaultDefense={item.defaultDefense}
					/>
				))}
			</Box>
		</Box>
	)
}
