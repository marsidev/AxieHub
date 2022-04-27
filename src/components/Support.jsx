import { memo } from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  IconButton,
  FormControl,
  FormLabel,
  useClipboard,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import Modal from '@components/Modal'
import { supportMethods } from '@lib/constants'
import { FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi'

const Label = ({ id, label, value, isLink = false }) => {
  const { hasCopied, onCopy } = useClipboard(value, 3000)

  const LabelIcon = () => {
    if (isLink) return <FiExternalLink />
    if (hasCopied) return <FiCheck />
    return <FiCopy />
  }

  const handleClick = () => {
    if (isLink) return window.open(value, '_blank')
    onCopy()
  }

  const colors = {
    default: useColorModeValue('gray.100', 'gray.600'),
    onHover: useColorModeValue('gray.200', 'gray.500'),
    onCopied: useColorModeValue('green.200', 'green.500')
  }

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup
        size='sm'
        bg={colors.default}
        _hover={{ bg: colors.onHover }}
        _focus={{ bg: colors.onHover }}
        _active={{ bg: colors.onHover }}
        borderRadius={8}
      >
        <Input
          isReadOnly
          id={id}
          type='text'
          variant='filled'
          placeholder={value}
          borderRightRadius={0}
          borderLeftRadius={8}
          bg='inherit'
          _focus={{ bg: 'inherit' }}
          _hover={{ bg: 'inherit' }}
          _active={{ bg: 'inherit' }}
          transition='background 0.15s ease'
        />
        <InputRightAddon
          p={0}
          borderRightRadius={8}
          borderLeftRadius={0}
          bg={hasCopied ? colors.onCopied : 'inherit'}
          _focus={hasCopied ? colors.onCopied : 'inherit'}
          _hover={hasCopied ? colors.onCopied : 'inherit'}
          _active={hasCopied ? colors.onCopied : 'inherit'}
        >
          <IconButton
            variant='ghost'
            size='sm'
            icon={<LabelIcon />}
            onClick={handleClick}
            borderRightRadius={8}
            borderLeftRadius={0}
            bg='inherit'
            _focus={{ bg: 'inherit' }}
            _hover={{ bg: 'inherit' }}
            _active={{ bg: 'inherit' }}
            transition='background 0.15s ease'
          />
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  )
}

const Support = ({
  isOpen,
  onClose,
  title = 'Support',
  ...rest
}) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset='slideInBottom'
      size='md'
      title={title}
      showCloseIcon={true}
      {...rest}
    >
      <Box w='100%' pb={4}>
        <form>
          <VStack spacing={4}>
            <Label id='ron' label='Ronin' value={supportMethods.ronin} />
            <Label id='erc20' label='ERC20' value={supportMethods.erc20} />
            <Label id='bsc' label='BSC' value={supportMethods.bsc} />
            <Label id='btc' label='BTC' value={supportMethods.btc} />
            <Label id='sol' label='Solana' value={supportMethods.solana} />
            <Label id='binance' label='Binance Pay' value={supportMethods.binance} />
            <Label id='paypal' label='PayPal' value={supportMethods.paypal} isLink />
          </VStack>
        </form>
      </Box>
    </Modal>
  )
}

export default memo(Support)
