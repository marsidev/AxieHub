import { memo } from 'react'
import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  Tag,
  TagLabel
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import PartIcon from '@components/PartIcon'
import AtkIcon from '@components/svg/AttackIcon.jsx'
import DefIcon from '@components/svg/ShieldIcon.jsx'

const variants = {
  initial: { scale: 1 },
  tap: { scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.15, ease: 'easeOut' } }
}

const expectTypeColorScheme = {
  melee: 'orange',
  ranged: 'teal',
  support: 'yellow'
}

export const AbilityCard = ({ card }) => {
  const {
    id,
    iconId,
    type: partType,
    class: partClass,
    partName,
    // image,
    // effectImage,
    expectType,
    skillName,
    defaultEnergy,
    description,
    defaultAttack,
    defaultDefense
  } = card

  const image = `/images/classic/cards/${id}.png`
  const effectImage = `/images/classic/effects/${iconId}.png`
  const MotionBox = motion(Box)

  return (
    <MotionBox
      as='figure'
      variants={variants}
      initial='initial'
      whileTap='tap'
      whileHover='hover'
      pos='relative'
      transition='all .2s ease-in-out'
    >
      <Box textAlign='center' mb={1}>
        <Flex justify='center' align='center'>
          <PartIcon
            partType={partType}
            partClass={partClass}
            size={['25', '25']}
          />
          <Box
            ml='3%'
            textTransform='uppercase'
            fontSize='.70em'
            fontWeight='bold'
            color={useColorModeValue('gray.700', 'gray.300')}
            whiteSpace='nowrap'
            // overflow='hidden'
            // textOverflow='ellipsis'
          >
            {partName}
          </Box>
        </Flex>

        <Box
          color={useColorModeValue('gray.700', 'gray.300')}
          textTransform='lowercase'
          fontWeight={400}
          // fontSize='.60em'
        >
          <Tag size='sm' colorScheme={expectTypeColorScheme[expectType]}>
            <TagLabel>{expectType}</TagLabel>
          </Tag>

          <Tag size='sm' colorScheme={partClass} ml={1}>
            <Image
              src={`/images/class/${partClass}.png`}
              alt={partClass}
              w={4}
              h='auto'
              mr={1}
            />
            <TagLabel>{partClass}</TagLabel>
          </Tag>
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
            flex='1 0'
          />

          <Box
            backgroundImage={`url(${image})`}
            backgroundPosition='center center'
            borderRadius={12}
            backgroundRepeat='no-repeat'
            backgroundSize='contain'
            zIndex={-1}
            pos='absolute'
            top={0}
            left={0}
            w='100%'
            h='100%'
          />

          <Box w='300px' flex='1 0' maxW='100%' />
        </Flex>

        <Box className='card_item__skill_name'>{skillName}</Box>
        <Box className='card_item__energy'>{defaultEnergy}</Box>
        <Box className='card_item__effect'>
          <Image alt={partName} src={effectImage} w={4} h='auto' />
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
    </MotionBox>
  )
}

export default memo(AbilityCard)
