import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Box } from "@chakra-ui/react";

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Aarush.', 'Programmer.', 'Emory.', 'Movies.', 'Technology.', 'Sports.'],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box fontSize={['4rem', '4rem', '5rem']} color="white" textAlign="center">
      <span ref={el} />
    </Box>
  );
};

export default TypingAnimation;
