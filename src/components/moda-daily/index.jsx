import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react';

export const ModalDaily = ({ initialRef, finalRef, isOpen, onClose, data }) => {
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader fontSize={22}>Novo Lançamento</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl mb={4}>
              <FormLabel fontWeight='bolder'>Valor</FormLabel>
              <Input type='number' placeholder='Ex: 60,00 ' />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontWeight='bolder'>Data</FormLabel>
              <Input type='date' placeholder='Ex: 60,00 ' />
            </FormControl>

            <FormControl mb={4}>
              <Textarea placeholder='** Descrição' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
