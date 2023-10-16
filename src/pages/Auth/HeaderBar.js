import React, { useEffect } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import api from '../../api/auth';


function HeaderBar({ isHomePage = true }) {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState();

  const logout = async e => {
    try {
      await localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const current = await api.get('/user/current');
      setUserName(current?.data?.data?.username);
      console.log(current);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Box bg="teal.500" color="white" p={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl">Blog of  {userName}</Text>
        <div>
          {isHomePage ? (
            <>
              <Button
                onClick={() => {
                  navigate('/create');
                }}
                colorScheme="blue"
                size="sm"
              >
                Create post
              </Button>
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  navigate('/profile');
                }}
              >
                Profile
              </Button>
            </>
          ) : (
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => {
                navigate('/');
              }}
            >
              Home page
            </Button>
          )}
          <Button colorScheme="teal" variant="ghost" onClick={logout}>
            Logout
          </Button>
        </div>
      </Flex>
    </Box>
  );
}

export default HeaderBar;
