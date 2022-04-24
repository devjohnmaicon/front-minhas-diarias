import React, { useState, useEffect } from 'react';

import { getDate } from '../../utils/inputMasks';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';

export const ModalDaily = ({ data, closeModal }) => {
  const [daily, setDaily] = useState({
    type: data ? data.type : '1',
    value: data ? data.value : '',
    date: data ? data.date : `${getDate()}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDaily({ ...daily, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let formErros = false;

  //   if (daily.value == '' || daily.value < 0) {
  //     formErros = true;
  //     toast.error('Preencha o campo valor.');
  //     return;
  //   }

  //   if (formErros) return;

  //   edit ? dispatch(updateDaily(daily)) : dispatch(createDaily(daily));

  //   close();
  // };

  const close = () => {
    closeModal();
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'grid',
        placeContent: 'center',
        zIndex: '5',
      }}
      bg='red.200'
      position='absolute'
      zIndex={2}
      p={10}
      width='500px'
    >
      <form
        // onSubmit={handleSubmit}
        style={{
          backgroundColor: '#F2F2F2',
          width: '500px',
          padding: '1.5rem',
          color: '#121212',
        }}
      >
        <Text fontSize='2rem' fontWeight={600} py={4}>
          {data ? 'Editar Diária' : 'Novo Lançamento'}
        </Text>

        <FormControl mb={4}>
          <FormLabel fontWeight={600}>Tipo</FormLabel>

          <Select
            name='type'
            fontSize={20}
            focusBorderColor='#F05454'
            value={daily.type}
            onChange={handleChange}
          >
            <option value='1'>Diária</option>
            <option value='2'>Pagamento</option>
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel fontWeight={600}>Valor</FormLabel>
          <Input
            name='value'
            type='number'
            placeholder='Ex: 60 '
            fontSize={20}
            focusBorderColor='#F05454'
            value={daily.value}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel fontWeight={600}>Data</FormLabel>
          <Input
            name='date'
            type='date'
            fontSize={20}
            focusBorderColor='#F05454'
            value={daily.date}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel fontWeight={600}>Descrição</FormLabel>
          <Textarea
            name='date'
            type='date'
            fontSize={18}
            focusBorderColor='#F05454'
            value={daily.description}
            onChange={handleChange}
          />
        </FormControl>

        <Flex justify='flex-end' gap={5}>
          <Button type='submit' colorScheme='red' variant='solid'>
            Salvar
          </Button>

          <Button variant='ghost' onClick={close}>
            Cancelar
          </Button>
        </Flex>
      </form>
    </div>
  );
};
