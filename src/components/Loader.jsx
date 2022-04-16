import { memo } from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => (
	<Flex justify='center' align='center' h='88vh'>
		<Spinner size='xl'/>
	</Flex>
)

export default memo(Loader)
