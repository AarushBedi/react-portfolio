import { Box, Heading, Text, Link, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, SimpleGrid} from "@chakra-ui/react";
import '../index.css'

const CurrentPanel = () => {
    return (
        <>
        <Box display="inline-block" p={2} w={'100%'}>
        <Link href="https://www.nxp.com/"> 
            <Image src="images/nxp_logo.svg"
            my={4}
            width="350px"
            boxShadow="small"
            borderRadius="lg"
            p={4}
            _hover={{
            transform: "scale(1.05)",
            shadow: 'md',
            transition: "all 0.5s ease"
            }}/>
        </Link>
        <Text> 
        Embedded SWE Intern <br/>
        Working on RISC-V and ARM Processors
        </Text>
    </Box>
        </>
    );
};

const PreviousPanel = () => {
    return (
        <>
        <Box display="inline-block" p={2} w={'100%'}>
            <Link href="https://www.nxp.com/"> 
                <Image src="images/nxp_logo.svg"
                my={4}
                width="350px"
                boxShadow="small"
                borderRadius="lg"
                p={4}
                _hover={{
                transform: "scale(1.05)",
                shadow: 'md',
                transition: "all 0.5s ease"
                }}/>
            </Link>
            <Text> 
            SWE Intern @ NXP<br/>
            </Text>
            <Link href="https://www.efi.com/">
            <Image src="images/efi.gif"
                my={4}
                width="350px"
                boxShadow="small"
                borderRadius="lg"
                p={4}
                _hover={{
                transform: "scale(1.05)",
                shadow: 'md',
                transition: "all 0.5s ease"
                }}/>
            </Link>
            <Text>
                SWE Intern @ EFI
            </Text>
            <Link href="https://www.pathfndr.io/">
            <Image src="images/pathfndr_logo.png"
                my={10}
                width="400px"
                boxShadow="small"
                borderRadius="lg"
                p={4}
                _hover={{
                transform: "scale(1.05)",
                shadow: 'md',
                transition: "all 0.5s ease"
                }}/>
            </Link>
            <Text>
                Data Science Intern @ Pathfndr
            </Text>
        </Box>
        </>
    );
};

const EmoryPanel = () => {
    return(
        <Box p={4} w="100%">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                <Box alignContent="center" justify='center'>
                    <Link href="https://www.biokind.org/"> 
                        <Image
                            src="images/biokind_logo.png"
                            my={4}
                            width="100%"
                            boxShadow="sm"
                            borderRadius="lg"
                            p={4}
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: 'md',
                                transition: "all 0.5s ease"
                            }}
                        />
                    </Link>
                    <Text> 
                        Data Analyst<br/>
                    </Text>
                </Box>
                <Box alignContent="center">
                    <Link href="https://www.algorycapital.com/">
                        <Image
                            src="images/algory_logo.jpeg"
                            my={4}
                            width="100%"
                            boxShadow="sm"
                            borderRadius="lg"
                            p={4}
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: 'md',
                                transition: "all 0.5s ease"
                            }}
                        />
                    </Link>
                    <Text>
                        Quantitative Trader
                    </Text>
                </Box>
                <Box alignContent="center">
                    <Link href="https://www.instagram.com/emorycs/">
                        <Image
                            src="images/ecs_logo.webp"
                            my={4}
                            width="100%"
                            boxShadow="sm"
                            borderRadius="lg"
                            p={4}
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: 'md',
                                transition: "all 0.5s ease"
                            }}
                        />
                    </Link>
                    <Text>
                        Crypto/Web3 Team member
                    </Text>
                </Box>
                <Box alignContent="center">
                    <Link href="https://recwell.emory.edu/facilities/wpec.html">
                        <Image
                            src="images/emory.png"
                            my={4}
                            width="100%"
                            boxShadow="sm"
                            borderRadius="lg"
                            p={4}
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: 'md',
                                transition: "all 0.5s ease"
                            }}
                        />
                    </Link>
                    <Text>
                        Facilities Attendant
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

const MyExperiences = () => {
  return (
    <Box borderRadius={"lg"} w={"75%"} p={'6'} mx={'auto'} mt={8}> 
        <Heading as="h1" align={'center'} jusify='center' size='xl' mb={4} className="pulse-gradient">My Experience</Heading>
        <Divider mb={4} align='center' justify='center' maxW={'25%'} mx="auto" borderWidth={'2px'}borderColor={'teal.500'}></Divider>
        <Tabs size='lg' isFitted variant='soft-rounded' colorScheme='blue' align="center" defaultIndex={1}>
            <TabList>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Previous</Tab>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }} >Current</Tab>
                <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Emory</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <PreviousPanel/>
                </TabPanel>
                <TabPanel>
                    <CurrentPanel/>
                </TabPanel>
                <TabPanel>
                    <EmoryPanel/>
                </TabPanel>
            </TabPanels>
            </Tabs>
    </Box>
  );
};

export default MyExperiences;
