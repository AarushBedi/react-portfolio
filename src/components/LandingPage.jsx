import { Box, Heading, Text } from "@chakra-ui/react";
import ScrollArrow from "./ScrollArrow";
import TypingAnimation from "./TypingAnimation";

const LandingPage = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="landscape-pulse-gradient"
      color="white"
      textAlign="center"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="1"
    >
      <TypingAnimation/>
      <Heading as="h1" size="2xl" mb={4}>
      Welcome to my Portfolio! 
      </Heading>
      <Heading as="h2" size="2xl" mb={4}>
      ⚡️⚡️⚡️
      </Heading>
      <ScrollArrow/>
    </Box>
  );
};

export default LandingPage;
