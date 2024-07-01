import { Box, Heading, Flex } from "@chakra-ui/react";
import ScrollArrow from "./ScrollArrow";
import TypingAnimation from "./TypingAnimation";

const LandingPage = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      overflowX="hidden"
      className="landscape-pulse-gradient"
      color="white"
      textAlign="center"
      p={[4, 6, 8]}
      position="relative"
      zIndex="1"
    >
      <TypingAnimation />
      <Heading as="h1" size={["md", "xl", "2xl"]} mb={4}>
        Welcome to my Portfolio!
      </Heading>
      <Heading as="h1" size={["md", "lg", "xl"]} mb={4}>
        ⚡️⚡️⚡️
      </Heading>
      <ScrollArrow />
    </Flex>
  );
};

export default LandingPage;
