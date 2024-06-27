import { Box, Heading, Text, Link, Image, Tabs, TabList, TabPanels, Tab, TabPanel, Divider, SimpleGrid, Stack } from "@chakra-ui/react";
import '../index.css'

const CurrentPanel = () => {
    return (
        <Box h={['auto', 'auto', '350px']}>
            <Box display="inline-block" p={2} w={'100%'}>
                <Link href="https://www.nxp.com/">
                    <Image src="images/nxp_logo.svg"
                        my={4}
                        width={['80%', '70%', '350px']}
                        boxShadow="small"
                        borderRadius="lg"
                        p={4}
                        _hover={{
                            transform: "scale(1.05)",
                            shadow: 'md',
                            transition: "all 0.5s ease"
                        }} />
                </Link>
                <Text fontWeight={"bold"}> Embedded SWE Intern</Text>
                <Text>
                    May 2024 - Present <br />
                    Working on embedded compilers and debuggers such as OpenOCD and PyOCD with an emphasis on RISC-V and ARM processors. Main aim of the project is to try and make PyOCD compatible with RISC-V processors.
                </Text>
            </Box>
        </Box>
    );
};

const PreviousPanel = () => {
    return (
        <Box h={['auto', 'auto', '350px']}>
            <Stack direction={['column', 'column', 'row']} p={2} w={'100%'} align='center' justify='center'>
                <Link href="https://www.nxp.com/" mx={15}>
                    <Image src="images/nxp_logo.svg"
                        my={4}
                        width={['80%', '70%', '400px']}
                        boxShadow="small"
                        borderRadius="lg"
                        p={4}
                        _hover={{
                            transform: "scale(1.05)",
                            shadow: 'md',
                            transition: "all 0.5s ease"
                        }} />
                </Link>
                <Link href="https://www.efi.com/" mx={15}>
                    <Image src="images/EFI logo.png"
                        my={4}
                        width={['80%', '70%', '300px']}
                        boxShadow="small"
                        borderRadius="lg"
                        p={4}
                        _hover={{
                            transform: "scale(1.05)",
                            shadow: 'md',
                            transition: "all 0.5s ease"
                        }} />
                </Link>
                <Link href="https://www.pathfndr.io/" mx={15}>
                    <Image src="images/pathfndr_logo.png"
                        my={10}
                        width={['80%', '70%', '500px']}
                        boxShadow="small"
                        borderRadius="lg"
                        p={4}
                        _hover={{
                            transform: "scale(1.05)",
                            shadow: 'md',
                            transition: "all 0.5s ease"
                        }} />
                </Link>
            </Stack>
            <Text>
                Previously worked at NXP Semiconductors (May 2023 - July 2023) as a Software Development Intern where I collaborated with the Tools Devlopment Team. Furthermore, worked at EFI (May 2020 - June 2020) as a Software Development Intern and a Bangalore-based start up Pathfndr.io (June 2022 - July 2022) as a Data Science Intern.
            </Text>
        </Box>
    );
};

const EmoryPanel = () => {
    return (
        <Box p={4} w="100%" h={['auto', 'auto', '350px']}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
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
                    <Text fontWeight={'bold'}> Data Analyst</Text>
                    <Text>
                        April 2023 - Present
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
                    <Text fontWeight={'bold'}> Quantitative Trader</Text>
                    <Text>
                        Jan 2022 - July 2023
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
                    <Text fontWeight={'bold'}> Team Member</Text>
                    <Text>
                        April 2022 - Present
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
                    <Text fontWeight={'bold'}> Facilities Attendant</Text>
                    <Text>
                        Dec 2021 - Feb 2022
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
            <Divider mb={4} align='center' justify='center' maxW={'25%'} mx="auto" borderWidth={'2px'} borderColor={'teal.500'}></Divider>
            <Tabs size='lg' isFitted variant='soft-rounded' colorScheme='blue' align="center" defaultIndex={1}>
                <TabList>
                    <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Previous</Tab>
                    <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Current</Tab>
                    <Tab sx={{ mx: 1, _hover: { transform: 'scale(0.9)' } }}>Emory</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PreviousPanel />
                    </TabPanel>
                    <TabPanel>
                        <CurrentPanel />
                    </TabPanel>
                    <TabPanel>
                        <EmoryPanel />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default MyExperiences;
