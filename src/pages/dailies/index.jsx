import React, { useEffect, useState } from 'react';
import { Row } from './Row';
import { AppContainer, Box, Buttons, Headding, Header } from './styleHome';
import { BsPlusLg } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';

import { Modal } from './modal/modal';

import { Loading } from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/features/user/thunkUser';
import { logout } from '../../redux/features/login/sliceLogin';
import { clearDailies, toggleModal } from '../../redux/features/user/sliceUser';
import {
  Button,
  Center,
  Container,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { mock } from '../../utils/db';

export const Dailies = () => {
  const dispatch = useDispatch();

  const { user_id } = useSelector((state) => state.login);
  const { user_name, data, debt, modal, loading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUser(user_id));
  }, []);

  function Row() {
    return (
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td>Edit</Td>
      </Tr>
    );
  }

  return (
    <VStack w='full' h='90%'>
      {loading && <Loading />}
      {modal && <Modal />}

      <VStack w='full' flex={1} mb={2}>
        <Text fontSize={24} fontWeight={600}>
          Valor da divida
        </Text>

        <Center
          className='box-heading animate__animated animate__fadeInDown'
          bg='red.200'
          h={100}
          w='50%'
          borderRadius={15}
          justifyContent='center'
          alignItems='center'
        >
          <Text fontSize={60}>{`R$ ${debt},00`}</Text>
        </Center>
      </VStack>

      <TableContainer
        className='animate__animated animate__fadeInUp'
        w='full'
        bg='blackAlpha.300'
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        flex={5}
        overflowY='auto'
      >
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Tipo</Th>
              <Th>Data</Th>
              <Th>Valor</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </Tbody>
        </Table>
      </TableContainer>

      <Center py={2}>
        <Button
          w={180}
          h={70}
          bg='red'
          onClick={() => dispatch(toggleModal(true))}
        >
          <BsPlusLg size={'1.2rem'} color='#EDEDED' />
        </Button>
      </Center>
    </VStack>
  );
};
