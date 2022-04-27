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
  VStack
} from '@chakra-ui/react'
import Modal from '@components/Modal'
import { FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi'
import { supportMethods } from '@/lib/constants'

const Label = ({ id, label, value, isLink = false }) => {
  const { hasCopied, onCopy } = useClipboard(value, 3000)

  const LabelIcon = isLink
    ? FiExternalLink
    : hasCopied
      ? FiCheck : FiCopy

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup size='sm'>
        <Input
          isReadOnly
          id={id}
          type='text'
          variant='filled'
          placeholder={value}
          borderRadius={8}
        />
        <InputRightAddon p={0} borderRadius={8}>
          <IconButton
            variant='ghost'
            size='sm'
            icon={<LabelIcon />}
            onClick={!isLink ? onCopy : () => window.open(value)}
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
