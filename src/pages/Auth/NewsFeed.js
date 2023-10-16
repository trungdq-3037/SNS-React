// src/NewsFeed.js

import React from 'react';
import {
  VStack,
  Container,
  Button,
  Textarea,
  useToast,
  Box
} from '@chakra-ui/react';

import { HeaderBar, Post } from '.';

function NewsFeed() {
  const posts = [
    {
      author: 'User1',
      content: 'This is my first post.',
      comments: ['Nice post!', 'Keep it up!'],
    },
    {
      author: 'User2',
      content: 'Hello, world!',
      comments: ['Welcome!', 'How are you?'],
    },
    // Add more posts with comments here
  ];

  // const [posts, setPosts] = React.useState([]);

  // const { addPost } = useContext(AppContext);
  const [postText, setPostText] = React.useState('');
  const toast = useToast();

  const handleCreatePost = () => {
    if (postText.trim() === '') {
      toast({
        title: 'Error',
        description: 'Please enter a post text.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // Add the post to your context or send it to an API
    // addPost(postText);

    // Reset the post text input
    setPostText('');

    toast({
      title: 'Post Created',
      description: 'Your post has been created.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const fetchPosts = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  React.useState(() => {}, []);

  return (
    <>
      <HeaderBar isHomePage={true} />
      <Container maxW="md" mt={10}>
        <VStack spacing={5} align="stretch" mt={10}>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </VStack>
      </Container>
       
    </>
  );
}

export default NewsFeed;
