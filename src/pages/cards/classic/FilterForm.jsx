import { memo, useId } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import {
	orderOptions,
	orderModeOptions,
	energyOptions,
	classOptions,
	partOptions,
	effectOptions,
	attackOptions
} from './options'

import Select from '@components/form/Select'
import Input from '@components/form/Input'

const FilterForm = props => {
	const id = useId()
	const {
		updateCardsByText,
		updateOrderBy,
		updateOrderMode,
		updateCardsByClass,
		updateCardsByEnergy,
		updateCardsByPart,
		updateCardsByAttackType,
		updateCardsByEffect,
		...rest
	} = props
	const { control, handleSubmit } = useForm()

	const onSubmit = data => {
		console.log({ data })
	}

	return (
		<Box {...rest}>
			<form onSubmit={handleSubmit(onSubmit)} id={id}>
				<Input
					id={`${id}-text-filter`}
					name='text-filter'
					placeholder='Filter by text'
					label='Filter'
					control={control}
					// onChange={updateCardsByText}
				/>

				<Select
					id={`${id}-order-by`}
					name='order-by'
					label='Order by'
					control={control}
					options={orderOptions}
					initialValue={orderOptions[0]}
					// onChange={updateOrderBy}
				/>

				<Select
					id={`${id}-order-mode`}
					name='order-mode'
					label='Order mode'
					control={control}
					options={orderModeOptions}
					initialValue={orderModeOptions[0]}
					// onChange={updateOrderMode}
				/>

				<Select
					id={`${id}-order-filter`}
					name='energy-filter'
					label='Energy cost'
					control={control}
					options={energyOptions}
					initialValue={energyOptions[0]}
					// onChange={updateCardsByEnergy}
				/>

				<Select
					id={`${id}-class-filter`}
					name='class-filter'
					label='Class'
					control={control}
					options={classOptions}
					initialValue={classOptions[0]}
					isMulti
					closeMenuOnSelect={false}
					// onChange={updateCardsByClass}
				/>

				<Select
					id={`${id}-part-filter`}
					name='part-filter'
					label='Part'
					control={control}
					options={partOptions}
					initialValue={partOptions[0]}
					isMulti
					closeMenuOnSelect={false}
					// onChange={updateCardsByPart}
				/>

				<Select
					id={`${id}-effect-filter`}
					name='effect-filter'
					label='Effect'
					control={control}
					options={effectOptions}
					initialValue={effectOptions[0]}
					isMulti
					closeMenuOnSelect={false}
					// onChange={updateCardsByEffect}
				/>

				<Select
					id={`${id}-attack-filter`}
					name='attack-filter'
					label='Attakc type'
					control={control}
					options={attackOptions}
					initialValue={attackOptions[0]}
					isMulti
					closeMenuOnSelect={false}
					// onChange={updateCardsByAttackType}
				/>

				<Button type='submit' w='100%' mt={4}>
					Apply
				</Button>
			</form>
		</Box>
	)
}

export default memo(FilterForm)
