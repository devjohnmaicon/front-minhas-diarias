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

        <ModalContent bg='#F2F2F2' p={4}>
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
              <FormLabel fontWeight={600}>Valor Pago</FormLabel>
              <Input type='number' fontSize={20} focusBorderColor='#F05454' placeholder='Ex: 60 ' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight={600}>Anexar comprovante</FormLabel>
              <Input fontSize={20} focusBorderColor='#F05454' type='file' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
