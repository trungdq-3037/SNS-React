// src/NewsFeed.js

import React from 'react';
import { Box, HStack, Text, Button, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function Comment({ comment, deleteComment }) {

  const { id, comment_text, user_name } = comment;

  return (
    <div>
      <Box>
        <Text as="b">{user_name}</Text>
      </Box>
      <Box>
        <HStack direction={['column', 'row']}>
          <Box borderWidth="1px" p={2} borderRadius="md" flex={1}>
            <Text>{comment_text}</Text>
          </Box>
          <Box>
            <Button onClick={()=>deleteComment(id)}>
              <DeleteIcon />
            </Button>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}

export default Comment;
