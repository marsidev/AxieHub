
import { memo, useId } from 'react'
import dynamic from 'next/dynamic'
import { Box, Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ToolCard from './ToolCard'
import { toolTypes, hasCode, getCodesFromText } from '@utils/originParser'

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false
})

const variants = {
  initial: { scale: 1 },
  tap: { scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
  hover: { scale: 1.05, transition: { duration: 0.15, ease: 'easeOut' } }
}

const formatInfo = ({ info, parentId, toolsData }) => {
  const result = []
  const infoCodes = getCodesFromText(info)
  const infoCodes2 = infoCodes.map(code => code.replace(' ', '_'))

  let info2 = info
  infoCodes.forEach((code, i) => {
    info2 = info2.replace(code, infoCodes2[i])
  })

  const words = info2.split(' ')

  words.forEach(w => {
    if (hasCode(w)) {
      const _w = w.replace('_', ' ')
      const codes = getCodesFromText(_w)

      const code = codes[0]
      const _code = code.slice(1, -1)
      const keyCode = code.toLowerCase().replace(/[^a-z0-9]/g, '')
      const toolType = toolTypes[w[0]]

      const id = useId(`${parentId}_${keyCode}`)

      result.push(
        <span key={id} data-tip={true} data-for={id} className='card_tool_item'>
          {_code}
          <ReactTooltip
            id={id}
            clickable={true}
          >
            <ToolCard toolsData={toolsData} id={_code} type={toolType} />
          </ReactTooltip>
        </span>
      )

      if (w.length > code.length) {
        result.push(w.slice(code.length).concat(' '))
      } else {
        result.push(' ')
      }
    } else {
      result.push(w.concat(' '))
    }
  })

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
  const {
    cardName,
    cardId,
    description
    // cardImage
  } = card

  const tooltipId = `tooltip_${cardId}`

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
      zIndex={1}
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
            // fallback={`/images/origin/cards/${cardId}.png`}
            zIndex={1}
            // pos='absolute'
          />

          {/* <Box
            pos='absolute'
            top={['10%', '27px']}
            left={['10.5%', '19px']}
            bg='#2b2c2a'
            borderRadius={20}
            maxW='200px'
            minW='140px'
            w={['89.5%', '161px']}
            h={['90%', '250px']}
            zIndex={-1}
          /> */}

          <Box
            pos='absolute'
            top={['57.5%', '49%', '51%', '52%', '53%']}
            left={['39%', '38%']}
            fontWeight={500}
            fontSize={[11, 12]}
            fontFamily='Changa One, sans-serif'
            zIndex={1}
          >
            {cardName}
          </Box>

          <Box
            pos='absolute'
            textAlign='center'
            w='90%'
            top={['72.5%', '64%', '66%', '67%', '68%']}
            left={['17px', '17px', '17.5px', '18px', '18.5px']}
            px={3}
            fontSize={[10, 10.5, 11, 11.5, 12]}
            lineHeight={['9px', '9.5px', '10px', '11px', '12px']}
            color='#dbdbdb'
            zIndex={1}
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
