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
} from '@chakra-ui/react';

export const ModalPayment = ({
  initialRef,
  finalRef,
  isOpen,
  onClose,
  data,
}) => {
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Pagamento ({data.role}) {data.name}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Center py={4}>
              <Text fontSize={22}>
                Débito Atual: <strong> {`R$ ${data.balance},00`}</strong>{' '}
              </Text>
            </Center>

            <FormControl>
              <FormLabel>Valor Pago</FormLabel>
              <Input type='number' placeholder='Ex: 60,00 ' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Anexar comprovante</FormLabel>
              <Input type='file' />
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
