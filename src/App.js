import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Login, Register } from './pages/UnAuth';
import { EditProfile, NewsFeed, CreatePost } from './pages/Auth';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import api from './api/auth';

function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const checkLogin = async () => {
    try {
      const token = await localStorage.getItem('token');
      if (!token) {
        return setIsLogin(false);
      }
      await api.get('/');
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
      console.log(error);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {!isLogin ? (
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" exact element={<NewsFeed />} />
            <Route path="/profile" exact element={<EditProfile />} />
            <Route path="/create" exact element={<CreatePost />} />
          </Routes>
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
