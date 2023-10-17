// src/EditProfile.js

import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Container,
  useToast,
} from '@chakra-ui/react';
import { HeaderBar } from '.';
import api from '../../api/auth';

function EditProfile() {
  const toast = useToast();
  const [currentUser, setCurrentUser] = React.useState({});
  const [form, setForm] = React.useState({});

  const handleInput = function (e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateProfile = async e => {
    try {
      e.preventDefault();
      const response = await api.put('/user', form);
      await setCurrentUser({
        ...currentUser,
        username: response?.data?.data?.username,
      });

      toast({
        title: 'Message title',
        description: 'This is the message text',
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
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

  const getCurrentUser = async () => {
    try {
      const current = await api.get('/user/current');
      setCurrentUser(current?.data?.data);
      console.log(current);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <HeaderBar isHomePage={false} />
      <Container maxW="md">
        <Box p={4}>
          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Id</FormLabel>
                <Input type="text" placeholder={currentUser?.id} disabled />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder={currentUser?.email}
                  disabled
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder={currentUser?.username}
                  name="username"
                  onChange={handleInput}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="text" name="password" onChange={handleInput} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  type="text"
                  name="password_confirmation"
                  onChange={handleInput}
                />
              </FormControl>

              <Button colorScheme="teal" type="submit" onClick={updateProfile}>
                Save Changes
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default EditProfile;
