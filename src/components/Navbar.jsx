import { Flex, Box } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top="20px"
      left={["50%","30%","50%"]}
      transform="translateX(-50%)"
      bg="white"
      boxShadow="md"
      borderRadius="full"
      px={[4, 6, 8]}
      py={[2, 3, 4]}
      zIndex={1000}
      width={['95%', '70%', '35%']} 
    >
      <Flex alignItems="center" justifyContent="center" gap={[2, 4, 6]}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            color: 'teal.500',
            fontSize: ['xs', 'md', 'lg'],  
          }}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: ['xxs', 'sm', 'lg'],
          }}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="experiences"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: ['xs', 'md', 'lg'],
          }}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: ['xs', 'md', 'lg'],
          }}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="images"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: ['xs', 'md', 'lg'],
          }}
        >
          Pictures
        </ScrollLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
