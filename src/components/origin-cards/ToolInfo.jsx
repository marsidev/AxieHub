
import { memo } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { getCodesFromText } from '@utils/originParser'

const formatData = (id, info) => {
  const infoCodes = getCodesFromText(info)
  let newInfo = info

  infoCodes.forEach(code => {
    const _code = code.slice(1, -1)
    newInfo = newInfo.replace(code, `<span class="card_tool_item">${_code}</span>`)
  })

  return `<span class="card_tool_item">${id}:</span> ${newInfo}`
}

const ToolCard = ({ id, description }) => {
  return (
    <Flex
      pos='relative'
      p={2}
      bg='blackAlpha.900'
      borderRadius={8}
      textAlign='left'
      maxW='170px'
      // w={['100%', '170px']}
      lineHeight='16px'
      fontWeight={500}
      fontSize={[11, 12]}
      color='white'
      zIndex={10}
    >
      <Text dangerouslySetInnerHTML={{ __html: formatData(id, description) }} />
    </Flex>
  )
}

export default memo(ToolCard)
