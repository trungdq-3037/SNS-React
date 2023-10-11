// src/NewsFeed.js

import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Input,
  Button,
} from '@chakra-ui/react';
import { Comment } from '.';

function Post({ author, content, comments }) {
  return (
    <Box borderWidth="1px" p={4} mb={4} borderRadius="md">
      <Text fontWeight="bold">{author}</Text>
      <Text>{content}</Text>

      <Divider my={2} />

      <VStack spacing={2}>
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </VStack>

      <HStack mt={4}>
        <Input placeholder="Add a comment" />
        <Button colorScheme="teal">Comment</Button>
      </HStack>
    </Box>
  );
}

export default Post;
