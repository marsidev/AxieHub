
import { memo } from 'react'
import { Box, chakra, Flex, Image } from '@chakra-ui/react'
import ToolInfo from './ToolInfo'
import { getCodesFromText } from '@utils/originParser'

const formatData = (id, info) => {
  const infoCodes = getCodesFromText(info)
  let newInfo = info

  infoCodes.forEach(code => {
    const _code = code.slice(1, -1)
    newInfo = newInfo.replace(
      code,
      `<span class="card_tool_item">${_code}</span>`
    )
  })

  return newInfo
}

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
  const { name: cardName, imageId } = abilityData

  return (
    <Flex justify='center' p={0} zIndex={10}>
      <Box
        pos='relative'
        w='170px'
        h='auto'
        margin='auto'
        color='white'
      >
        <Image
          // src={cardImage}
          src={`/images/origin/cards/${imageId}.webp`}
          w='100%'
          h='auto'
        />

        <Box
          pos='absolute'
          top={['57.5%', '50%', '56%', '57%', '58%']}
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
        >
          <chakra.span
            dangerouslySetInnerHTML={{ __html: formatData(id, description) }}
          />
        </Box>
      </Box>
    </Flex>
  )
}

export default memo(ToolCard)
