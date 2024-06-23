import React from 'react';
import { Flex, Box, Text, Button, Image, Heading, Stack, Link, Divider } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import ReturnButton from '../components/ReturnButton';
import CustomBadge from '../components/CustomBadge';

const tags = ["Python", "Folium", "Pandas"]

const Biokind = () => {
  return (
    <Box pt={10} w="100%" alignContent={'center'} justifyContent={'center'}>
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
          alt="Red Cross in Georgia"
          borderRadius="md"
          mb={4}
          w="400px"
          objectFit="cover"
          boxShadow="sm"
        />
        </Flex>
      </Box>
    </Box>
  );
};

export default Biokind;
