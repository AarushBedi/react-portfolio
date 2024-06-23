import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import '../index.css';

const ImageFlipper = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box className={`flip-container ${flipped ? 'flip' : ''}`} onClick={handleFlip} w={["150px", "250px", "350px"]} h={["150px", "250px", "350px"]} m={['2', '4', '6']}>
      <Box className="flipper">
        <Box className="front">
          <Image src='images/aarush_icon.svg' alt='Aarush' borderRadius='full' boxSize="100%" borderColor='black' borderWidth='2px' boxShadow="dark-lg" />
        </Box>
        <Box className="back">
          <Image src='images/aarush.png' alt='Aarush' borderRadius='full' boxSize="100%" borderColor='black' borderWidth='2px' boxShadow="dark-lg" />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageFlipper;
