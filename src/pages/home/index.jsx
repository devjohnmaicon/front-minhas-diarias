import { Box, Center, Grid, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Card } from '../../components/card';

export const Home = () => {
  return (
    <VStack w='full' h='90%' overflowY='auto'>
      <Center justifyContent='center'>
        <Text fontSize='3rem'>Funcionários</Text>
      </Center>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={8}
        w='full'
        px={['14px', '44px', '60px']}
        py={4}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </VStack>
  );
};
