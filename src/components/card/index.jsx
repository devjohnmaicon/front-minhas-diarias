import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const Card = () => {
  return (
    <Box>
      <Flex
        h={220}
        direction='column'
        justifyContent='center'
        alignItems='center'
        borderRadius={20}
        border='1px solid #000'
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

        <VStack mt={5}>
          <Text fontWeight={600} fontSize={32}>
            Jao Antônio
          </Text>

          <Text fontSize={18}>Sushi Man</Text>

          <HStack gap={6}>
            <Text fontSize={24} fontWeight={600}>
              R$ 600,00
            </Text>
            <Button variant='solid'>Pagar</Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};
