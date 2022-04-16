import { memo } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import LoaderIcon from '../assets/images/puff-loading.png'

const Loader = () => (
	<Flex justify='center' align='center' h='88vh'>
		{/* <Spinner size='xl' /> */}
		<Image
			src={LoaderIcon}
			// className='rotate'
			animation='rotation 0.8s infinite linear'
		/>
	</Flex>
)

export default memo(Loader)
