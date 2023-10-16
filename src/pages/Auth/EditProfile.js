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
  const updateProfile = async e => {
    // const response = await api.post('/profile',{})
    try {
      e.preventDefault();
      toast({
        title: 'Message title',
        description: 'This is the message text',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {}
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
                <Input type="text" placeholder={currentUser?.username} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="text" name="password_digest"/>
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
