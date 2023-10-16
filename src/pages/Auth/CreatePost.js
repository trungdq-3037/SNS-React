// src/CreatePost.js

import React, { useState } from 'react';
import {
  Box,
  Button,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
// import { AppContext } from './AppContext'; // Assuming you have an AppContext defined
import { HeaderBar } from '.';
import api from '../../api/auth';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  //   const { addPost } = useContext(AppContext);
  const [postText, setPostText] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleCreatePost = async e => {
    try {
      if (postText.trim() === '') {
        return toast({
          title: 'Error',
          description: 'blanks post',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }

      const res = await api.post('/post', {
        content: postText,
      });
      console.log(res);
      toast({
        title: 'Success',
        description: res?.data?.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigate('/')
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

  return (
    <>
      <HeaderBar isHomePage={true} />
      <VStack spacing={5} align="stretch" mt={10}>
        <Box p={4}>
          <Textarea
            placeholder="What's on your mind?"
            value={postText}
            onChange={e => setPostText(e.target.value)}
            mb={10}
          />
          <Button colorScheme="teal" onClick={handleCreatePost}>
            Create Post
          </Button>
        </Box>
      </VStack>
    </>
  );
}

export default CreatePost;
