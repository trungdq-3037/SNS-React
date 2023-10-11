import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

function HeaderBar() {
  return (
    <Box bg="teal.500" color="white" p={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl">Blog </Text>
        <div>
          <Button colorScheme="teal" size="sm">
            profile
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Logout
          </Button>
        </div>
      </Flex>
    </Box>
  );
}

export default HeaderBar;
