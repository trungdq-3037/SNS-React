// src/Register.js

import React from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import { Layout } from '.';

function Register() {
  return (
    <Layout>
      <Box p={4} maxW="400px" m="auto">
        <form>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  );
}

export default Register;
