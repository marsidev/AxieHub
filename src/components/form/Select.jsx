import { memo } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { useController } from 'react-hook-form'

const Selector = ({
	initialValue,
	control,
	name,
	id,
	label,
	size = 'md',
	isMulti = false,
	...props
}) => {
	const { field } = useController({
		name,
		control,
		defaultValue: (isMulti ? [initialValue] : initialValue) ?? {}
	})
	const { onChange, onBlur, value, ref } = field

	let fontSize
	if (size === 'sm') fontSize = '0.9rem'
	else if (size === 'md') fontSize = '1rem'
	else if (size === 'lg') fontSize = '1.1rem'
	else fontSize = '1rem'

	return (
		<FormControl id={`${id}-control`}>
			<FormLabel
				htmlFor={id}
				id={`${id}-label`}
				fontSize={fontSize}
				fontWeight={600}
			>
				{label}
			</FormLabel>

			<Select
				instanceId={id}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				size={size}
				isMulti={isMulti}
				classNamePrefix='react-select'
				{...props}
			/>
		</FormControl>
	)
}

export default memo(Selector)
