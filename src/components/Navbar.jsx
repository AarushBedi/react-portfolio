import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  
  return (
    <Box position="fixed" top="20px" left="50%" transform="translateX(-50%)" bg="white" boxShadow="md" borderRadius="full" px={6} py={3} zIndex={1000}>
      <Flex alignItems="center" justifyContent="center" gap={6}>
      <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer', fontWeight: 'bold', color: 'teal.500' }}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          About
        </ScrollLink>
        <ScrollLink to="experiences" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          Experience
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          Projects
        </ScrollLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
