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
import { useNavigate } from 'react-router-dom';
import api from '../../api/auth';

function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const response = await api.post('/login', formData);
      await localStorage.setItem('token', response.data.data);
      navigate('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const goToRegister = e => {
    navigate('/register');
  };

  return (
    <Layout>
      <Box p={4} maxW="400px" m="auto">
        <form>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit" onClick={handleLogin}>
              Login
            </Button>

            <Button colorScheme="teal" variant="outline" onClick={goToRegister}>
              register new user
            </Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  );
}

export default Login;
