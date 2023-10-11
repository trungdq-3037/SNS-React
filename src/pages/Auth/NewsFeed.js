// src/NewsFeed.js

import React from 'react';
import { VStack, Container } from '@chakra-ui/react';

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

  return (
    <>
      <HeaderBar />
      <Container maxW="md" mt={10}>
        <VStack spacing={4} align="stretch" mt={10}>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </VStack>
      </Container>
       
    </>
  );
}

export default NewsFeed;
