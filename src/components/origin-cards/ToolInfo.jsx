
import { memo } from 'react'
import { Flex, Text } from '@chakra-ui/react'

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
    >
      <Text>
        <span className='card_tool_item'>{id}:</span> {description}
      </Text>
    </Flex>
  )
}

export default memo(ToolCard)
