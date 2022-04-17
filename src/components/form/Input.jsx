import { memo } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useController } from 'react-hook-form'

const InputBox = ({
	initialValue,
	control,
	name,
	id,
	label,
	size = 'md',
	...props
}) => {
	const { field } = useController({
		name,
		control,
		defaultValue: initialValue ?? ''
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

			<Input
				id={id}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				size={size}
				{...props}
			/>
		</FormControl>
	)
}

export default memo(InputBox)
