// src/NewsFeed.js

import React from 'react';
import { Box, HStack, Text, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function Comment({ text }) {
  return (
    <HStack direction={['column', 'row']}>
      <Box borderWidth="1px" p={2} borderRadius="md" flex={1}>
        <Text>{text}</Text>
      </Box>
      <Box>
        <Button>
          <DeleteIcon />
        </Button>
      </Box>
    </HStack>
  );
}

export default Comment;
