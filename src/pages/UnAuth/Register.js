// src/Register.js

import React from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Layout } from '.';
import api from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const toast = useToast();
  const [form, setForm] = React.useState({});
  const navigate = useNavigate();

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickRegister = async (e) => {
    try {
      e.preventDefault();
      if (form?.password !== form?.password_confirmation) {
        return toast({
          title: 'Error',
          description: 'password confirmation and password must be the same',
          status: 'error',
          duration: 1000,
          isClosable: true,
        });
      }
      await api.post('/register', form);
      await toast({
        title: 'Register Success',
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
      navigate('/login');
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.message,
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout>
      <Box p={4} maxW="400px" m="auto">
        <form>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                name="username"
                onChange={handleInput}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInput}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInput}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password Confirm</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                name="password_confirmation"
                onChange={handleInput}
              />
            </FormControl>

            <Button
              colorScheme="teal"
              type="submit"
              onClick={handleClickRegister}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  );
}

export default Register;
