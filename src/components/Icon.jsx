import SocialMedia from "./SocialMedia";
import ImageFlipper from "./ImageFlipper";
import '../index.css';
import { Box, Flex, Heading, Text, Divider, Link } from "@chakra-ui/react";

const IconPage = () => {
    return (
        <>
        <Flex direction={["column", "column", "row"]} align="center" justify="center" maxW="1200px" w="100%" p={10}>
            <Box flex="1" textAlign={['center', 'center', 'left']} p={4}>
              <Flex direction={"row"} justify={["center", "center", "flex-start"]}>
                <Heading size={["lg", "xl", "2xl"]} className="pulse-gradient ibm-plex-sans-bold-italic" whiteSpace="nowrap">
                  Hello!
                </Heading>
                <Heading as="h1" size={["lg", "xl", "2xl"]} whiteSpace="nowrap" ml={2}>
                  👋
                </Heading>
              </Flex>
              <Heading as="h1" size={["lg", "xl", "2xl"]} className="pulse-gradient" whiteSpace="nowrap">
                My name is Aarush!
              </Heading>
              <Box flex='1'>
                <Divider width={['100%','75%']} borderColor="teal.500" borderWidth="2px" align='center'></Divider>
              </Box>
              <Text fontSize={["lg", "xl"]} alignSelf={'baseline'} className=" ibm-plex-sans-bold">
                Computer Science + Data Science @ <Link href="https://www.emory.edu/home/index.html" color="teal.500" isExternal textDecoration="underline">Emory</Link>.<br />
                Interested in AI, ML and all things technology. <br />
              </Text>
              <SocialMedia />
            </Box>
            <Box flex="1" display="flex" justifyContent="center" p={4}>
              <ImageFlipper />
            </Box>
          </Flex>
          </>
    );
};

export default IconPage;