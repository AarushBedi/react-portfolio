import {useEffect, useState} from "react";
import {Flex, Heading, Text, Box, Image, Divider, Link, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import '../index.css'
import Navbar from "../components/Navbar";
import MyExperiences from "../components/MyExperiences";

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <><Navbar />
        <Flex direction="column" align="center" justify="center" minH="100vh" w="100vw" p={4} className="background-text" mt={-50}>
            <Flex direction={["column", "column", "row"]} align="center" justify="center" maxW="1200px" w="100%" p={4}>
                <Box flex="1" textAlign={['center', 'center', 'left']} p={4}>
                    <Flex direction={"row"}>
                        <Heading size={["lg", "xl", "2xl"]} className="pulse-gradient ibm-plex-sans-bold-italic" whiteSpace="nowrap">
                            Hello!
                        </Heading>
                        <Heading as="h1" size={["lg", "xl", "2xl"]} whiteSpace="nowrap">
                            👋
                        </Heading>
                    </Flex>
                    <Heading as="h1" size={["lg", "xl", "2xl"]} className="pulse-gradient" whiteSpace="nowrap">
                        My name is Aarush!
                    </Heading>
                    <Box padding={4} flex='1'>
                        <Divider width='75%' borderColor="teal.500" borderWidth="2px" align='center'></Divider>
                    </Box>
                    <Text fontSize="xl" alignSelf={'baseline'} className=" ibm-plex-sans-bold">
                        Computer Science + Data Science @ <Link href="https://www.emory.edu/home/index.html" color="teal.500" isExternal textDecoration="underline">Emory</Link>.<br/>
                        Currently working at NXP Semiconductors. <br/>
                        Overall technology enthusiast. <br/>                    </Text>
                </Box>
                <Box flex="1" display="flex" justifyContent="center" p={4}>
                    <Image src='images/aarush.png' alt='Aarush' borderRadius='full' boxSize={["150px","250px","350px"]} m={['2', '4', '6']} borderColor='black' borderWidth='2px' boxShadow="dark-lg" />
                </Box>
            </Flex>
            <MyExperiences/>
        </Flex>
        <Box  bg="gray.100" borderRadius="lg" p={6} w="75%" mx="auto" my={4} boxShadow="md">
            <Heading as="h1" align={'center'} jusify={'center'} size="xl" mb={4} className="pulse-gradient">
                About Me
            </Heading>
            <Text fontSize="md">
                Hi, I'm Aarush! I'm passionate about computer science and technology. I love exploring new technologies and building projects that solve real-world problems. My interests include AI, data science, and software development.
            </Text>
         </Box>
        </>
    );
}

export default Home