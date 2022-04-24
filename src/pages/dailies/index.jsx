import React, { useEffect, useState } from 'react';
import { Row } from './Row';
import { BsPlusLg } from 'react-icons/bs';

import { ModalDaily } from '../../components/modal-daily';

import {
  Button,
  Center,
  Table,
  TableContainer,
  Tbody,
  Text,
  VStack,
} from '@chakra-ui/react';

import { mock } from '../../utils/mock';

export const Dailies = () => {
  const [modal, setModal] = useState({ isOpen: false, data: null });

  const openModal = () => {
    setModal({ ...modal, isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false, data: null });
  };

  return (
    <VStack h='90%'>
      {modal.isOpen && <ModalDaily data={modal.data} closeModal={closeModal} />}

      <VStack w='full' flex={1} mb={2}>
        <Text fontSize={24} fontWeight={600} w={['full', '40%']}>
          Valor da divida
        </Text>

        <Center
          className='box-heading animate__animated animate__fadeInDown'
          bg='red'
          h={100}
          w={['100%', '80%', '40%']}
          borderRadius={15}
          justifyContent='center'
          alignItems='center'
        >
          <Text
            color='white'
            fontSize={['2.8 rem', '3.4rem']}
            fontWeight={600}
          >{`R$ ${'100'},00`}</Text>
        </Center>
      </VStack>

      <TableContainer
        w='full'
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        flex={5}
        overflowY='auto'
        bg='#F2F2F2'
        color='black'
        className='box-heading animate__animated animate__fadeInUp'
      >
        <Table>
          <Tbody>
            {mock.map((item, index) => (
              <Row key={index} daily={item} setModal={setModal} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Center py={2}>
        <Button
          w={180}
          h={70}
          variant='solid'
          bg='red'
          colorScheme='red'
          leftIcon={<BsPlusLg size={'1.5rem'} color='white' />}
          onClick={openModal}
        />
      </Center>
    </VStack>
  );
};
