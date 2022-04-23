import React from 'react';
import { Center, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Card } from '../../components/card';

export const Home = () => {
  const fakeData = [
    {
      name: 'Ana',
      role: 'Sushi man',
      balance: 500,
    },
    {
      name: 'Maria',
      role: 'Caixa',
      balance: 500,
    },
    {
      name: 'Beto',
      role: 'Sushi man',
      balance: 500,
    },
    {
      name: 'Paulo',
      role: 'Garçon',
      balance: 500,
    },
  ];

  return (
    <VStack w='full' h='90%' overflowY='auto'>
      <Center pb={4}>
        <Text fontSize='3rem'>Funcionários</Text>
      </Center>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={8}
        w='full'
        px={['14px', '44px', '60px']}
        py={4}
      >
        {fakeData.map((employee) => (
          <Card employee={employee} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
