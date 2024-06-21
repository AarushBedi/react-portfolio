import {useEffect, useState} from "react";
import {Flex, Heading, Text, Box, Image, Divider, Link,} from "@chakra-ui/react"
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import '../index.css'
import Navbar from "../components/Navbar";
import MyExperiences from "../components/MyExperiences";
import SocialMedia from "../components/SocialMedia";
import ProjectsPanel from "../components/Projects";
import ImageFlipper from "../components/ImageFlipper";

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
        <>
        <Box pt={"80vh"}> 
        <Navbar />
        <Flex direction="column" align="center" justify="center" minH="100vh" w="100vw" p={4} className="background-text" mt={-50}>
            <Flex direction={["column", "column", "row"]} align="center" justify="center" maxW="1200px" w="100%" p={10} mt={150}>
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
                        Interested in AI, ML and all things technology. <br/>                    
                    </Text>
                    <SocialMedia/>
                </Box>
                <Box flex="1" display="flex" justifyContent="center" p={4}>
                    <ImageFlipper/>
                </Box>
            </Flex>
        </Flex>
        <Box w='100%' bg='blue.100' display="flex" justifyContent="center" mt={-2} transform={"skewY(-3deg)"}>
        <Box  bg="gray.50" borderRadius="lg" p={6}  w="75%" mx="auto" my={12} boxShadow="md" transform={"skewY(3deg)"}>
            <Heading as="h1" align={'center'} jusify={'center'} size="xl" mb={4} className="pulse-gradient">
                About Me
            </Heading>
            <Divider mb={4} align='center' justify='center' maxW={'25%'} mx="auto" borderWidth={'2px'}borderColor={'teal.500'}></Divider>

            <Text fontSize="md" textAlign={'center'}>
                I'm a rising senior at Emory University majoring in Computer Science with a minor in Quantitative Social Sciences (Data Science). Since discovering my passion for programming in the 8th grade, I've become proficient in languages such as Java and Python, and have continuously expanded my expertise through both formal education and self-directed learning. <br/>

                <br/>Throughout my academic journey—from high school to Emory University—I have vigorously engaged with an array of subjects, including artificial intelligence, machine learning, and web-app design. My academic pursuits are complemented by a strong interest in data science, where I thrive on extracting actionable insights from complex datasets to empower better decision-making within organizations.<br/>

                <br/>As a Student Intern at NXP Semiconductors, I am actively engaged in developing tools for embedded RISC-V debuggers and compilers. Our team's goal is to seamlessly integrate new features into existing software, ensuring robust and innovative solutions in the embedded systems landscape.<br/>          
            </Text>
         </Box>
         </Box>
         <MyExperiences/>
         <ProjectsPanel/>
         </Box>
        </>
    );
}

export default Home