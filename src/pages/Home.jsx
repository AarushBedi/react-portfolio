import React from 'react';
import { Flex, Heading, Text, Box, Divider, Link } from "@chakra-ui/react";
import '../index.css';
import Navbar from "../components/Navbar";
import MyExperiences from "../components/MyExperiences";
import SocialMedia from "../components/SocialMedia";
import ProjectsPanel from "../components/Projects";
import ImageFlipper from "../components/ImageFlipper";
import LandingPage from "../components/LandingPage";
import CarouselComponent from "../components/ImageCarousel";
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

const carouselItems = [
  {
    type: 'image',
    src: 'images/footy.jpg',
    description: 'Playing Intramural soccer - ended up losing in the finals 🥲',
  },
  {
    type: 'image',
    src: 'images/ny.jpg',
    description: 'My best friend and I in Times Square!',
  },
  {
    type: 'image',
    src: 'images/coffee.jpg',
    description: 'A sunday tradition in Austin - Coffee & Coding!',
  },
  {
    type: 'image',
    src: 'images/cabo.jpg',
    description: 'A picture I took at 6 a.m from my hotel room in Mexico.',
  },
  {
    type: 'image',
    src: 'images/chows.jpg',
    description: 'The best asian in Atlanta - Ruby Chows',
  },
  {
    type: 'image',
    src: 'images/georiga.jpg',
    description: 'A picture from when I snuck into Sanford Stadium.',
  },
  {
    type: 'image',
    src: 'images/savannah.jpg',
    description: 'A core memory - seeing the park "Forrest Gump" was filmed.',
  },
  {
    type: 'image',
    src: 'images/jodhpure.jpg',
    description: 'A moment from a family vacation in the city of Blue - Jodhpur.',
  },
  {
    type: 'image',
    src: 'images/ponce.jpg',
    description: 'My absolute favorite place in Atlanta - Ponce City Market.',
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Box pt={["100vh", "80vh", "80vh"]} mb={100}>
        <Flex id="home" direction="column" align="center" justify="center" minH="100vh" w="100vw" p={4} className="background-text" mt={-50}>
          <Flex direction={["column", "column", "row"]} align="center" justify="center" maxW="1200px" w="100%" p={10} mt={150}>
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
              <Box padding={4} flex='1'>
                <Divider width='75%' borderColor="teal.500" borderWidth="2px" align='center'></Divider>
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
        </Flex>
        <Box id="about" w='100%' bg='blue.100' display="flex" justifyContent="center" mt={-5} transform={"skewY(-3deg)"}>
          <Box bg="gray.50" borderRadius="lg" p={6} w={["90%", "80%", "75%"]} mx="auto" my={20} boxShadow="md" transform={"skewY(3deg)"} textAlign={["center", "center", "left"]}>
            <Heading as="h1" align={'center'} jusify={'center'} size="xl" mb={4} className="pulse-gradient ibm-plex-sans">
              About Me
            </Heading>
            <Divider mb={4} align='center' justify='center' maxW={'25%'} mx="auto" borderWidth={'2px'} borderColor={'teal.500'}></Divider>
            <Text fontSize={["md", "md", "lg"]} textAlign={['center', 'center', 'left']} className="ibm-plex-sans-medium-semibold">
              I'm a rising senior at Emory University majoring in Computer Science with a minor in Quantitative Social Sciences (Data Science). Since discovering my passion for programming in the 8th grade, I've become proficient in languages such as Java and Python, and have continuously expanded my expertise through both formal education and self-directed learning. <br />
              <br />Throughout my academic journey—from high school to Emory University—I have vigorously engaged with an array of subjects, including artificial intelligence, machine learning, and web-app design. My academic pursuits are complemented by a strong interest in data science, where I thrive on extracting actionable insights from complex datasets to empower better decision-making within organizations.<br />
              <br />Away from academics, I have interests in soccer, movies, gymming, gaming and a lot more. I have been playing soccer for over 10 years and love playing pick up games wherever I go (I am also a diehard FC Barcelona fan!). My favorite movie of all time is Forrest Gump and I am pretty active on Letterboxd. I love finding new cafes to try their Vanilla Ice Lattes and have been ranking each one I have had. <br />
            </Text>
          </Box>
        </Box>
        <Box id="experiences" w='100%' bg='gray.50' display="flex" justifyContent="center" py={10}>
          <MyExperiences />
        </Box>
        <Box id="projects">
          <ProjectsPanel />
        </Box>
        <Box id="images" mt={10}>
          <Heading as="h1" align={'center'} jusify={'center'} size="xl" mb={4} className="pulse-gradient ibm-plex-sans">
            Pictures
          </Heading>
          <Divider mb={4} align='center' justify='center' maxW={'10%'} mx="auto" borderWidth={'2px'} borderColor={'teal.500'}></Divider>
          <Text align={'center'} justify={'center'} fontWeight={'bold'} fontSize={'20px'} mb={5}> Some pictures of my life that I love to share!</Text>
          <CarouselComponent items={carouselItems} />
        </Box>
      </Box>
      <Footer/>
    </>
  );
}

export default Home;
