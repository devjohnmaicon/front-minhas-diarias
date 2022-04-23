import { HStack, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ImExit } from 'react-icons/im';

export const Header = () => {
  const [showconfig, setShowconfig] = useState(false);

  const toggleConfig = () => {
    setShowconfig(!showconfig);
  };

  const exit = () => {
    console.log('sair');
  };

  return (
    <HStack h='8%' w='full' justifyContent='space-between' px={2}>
      <Text fontSize={22}>Usuário</Text>

      <Image
        boxSize='50px'
        objectFit='cover'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
        borderRadius='100%'
      />
      {showconfig && (
        <div className='menu-config animate__animated animate__fadeInRight'>
          <span onClick={exit}>
            Sair <ImExit />
          </span>
        </div>
      )}
    </HStack>
  );
};
