// src/EditProfile.js

import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Container,
  useToast,
} from '@chakra-ui/react';
import { HeaderBar } from '.';
// import api from "."


function EditProfile() {
  const toast = useToast();
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
  return (
    <>
      <HeaderBar isHomePage={false} />
      <Container maxW="md">
        <Box p={4}>
          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name"  />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" placeholder="Your email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" name="username" placeholder="Your username" />
              </FormControl>

              <FormControl>
                <FormLabel>Short Bio</FormLabel>
                <Textarea placeholder="A brief description about yourself" />
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
