// src/NewsFeed.js

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Comment({ text }) {
  return (
    <Box borderWidth="1px" p={2} borderRadius="md">
      <Text>{text}</Text>
    </Box>
  );
}

export default Comment;
