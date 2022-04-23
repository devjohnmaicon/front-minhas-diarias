import { Container, VStack } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/header';
import { Routes } from './routes/Routes';

function App() {
  return (
    <VStack width='full' h='100vh' p={2} position='relative'>
      {/* <ToastContainer /> */}

      <Container
        maxW='container.lg'
        h='100%'
        border='4px solid #171717'
        borderRadius={10}
        position='relative'
        px={['5px', '15px', '25px']}
      >
        <Header />
        <Routes />
      </Container>
    </VStack>
  );
}

export default App;
