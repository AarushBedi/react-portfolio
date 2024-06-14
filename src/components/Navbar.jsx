import { Flex, Box, Spacer, useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("custom.navbarBg", "custom.navbarBg");
  const textColor = useColorModeValue("custom.textColor", "custom.textColor");

  return (
    <Flex as="nav" w="100%" p={4} align="center" boxShadow="md" bg={bgColor} color={textColor}>
      {/* Logo */}
      <Box fontSize="2xl" fontWeight="bold">
        Aarush
      </Box>

      <Spacer />

      {/* Light/Dark Mode Toggle */}
      <IconButton
        aria-label="Toggle Dark Mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;
