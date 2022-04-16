import { Box, Flex, useColorModeValue, Image } from '@chakra-ui/react'
import PartIcon from '@/components/PartIcon'
import AtkIcon from '@components/svg/attack'
import DefIcon from '@components/svg/defense'

export const AbilityCard = ({ partType, partClass, partName, bgUrl, effectUrl, expectType, skillName, defaultEnergy, description, defaultAttack, defaultDefense }) => (
	<Box pos='relative'>
		<Box textAlign='center' mb='6%'>
			<Flex justify='center' align='center'>
				<PartIcon
					partType={partType}
					partClass={partClass}
					size={['25', '25']}
				/>
				<Box
					fontWeight={600}
					ml='3%'
					textTransform='uppercase'
					lineHeight='85%'
					fontSize='85%'
					color={useColorModeValue('gray.700', 'gray.300')}
				>
					{partName}
				</Box>
			</Flex>
			<Box color={useColorModeValue('gray.700', 'gray.300')}>
				{expectType}
			</Box>
		</Box>

		<Box pos='relative' bg='#2b2c2a' borderRadius={12} h='auto'>
			<Flex
				zIndex={0}
				color={useColorModeValue('#fff', 'auto')}
				pos='relative'
				overflow='hidden'
				flex='1 0 auto'
				maxW='100%'
			>
				<Box
					pb='133.333%'
					transition='padding-bottom .2s cubic-bezier(.25, .8, .5, 1)'
					flex='1 0 0 px'
				/>

				<Box
					backgroundImage={`url(${bgUrl})`}
					backgroundPosition='center center'
					borderRadius={12} // 12%
					backgroundRepeat='no-repeat'
					backgroundSize='contain'
				/>

				<Box
					w='300px'
					flex='1 0 0px'
					// ml='-100%'
				/>
			</Flex>

			<Box className='card_item__skill_name'>{skillName}</Box>
			<Box className='card_item__energy'>{defaultEnergy}</Box>
			<Box className='card_item__effect'>
				<Image alt={partName} src={effectUrl} h={6} w={6} />
			</Box>
			<Box className='card_item__description'>{description}</Box>

			<Box className='card_item__statistic card_item__statistic--attack'>
				<Box className='card_item__statistic_wrapper'>
					<Box className='card_item__statistic_wrapper'>
						<AtkIcon />
						<Box className='card_item__statistic_value'>{defaultAttack}</Box>
					</Box>
				</Box>
			</Box>

			<Box className='card_item__statistic card_item__statistic--defense'>
				<Box className='card_item__statistic_wrapper'>
					<Box className='card_item__statistic_wrapper'>
						<DefIcon />
						<Box className='card_item__statistic_value'>{defaultDefense}</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	</Box>
)

export default AbilityCard
