import React from 'react';
import { Flex, Box, Text, Image, Heading, Stack, Link, Divider, UnorderedList, ListItem } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import ReturnButton from '../components/ReturnButton';
import CustomBadge from '../components/CustomBadge';
import CarouselComponent from '../components/ImageCarousel';

const tags = ["React","Chakra UI"]

const PersonalPortfolio = () => {
  return (
    <Box pt={10} w="100%" alignContent={'center'} justifyContent={'center'} bg={'gray.50'}>
      <Box mx={5}><ReturnButton/></Box>
      <Box pt={1} alignContent={'center'} justifyContent={'center'} w="100%">
        <Flex direction={'row'} mt={10} mx={400} align={'center'} justify={'center'}> 
        <Stack direction={'column'}> 
            <Heading className='pulse-gradient' fontSize={'100px'}>Portfolio</Heading>
            <CustomBadge tags={tags} customSize={'1em'}/>
        </Stack>
        <Link href="https://github.com/AarushBedi/react-portfolio" mx={7} mt={6}><LinkIcon boxSize={'36px'}/></Link>
        <Divider orientation='vertical' height='300px' borderColor="teal.500" borderWidth="2px" mr={10} />      
        <Image
          src="images/aarush_icon.svg"
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
            <Text mt={7} align={'left'} fontSize={'20px'}>For this project my main goal was to have a polished portfolio that was built from scratch using React and another React framework. The reason behind this was to gain experience in web development, gain experience in working with React and finally have a personal portfolio that talked about my experience and projects. <br/>

            <br/>This took me about 3 weeks to complete where I learnt as I went. I used online resources to my advantage and learnt not only the basics of React but Javascript and CSS as well. When I began building this website I was using native React but as I moved forward I decided to use Chakra UI as a framework as it allowed me to experiment more with components. I used many different libraries inside Chakra to get icons and different components. <br/>

            <br/>Overall, the experience was very rewarding and I was able to finally get a polished portfolio for myself. It has to be said that this is a very open ended project and I will continue to update it as time move on. </Text>
            <Heading mt={10}color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>Tech Stack </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>
              We used the following tools and technologies to build this web appliction:
              <UnorderedList mt={2} ml={20} spacing={1} styleType={'disc'} >
                <ListItem>Javascript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Vercel</ListItem>
                <ListItem>Chakra UI</ListItem>
              </UnorderedList>
            </Text>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PersonalPortfolio;
