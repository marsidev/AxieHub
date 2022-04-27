import { memo } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react'

const MyModal = ({
  isOpen,
  onClose,
  title = 'Modal Window',
  size = 'md',
  showCloseIcon = false,
  onCloseComplete = () => {},
  children,
  footer,
  ...rest
}) => (
  <Modal
    isCentered
    isOpen={isOpen}
    motionPreset='slideInBottom'
    size={size}
    onClose={onClose}
    onCloseComplete={onCloseComplete}
    {...rest}
  >
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>

      {showCloseIcon && <ModalCloseButton />}

      <ModalBody>{children}</ModalBody>

      {footer && <ModalFooter>{footer}</ModalFooter>}
    </ModalContent>
  </Modal>
)

export default memo(MyModal)
