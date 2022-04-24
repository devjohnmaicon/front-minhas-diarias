import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ModalPayment } from '../modal-payment';

export const Card = ({ employee }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <Box  className='box-heading animate__animated animate__fadeIn'>
      <ModalPayment
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        data={employee}
      />
      <Flex
        h={190}
        direction='column'
        // justifyContent='center'
        alignItems='center'
        borderRadius={20}
        borderWidth={1}
        bg='#F2F2F2'
        color='black'
        shadow='5px 5px 16px 4px rgba(0,0,0,0.41)'
      >
        <Image
          boxSize='70'
          objectFit='fill'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
          borderRadius={100}
          mt='-8'
        />

        <VStack mt={2}>

          <Text fontWeight={600} fontSize={32}>
            {employee.name}
          </Text>

          <Text fontSize={18}>{employee.role}</Text>

          <HStack gap={6}>
            <Text fontSize={24} fontWeight={600}>
              {`R$ ${employee.balance},00`}
            </Text>

            <Button onClick={onOpen} colorScheme='red' variant='solid'>
              Pagar
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};
