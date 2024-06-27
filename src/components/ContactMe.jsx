import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, useColorModeValue } from '@chakra-ui/react';

const ContactMe = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Box bg={bgColor} color={textColor} p={8} borderRadius="lg" boxShadow="lg" w={['90%', '80%', '60%', '50%']} mx="auto" mt={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Contact Me
      </Heading>
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="yourname@example.com" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" />
        </FormControl>
        <Button colorScheme="teal" size="md" w="full">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactMe;
