import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { Login, Register } from './pages/UnAuth';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Login></Login> */}
      <Register></Register>
    </ChakraProvider>
  );
}

export default App;
