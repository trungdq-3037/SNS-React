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
  Icon,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Comment } from '.';
import { FaHeart } from 'react-icons/fa';

function Post({ author, content, comments }) {
  return (
    <Box borderWidth="1px" p={4} mb={4} borderRadius="md">
      <HStack  direction={['column', 'row']}>
        <Box flex="1">
          <Text fontWeight="bold">{author}</Text>
          <Text>{content}</Text>
        </Box>
        <Box>
          <Button
            // leftIcon={<Icon as={FaTrash} />}
            variant="outline"
            colorScheme="teal"
          >
            <DeleteIcon />
          </Button>
        </Box>
      </HStack>

      <Divider my={2} />

      <VStack spacing={2}>
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </VStack>

      <HStack mt={5}>
        <Button variant="outline" colorScheme="teal">
          <Icon as={FaHeart} />
        </Button>
        <Input placeholder="Add a comment" />
        <Button colorScheme="teal">Comment</Button>
      </HStack>
    </Box>
  );
}

export default Post;
