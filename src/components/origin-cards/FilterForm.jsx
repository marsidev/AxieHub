import { memo, useId } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import options from '@utils/originCardsFilter'
import Select from '@components/form/Select'
import Input from '@components/form/Input'

const FilterForm = ({ onSubmit, control, resetFilters, ...rest }) => {
  const id = useId()

  const commonSelectProps = {
    tagVariant: 'solid',
    selectedOptionStyle: 'color',
    selectedOptionColor: 'axie',
    size: 'sm',
    closeMenuOnSelect: false
  }

  return (
    <Box border='1px solid' borderRadius={12} p={2} {...rest}>
      <form onSubmit={onSubmit} id={id}>
        <Flex mt={4} gap={4} flexDir={['column', 'row']}>
          <Input
            id={`${id}-textFilter`}
            name='textFilter'
            placeholder='Filter by text'
            label='Filter'
            control={control}
            initialValue=''
            size='sm'
            borderRadius={12}
          />

          <Select
            id={`${id}-orderBy`}
            name='orderBy'
            label='Order by'
            control={control}
            options={options.orderByOptions}
            initialValue={options.orderByOptions[0]}
            {...commonSelectProps}
          />

          <Select
            id={`${id}-orderMode`}
            name='orderMode'
            label='Order mode'
            control={control}
            options={options.orderModeOptions}
            initialValue={options.orderModeOptions[0]}
            {...commonSelectProps}
          />
        </Flex>

        <Flex mt={4} gap={4} flexDir={['column', 'row']}>
          <Select
            id={`${id}-energyFilter`}
            name='energyFilter'
            label='Energy cost'
            control={control}
            options={options.energyOptions}
            initialValue={options.energyOptions[0]}
            isMulti
            {...commonSelectProps}
          />

          <Select
            id={`${id}-classFilter`}
            name='classFilter'
            label='Class'
            control={control}
            options={options.classOptions}
            initialValue={options.classOptions[0]}
            isMulti
            {...commonSelectProps}
          />

          <Select
            id={`${id}-partFilter`}
            name='partFilter'
            label='Part'
            control={control}
            options={options.partOptions}
            initialValue={options.partOptions[0]}
            isMulti
            {...commonSelectProps}
          />

          <Select
            id={`${id}-abilityFilter`}
            name='abilityFilter'
            label='Ability type'
            control={control}
            options={options.abilityOptions}
            initialValue={options.abilityOptions[0]}
            isMulti
            {...commonSelectProps}
          />
        </Flex>

        <Flex mt={4} gap={4} flexDir={['column', 'row']}>
          <Button
            colorScheme='axie'
            w={['100%', '50%']}
            size='sm'
            type='submit'
          >
            Apply
          </Button>

          <Button
            colorScheme='rarity-mystic'
            w={['100%', '50%']}
            size='sm'
            type='button'
            onClick={resetFilters}
          >
            Reset filters
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

export default memo(FilterForm)
