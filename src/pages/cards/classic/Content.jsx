import { useState, memo } from 'react'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import AbilityCard from '@components/AbilityCard'
import { sortObjectByField } from '@utils/index'
import { queryMatch, filterMatch } from '@utils/classicCardsFilter'
import { RiFilterLine as FilterIcon, RiFilterFill as FilterFillIcon } from 'react-icons/ri'
import { FaRedo as ResetIcon, FaCog as CogIcon } from 'react-icons/fa'
import FilterForm from './FilterForm'
import { useForm } from 'react-hook-form'

const defaultOption = { key: 'any', label: 'Any', value: 'any' }

const App = ({ cardsData }) => {
	const [showFilterForm, setShowFilterForm] = useState(true)
	const { control, handleSubmit, setValue, reset } = useForm()
	const [cardsList, setCardsList] = useState(cardsData)

	// if (!cardsData) return null

	const onSubmit = data => {
		// check for empty values
		for (const key in data) {
			if (data[key].length === 0 && data[key] !== '') {
				data[key] = [defaultOption]
				setValue(key, [defaultOption])
			}
		}

		applyFilters(data)
	}

	const applyFilters = filter => {
		const { textFilter, orderBy, orderMode, classFilter, energyFilter, partFilter, attackFilter, effectFilter } = filter
		const temp = []

		cardsData.forEach(card => {
			if (
				queryMatch(textFilter, card)
        && filterMatch(classFilter, card, 'class')
        && filterMatch(energyFilter, card, 'defaultEnergy')
        && filterMatch(partFilter, card, 'type')
        && filterMatch(attackFilter, card, 'expectType')
        && filterMatch(effectFilter, card, 'iconId')
			) temp.push(card)
		})

		if (orderBy.value === 'card-name') {
			sortObjectByField(temp, 'skillName', orderMode.value)
		} else if (orderBy.value === 'part-name') {
			sortObjectByField(temp, 'partName', orderMode.value)
		} else if (orderBy.value === 'energy') {
			sortObjectByField(temp, 'defaultEnergy', orderMode.value)
		} else if (orderBy.value === 'damage') {
			sortObjectByField(temp, 'defaultAttack', orderMode.value)
		} else if (orderBy.value === 'shield') {
			sortObjectByField(temp, 'defaultDefense', orderMode.value)
		} else if (orderBy.value === 'stats') {
			sortObjectByField(temp, 'defaultStats', orderMode.value)
		}

		// console.log({ result: temp })
		setCardsList(temp)
	}

	const resetFilters = () => {
		reset()
		setCardsList(cardsData)
	}

	const toggleFilterForm = () => {
		setShowFilterForm(!showFilterForm)
	}

	return (
		<Box as='section' w='90%' py={4} minH='82vh' border='2px solid green'>
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
					onSubmit={handleSubmit(onSubmit)}
					control={control}
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

export default memo(App)
