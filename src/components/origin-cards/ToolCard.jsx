
import { memo } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import ToolInfo from './ToolInfo'

export const ToolCard = ({ id = 'Banish', type = 'tool', toolsData }) => {
  let data
  if (type === 'ability') data = toolsData.abilities.find(t => t.data?.name === id)
  else if (type === 'status') data = toolsData.statuses.find(t => t.data?.name === id)
  else if (type === 'tool') data = toolsData.tools.find(t => t.data?.keyword === id)

  const description = data?.data?.description || 'No data found'

  if (type !== 'ability') {
    return (
      <ToolInfo id={id} description={description} />
    )
  }

  const { data: abilityData } = data
  const { cardImage, name: cardName } = abilityData

  const localCardImage = `/images/origin/tool-cards/${cardImage.replace('https://cdn.axieinfinity.com/game/origin-cards/base/', '')}`

  return (
    <Flex justify='center' p={0}>
      <Box
        pos='relative'
        w='170px'
        h='auto'
        margin='auto'
        // minW='80px'
        // w={['100%', '100px']}
        // h={['100%', '150px']}
        color='white'
      >
        <Image
          // src={cardImage}
          src={localCardImage}
          w='100%'
          h='auto'
          display='block'
        />

        <Box
          pos='absolute'
          top={['57.5%', '49%', '51%', '52%', '53%']}
          left={['39%', '38%']}
          fontWeight={500}
          fontSize={[11, 12]}
          fontFamily='Changa One, sans-serif'
        >
          {cardName}
        </Box>

        <Box
          pos='absolute'
          textAlign='center'
          w='90%'
          top={['72.5%', '73%', '73%', '74%', '74%']}
          left={['17px', '17px', '17.5px', '18px', '18.5px']}
          px={1.5}
          fontSize={[10, 10.5, 11, 11.5, 12]}
          lineHeight={['9px', '9.5px', '10px', '11px', '12px']}
          color='#dbdbdb'
          // border='1px solid'
        >
          <span>{description}</span>
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(ToolCard)
