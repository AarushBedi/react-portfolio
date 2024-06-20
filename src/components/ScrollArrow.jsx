import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import '../index.css';

const ScrollArrow = () => {
  return (
    <Box className="arrow-container">
      <Text fontSize="lg" color="white">
        Scroll down to see more
      </Text>
      <ChevronDownIcon boxSize={8} color="white" className="arrow" />
    </Box>
  );
};

export default ScrollArrow;