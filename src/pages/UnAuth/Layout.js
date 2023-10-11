import React from 'react';
import { Center, Container } from '@chakra-ui/react';

function LoginLayout({ children }) {
  return (
    <Center minH="100vh">
      <Container maxW="sm" p="4" rounded="md" borderWidth="1px" boxShadow="md">
        {children}
      </Container>
    </Center>
  );
}

export default LoginLayout;