import React from 'react';
import { Flex, Box, Text, Button, Image, Heading, Stack, Link, Divider, UnorderedList, ListItem  } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import ReturnButton from '../components/ReturnButton';
import CustomBadge from '../components/CustomBadge';

const tags = ["Python", "Folium", "Pandas"]

const Biokind = () => {
  return (
    <Box pt={10} w="100%" alignContent={'center'} justifyContent={'center'} bg={'gray.50'}>
      <Box mx={5}><ReturnButton/></Box>
      <Box pt={1} alignContent={'center'} justifyContent={'center'} w="100%">
        <Flex direction={'row'} mt={10} mx={400} align={'center'} justify={'center'}> 
        <Stack direction={'column'}> 
            <Heading className='pulse-gradient' fontSize={'100px'}>Reactive Heatmap</Heading>
            <CustomBadge tags={tags} customSize={'1em'}/>
        </Stack>
        <Link href="https://sites.google.com/view/testsitecounty/home" mx={7} mt={6}><LinkIcon boxSize={'36px'}/></Link>
        <Divider orientation='vertical' height='300px' borderColor="teal.500" borderWidth="2px" mr={10} />      
        <Image
          src="images/biokind_logo.png"
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
            <Text mt={7} align={'left'} fontSize={'20px'}>This project was a group effort for a non-profit organization called Biokind Analytics. The goal of the project was to work with Red Cross Georgia and sift through data provided by them, reverting back with helpful analysis and points. My specific role in this was to work with the country of residence of all the volunteers that volunteered at a Red Cross throughtout Georgia. This led me to making a reactive heatmap that gave the user a good idea of where each volunteer came from and the population density for these counties. We were meant to present our findings through an in person presentation but due to some unforeseen events we had to cancel the presentation and just provide the data direectly to Red Cross. Overall, they were happy with the analysis we were able to provide and are going to continue with this partnership moving on. </Text>
            <Heading mt={10}color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>Tech Stack </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>
              We used the following tools, technologies and libraries to build this web appliction:
              <UnorderedList mt={2} ml={20} spacing={1} styleType={'disc'} >
                <ListItem>Python</ListItem>
                <ListItem>Folium</ListItem>
                <ListItem>Pandas</ListItem>
              </UnorderedList>
            </Text>
            <Heading mt={7} color={'black'} alignContent={'center'} justifyContent={'center'} fontSize={'50px'}>How it works? </Heading>
            <Text mt={7} align={'left'} fontSize={'20px'}>In this project, I start by reading a CSV file containing data into a DataFrame. Then, I process this data to count the occurrences for each county, storing these counts in a new DataFrame. I use a predefined dictionary to map county names to their respective latitude and longitude coordinates. Next, I prepare the data for visualization by creating a list of coordinates and their corresponding counts.
To create the map, I initialize it centered around a specific location with a default zoom level. I add a heatmap layer to show the concentration of occurrences using a color gradient, which visually represents the data density. Additionally, I incorporate markers into the map for each county, displaying the count of occurrences when clicked. Finally, I save the created map as an HTML file, which allows it to be viewed interactively in a web browser.  </Text>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
  
};

export default Biokind;

