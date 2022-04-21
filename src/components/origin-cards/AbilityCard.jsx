/* eslint-disable no-useless-escape */
import { memo, useId } from 'react'
import dynamic from 'next/dynamic'
import { Box, Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ToolCard from './ToolCard'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false
})

const variants = {
  initial: { scale: 1 },
  tap: { scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.15, ease: 'easeOut' } }
}

const toolTypes = {
  '{': 'status',
  '[': 'ability',
  '<': 'tool'
}

const hasCode = text => {
  return text.includes('{') || text.includes('[') || text.includes('<')
}

const getCodesFromText = text => {
  return [
    ...(text.match(/\{(.*?)\}/g) || []),
    ...(text.match(/\[(.*?)\]/g) || []),
    ...(text.match(/\<(.*?)\>/g) || [])
  ]
}

const formatInfo = ({ info, parentId, toolsData }) => {
  // info (example): 'If <Initial>, apply [Sleep] for 4 turns.'
  const codes = getCodesFromText(info)
  // codes: ['{Initial}', '{Sleep}']

  const result = []
  let tempInfo = info
  codes.forEach(code => {
    const start = tempInfo.indexOf(code)
    const end = start + code.length
    const before = tempInfo.slice(0, start)

    if (before) result.push(before)

    const _code = code.slice(1, -1)
    const keyCode = code.toLowerCase().replace(/[^a-z0-9]/g, '')
    const toolType = toolTypes[code[0]]

    const id = useId(`${parentId}_${keyCode}`)
    result.push(
      <span key={id} data-tip={true} data-for={id} className='card_tool_item'>
        {_code}
        <ReactTooltip id={id} clickable={true}>
          <ToolCard toolsData={toolsData} id={_code} type={toolType} />
        </ReactTooltip>
      </span>
    )

    const after = tempInfo.slice(end)
    tempInfo = after
  })

  if (tempInfo) result.push(tempInfo)

  return result
}

const Description = ({ descriptionText, tooltipId, toolsData }) => {
  const showTooltip = hasCode(descriptionText)

  const html = formatInfo({
    info: descriptionText,
    parentId: tooltipId,
    toolsData
  })

  if (!showTooltip) return <span>{descriptionText}</span>
  return html
}

export const AbilityCard = ({ card, toolsData }) => {
  const { cardName, cardId, description } = card

  const tooltipId = `tooltip_${cardId}`

  const MotionBox = motion(Box)

  return (
    <MotionBox
      variants={variants}
      initial='initial'
      whileTap='tap'
      whileHover='hover'
      pos='relative'
      transition='all .2s ease-in-out'
    >
      <Flex justify='center' p={0}>
        <Box
          pos='relative'
          maxW='200px'
          minW='150px'
          w={['100%', '200px']}
          h={['100%', '300px']}
          color='white'
        >
          <Image
            // src={cardImage}
            src={`/images/origin/cards/${cardId}.png`}
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
            top={['72.5%', '64%', '66%', '67%', '68%']}
            left={['17px', '17px', '17.5px', '18px', '18.5px']}
            px={1.5}
            fontSize={[10, 10.5, 11, 11.5, 12]}
            lineHeight={['9px', '9.5px', '10px', '11px', '12px']}
            color='#dbdbdb'
            // border='1px solid'
          >
            <Description
              descriptionText={description}
              tooltipId={tooltipId}
              toolsData={toolsData}
            />
          </Box>
        </Box>
      </Flex>
    </MotionBox>
  )
}

export default memo(AbilityCard)
