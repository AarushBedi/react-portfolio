import React from 'react';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const currentYear = new Date().getFullYear();

  return (
    <Box bg={bgColor} w={['62%','100%','100%']} color={textColor} py={4} px={8} mt={10}>
      <Flex direction={['column', 'row']} justify="space-between" align="center">
        <Text fontSize="sm" textAlign={['center', 'left']}>
          &copy; {currentYear} Aarush. All rights reserved.
        </Text>
        <Text fontSize="sm" textAlign={['center', 'right']}>
          Made with ♥ using React and Chakra UI.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
