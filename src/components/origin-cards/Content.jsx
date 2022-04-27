import { useState, useEffect, memo } from 'react'
import { Box, Container, Flex, Heading, Button } from '@chakra-ui/react'
import AbilityCard from '@/components/origin-cards/AbilityCard'
import { sortObjectByField, filterObject, scrollToTop } from '@utils/index'
import { queryMatch } from '@utils/originCardsFilter'
import {
  RiFilterLine as FilterIcon,
  RiFilterFill as FilterFillIcon
} from 'react-icons/ri'
import FilterForm from './FilterForm'
import { useForm } from 'react-hook-form'
import FloatingButton from '@components/FloattingButton'
import { FaChevronUp as UpIcon } from 'react-icons/fa'

const defaultOption = { key: 'any', label: 'Any', value: 'any' }

const App = ({ cardsData, toolsData }) => {
  const { control, handleSubmit, setValue, reset } = useForm()
  const [showFilterForm, setShowFilterForm] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [cardsList, setCardsList] = useState(cardsData)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const onSubmit = data => {
    // check for empty values
    for (const key in data) {
      if (data[key]?.length === 0 && data[key] !== '') {
        data[key] = [defaultOption]
        setValue(key, [defaultOption])
      }
    }

    applyFilters(data)
  }

  function applyFilters(filter) {
    const {
      textFilter,
      orderBy,
      orderMode,
      classFilter,
      energyFilter,
      partFilter,
      abilityFilter
    } = filter
    const temp = []

    cardsData.forEach(card => {
      if (
        queryMatch(textFilter, card) &&
        filterObject(classFilter, card, 'class') &&
        filterObject(energyFilter, card, 'defaultEnergy') &&
        filterObject(partFilter, card, 'type') &&
        filterObject(abilityFilter, card, 'abilityType')
      ) {
        temp.push(card)
      }
    })

    if (orderBy.value === 'cardName') {
      sortObjectByField(temp, 'cardName', orderMode.value)
    } else if (orderBy.value === 'partName') {
      sortObjectByField(temp, 'name', orderMode.value)
    } else if (orderBy.value === 'energy') {
      sortObjectByField(temp, 'defaultEnergy', orderMode.value)
    } else if (orderBy.value === 'damage') {
      sortObjectByField(temp, 'defaultAttack', orderMode.value)
    } else if (orderBy.value === 'shield') {
      sortObjectByField(temp, 'defaultDefense', orderMode.value)
    } else if (orderBy.value === 'healing') {
      sortObjectByField(temp, 'healing', orderMode.value)
    } else if (orderBy.value === 'stats') {
      sortObjectByField(temp, 'defaultStats', orderMode.value)
    } else if (orderBy.value === 'class') {
      sortObjectByField(temp, 'class', orderMode.value)
    }

    // console.log({ result: temp })
    setCardsList(temp)
    setShowFilterForm(false)
  }

  const resetFilters = () => {
    reset()
    setCardsList(cardsData)
    setShowFilterForm(false)
  }

  const toggleFilterForm = () => {
    setShowFilterForm(!showFilterForm)
  }

  return (
    <>
      <Container maxW='5xl' direction='column'>
        <section>
          <Heading textAlign='left' as='h1' size='lg' mb={2}>
            Cards Explorer - Origin
          </Heading>

          <Flex flexDir='row' justify='flex-start' align='center' py={2}>
            <Button
              onClick={toggleFilterForm}
              leftIcon={showFilterForm ? <FilterIcon /> : <FilterFillIcon />}
              aria-label='toggle filter form'
              size='sm'
              variant='ghost'
              cursor='pointer'
              colorScheme='savannah'
            >
              toggle filters
            </Button>
          </Flex>
        </section>

        <FilterForm
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          resetFilters={resetFilters}
          display={showFilterForm ? 'block' : 'none'}
        />

        <Box
          as='section'
          className='cardlist-container'
          gridTemplateColumns={[
            'repeat(auto-fill, 160px)',
            'repeat(auto-fill, 165px)',
            'repeat(auto-fill, 170px)',
            'repeat(auto-fill, 175px)',
            'repeat(auto-fill, 180px)'
          ]}
        >
          {cardsList.map(item => (
            <AbilityCard key={item.partId} card={item} toolsData={toolsData} />
          ))}
        </Box>
      </Container>

      {showButton && (
        <FloatingButton
          ariaLabel='Scroll to top'
          onClickHandler={scrollToTop}
          icon={<UpIcon />}
          bottom={{
            base: '20px',
            md: '70px',
            lg: '70px',
            xl: '20px'
          }}
          right='20px'
        />
      )}
    </>
  )
}

export default memo(App)
