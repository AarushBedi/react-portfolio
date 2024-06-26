import React from 'react';
import { Flex, Box, Text, Button, Image, Heading, Stack, Link, Divider, UnorderedList, ListItem, List} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import ReturnButton from '../components/ReturnButton';
import CustomBadge from '../components/CustomBadge';
import CarouselComponent from '../components/ImageCarousel';

const tags = ["Javascript","React","Firebase"]
const images = [
  {
    type: 'image',
    src: 'images/mutuals_team.jpg',
    description: 'The team behind Mutuals!'
  },
  {
    type: 'image',
    src: 'images/mutuals_sprint.jpg',
    description: 'Presenting the Proposal'
  }
]

const Mutuals = () => {
  return (
    <Box pt={10} w="100%" alignContent={'center'} justifyContent={'center'} bg={'gray.50'}>
      <Box mx={5}><ReturnButton/></Box>
      <Box pt={1} alignContent={'center'} justifyContent={'center'} w="100%">
        <Flex direction={'row'} mt={10} mx={400} align={'center'} justify={'center'}> 
        <Stack direction={'column'}> 
            <Heading className='pulse-gradient' fontSize={'100px'}>Mutuals.</Heading>
            <CustomBadge tags={tags} customSize={'1em'}/>
        </Stack>
        <Link href="https://github.com/AarushBedi/project-apollo" mx={7} mt={6}><LinkIcon boxSize={'36px'}/></Link>
        <Divider orientation='vertical' height='300px' borderColor="teal.500" borderWidth="2px" mr={10} />      
        <Image
          src="images/mutuals logo.svg"
          alt="Mutuals Project"
          borderRadius="md"
          mb={4}
          w="400px"
          objectFit="cover"
          boxShadow="sm"
        />
        </Flex>
        <Flex direction={'column'} alignContent={'center'} justifyContent={'center'} w={'100%'}  h={'100%'} mt={10} mb={10}>
            <Box alignContent={'center'} w={'80%'} mx={'auto'} justifyContent={'center'}>
            <Heading color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>Description </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>Mutuals is a web-based application that simplifies the process of finding and connecting with individuals who share a common interest in playing sports during the weekend. By allowing users to input their sport preferences and availability, Mutuals facilitates the formation of groups with similar interests and schedules. The application uses an algorithm that runs every Thursday, creating groups of users who can connect through a group chat to plan and organize their sporting events.</Text>
            <Heading mt={10}color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>Tech Stack </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>
              We used the following tools and technologies to build this web appliction:
              <UnorderedList mt={2} ml={20} spacing={1} styleType={'disc'} >
                <ListItem>Javascript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Firebase</ListItem>
                <ListItem>Vercel</ListItem>
                <ListItem>Next.js</ListItem>
              </UnorderedList>
            </Text>
            <Heading mt={7} color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>How it works? </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>The idea behind mutuals was to connect like minded individuals together who share a similar interest in some activity. Mutuals works on an open window model that essentially picks up user’s availability and interests over the week and plans events based on this information. For example, if I want to play a 5v5 pick up basketball game and I have indicated times over the weekend that I am free, mutuals will take in all this data over the week until it locks availability at around 12 noon on Thursday, upon which it will use its algorithm to plan and create events that best suit every users timing and interests. </Text>
            <Heading mt={7} color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>More </Heading>
            <CarouselComponent items={images}/>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Mutuals;
