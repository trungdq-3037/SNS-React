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
  Container
} from '@chakra-ui/react';

function EditProfile() {
  return (
    <Container maxW="md">
      <Box p={4}>
        <form>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Your username" />
            </FormControl>

            <FormControl>
              <FormLabel>Short Bio</FormLabel>
              <Textarea placeholder="A brief description about yourself" />
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Save Changes
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default EditProfile;
