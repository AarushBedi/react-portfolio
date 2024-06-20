import { Flex, Link, Box, useColorMode } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";


const Navbar = () => {
  
  return (
    <Box position="fixed" top="20px" left="50%" transform="translateX(-50%)" bg="white" boxShadow="md" borderRadius="full" px={6} py={3} zIndex={1000}>
      <Flex alignItems="center" justifyContent="center" gap={6}>
        <Link href="/pages/Home.jsx" fontWeight="bold" color="teal.500">
          Home
        </Link>
        <Link href="/about" fontWeight="bold">
          About
        </Link>
        <Link href="/projects" fontWeight="bold">
          Projects
        </Link>
        <Link href="/articles" fontWeight="bold">
          Articles
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
