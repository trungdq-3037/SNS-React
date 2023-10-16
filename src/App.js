import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Login, Register } from './pages/UnAuth';
import { EditProfile, NewsFeed, CreatePost } from './pages/Auth';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/" exact element={<NewsFeed />} />
          <Route path="/profile" exact element={<EditProfile />} />
          <Route path="/create" exact element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
