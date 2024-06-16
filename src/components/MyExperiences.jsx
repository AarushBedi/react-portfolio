import { Box, Heading, Text, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Divider} from "@chakra-ui/react";

const CurrentPanel = () => {
    return (
        <>
        <Image src='images/nxp_logo.svg' my={'4'} width={'450px'} boxShadow={'md'} borderRadius={'lg'}/></>
    );
};

const PreviousPanel = () => {
    return (
        <>
            <Image src='images/nxp_logo.svg' my={'4'} width={'450px'} boxShadow={'md'} borderRadius={'lg'}/>
            <Image src='images/efi.gif' my={'4'} width={'450px'} boxShadow={'md'} borderRadius={'lg'}/>

        </>
    );
};

const MyExperiences = () => {
  return (
    <Box borderRadius={"lg"} w={"75%"} p={'6'} mx={'auto'}> 
        <Heading as="h1" align={'center'} jusify='center' size='xl' mb={4} className="pulse-gradient">My Experience</Heading>
        <Divider mb={4} align='center' justify='center' maxW={'25%'} mx="auto" borderWidth={'2px'}borderColor={'teal.500'}></Divider>
        <Tabs size='lg' isFitted variant='soft-rounded' colorScheme='blue' align="center">
            <TabList>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Current</Tab>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Previous</Tab>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Emory</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <CurrentPanel/>
                </TabPanel>
                <TabPanel>
                    <PreviousPanel/>
                </TabPanel>
            </TabPanels>
            </Tabs>
    </Box>
  );
};

export default MyExperiences;
