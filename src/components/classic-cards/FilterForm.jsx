import { memo, useId } from 'react'
import { Box, Button } from '@chakra-ui/react'
import {
	orderOptions,
	orderModeOptions,
	energyOptions,
	classOptions,
	partOptions,
	effectOptions,
	attackOptions
} from '@utils/classicCardsFilter'

import Select from '@components/form/Select'
import Input from '@components/form/Input'

const FilterForm = ({ onSubmit, control, ...rest }) => {
	const id = useId()

	return (
		<Box {...rest}>
			<form onSubmit={onSubmit} id={id}>
				<Input
					id={`${id}-textFilter`}
					name='textFilter'
					placeholder='Filter by text'
					label='Filter'
					control={control}
					initialValue=''
				/>

				<Select
					id={`${id}-orderBy`}
					name='orderBy'
					label='Order by'
					control={control}
					options={orderOptions}
					initialValue={orderOptions[0]}
				/>

				<Select
					id={`${id}-orderMode`}
					name='orderMode'
					label='Order mode'
					control={control}
					options={orderModeOptions}
					initialValue={orderModeOptions[0]}
				/>

				<Select
					id={`${id}-energyFilter`}
					name='energyFilter'
					label='Energy cost'
					control={control}
					options={energyOptions}
					initialValue={energyOptions[0]}
					isMulti
					closeMenuOnSelect={false}
				/>

				<Select
					id={`${id}-classFilter`}
					name='classFilter'
					label='Class'
					control={control}
					options={classOptions}
					initialValue={classOptions[0]}
					isMulti
					closeMenuOnSelect={false}
				/>

				<Select
					id={`${id}-partFilter`}
					name='partFilter'
					label='Part'
					control={control}
					options={partOptions}
					initialValue={partOptions[0]}
					isMulti
					closeMenuOnSelect={false}
				/>

				<Select
					id={`${id}-effectFilter`}
					name='effectFilter'
					label='Effect'
					control={control}
					options={effectOptions}
					initialValue={effectOptions[0]}
					isMulti
					closeMenuOnSelect={false}
				/>

				<Select
					id={`${id}-attackFilter`}
					name='attackFilter'
					label='Attack type'
					control={control}
					options={attackOptions}
					initialValue={attackOptions[0]}
					isMulti
					closeMenuOnSelect={false}
				/>

				<Button type='submit' w='100%' mt={4}>
					Apply
				</Button>
			</form>
		</Box>
	)
}

export default memo(FilterForm)
