// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box, Flex } from '@chakra-ui/react';
import LandingPage from './pages/LandingPage';

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleScrollDown = () => {
    setShowLandingPage(false);
  };
  
  return (
    <Box position={'relative'}>
        <LandingPage/>
        <Home/>
      </Box>
  );
}

export default App;
