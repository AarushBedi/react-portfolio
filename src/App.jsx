// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Home></Home>
    </Flex>
  );
}

export default App;
