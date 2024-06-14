import {useEffect, useState} from "react";
import {Flex, Heading, Text, Box, Image, Divider, useColorMode, useColorModeValue} from "@chakra-ui/react"
import '../index.css'
import Navbar from "../components/Navbar";

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
        <Flex direction="column" align="center" justify="center" minH="100vh" w="100vw" p={4} className="background-text">
            <Flex direction={["column", "column", "row"]} align="center" justify="center" maxW="1200px" w="100%" p={4}>
                <Box flex="1" textAlign={['center', 'center', 'left']} p={4}>
                    <Flex direction={"row"}>
                        <Heading as="h1" size={["lg", "xl", "2xl"]} className="pulse-gradient" whiteSpace="nowrap">
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
                    <Text fontSize="large" alignSelf={'baseline'}>
                        Welcome to my portfolio - I hope you learn something new about me!
                    </Text>
                </Box>
                <Box flex="1" display="flex" justifyContent="center" p={4}>
                    <Image src='aarush.png' alt='Aarush' borderRadius='full' boxSize='150px' borderColor='black' borderWidth='2px' boxShadow="dark-lg" />
                </Box>
            </Flex>
        </Flex></>
    );
}

export default Home