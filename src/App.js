import { Container, Text, VStack } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/header';
import GlobalStyle from './GlobalStyles';
import { Routes } from './routes/Routes';

function App() {
  return (
    <VStack width='full' h='100vh' p={2} >
      {/* <ToastContainer /> */}

      <Container
        maxW='container.lg'
        h='100%'
        border='4px solid #171717'
        borderRadius={10}
        position='relative'
      >
        <Header />
        <Routes />
      </Container>
    </VStack>
  );
}

export default App;
