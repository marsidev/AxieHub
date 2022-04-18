import { useState, memo } from 'react'
import { Box, Container, Flex, Heading, Button } from '@chakra-ui/react'
import AbilityCard from '@/components/classic-cards/AbilityCard'
import { sortObjectByField } from '@utils/index'
import { queryMatch, filterMatch } from '@utils/classicCardsFilter'
import { RiFilterLine as FilterIcon, RiFilterFill as FilterFillIcon } from 'react-icons/ri'
import FilterForm from './FilterForm'
import { useForm } from 'react-hook-form'

const defaultOption = { key: 'any', label: 'Any', value: 'any' }

const App = ({ cardsData }) => {
	const [showFilterForm, setShowFilterForm] = useState(false)
	const { control, handleSubmit, setValue, reset } = useForm()
	const [cardsList, setCardsList] = useState(cardsData)

	const onSubmit = data => {
		// console.log({ data })

		// check for empty values
		for (const key in data) {
			if (data[key]?.length === 0 && data[key] !== '') {
				data[key] = [defaultOption]
				setValue(key, [defaultOption])
			}
		}

		applyFilters(data)
	}

	function applyFilters (filter) {
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
		} else if (orderBy.value === 'class') {
			sortObjectByField(temp, 'class', orderMode.value)
		}

		// console.log({ result: temp })
		setCardsList(temp)
		setShowFilterForm(false)
	}

	const resetFilters = () => {
		reset()
		setCardsList(cardsData)
	}

	const toggleFilterForm = () => {
		setShowFilterForm(!showFilterForm)
	}

	return (
		<Box
			w='100%'
			as='section'
			// border='2px solid purple'
		>
			<Container
				maxW='5xl'
				direction='column'
				// border='2px solid red'
			>
				<Heading textAlign='left' as='h1' size='lg' mb={2}>
					Cards Explorer - Classic
				</Heading>

				<Flex flexDir='row' justify='flex-start' align='center'>
					<Button
						onClick={toggleFilterForm}
						leftIcon={showFilterForm ? <FilterIcon /> : <FilterFillIcon />}
						aria-label='toggle filter form'
						size='sm'
						variant='ghost'
						cursor='pointer'
						colorScheme='savannah'
					>
						toggle filters
					</Button>
				</Flex>

				<FilterForm
					onSubmit={handleSubmit(onSubmit)}
					control={control}
					resetFilters={resetFilters}
					display={showFilterForm ? 'block' : 'none'}
				/>

				<Box
					className='cardlist-container'
					gridTemplateColumns={[
						'repeat(auto-fill, 160px)',
						'repeat(auto-fill, 165px)',
						'repeat(auto-fill, 170px)',
						'repeat(auto-fill, 175px)',
						'repeat(auto-fill, 180px)'
					]}
				>
					{cardsList.map(item => (
						<AbilityCard key={item.id} card={item} />
					))}
				</Box>
			</Container>
		</Box>
	)
}

export default memo(App)
