import { Box, Image, Link, Text, SimpleGrid, Heading, Divider, Badge} from "@chakra-ui/react";

const projects = [
  {
    title: "Mutuals",
    description: "Web app that simplifies the process of finding & connecting with individuals with a common interest in activities.",
    imageUrl: "images/mutuals logo.svg",
    link: "https://github.com/AarushBedi/project-apollo",
    tags: ["Javascript","React","Firebase"]
  },
  {
    title: "Fraud Detection",
    description: "An ablation study into understanding if personal information is required when it comes to credit card fraud detection.",
    imageUrl: "images/fraud_icon.webp",
    link: "https://link-to-project-two.com",
    tags: ["Javascript","React","Firebase"]
  },
  {
    title: "Personal Portfolio",
    description: "A description of project three.",
    imageUrl: "images/aarush_icon.svg",
    link: "https://link-to-project-three.com",
    tags: ["Javascript","React","Firebase"]
  },
  {
    title: "Project Four",
    description: "A description of project four.",
    imageUrl: "path/to/project-four-image.png",
    link: "https://link-to-project-four.com",
    tags: ["Javascript","React","Firebase"]
  }
];

const CustomBadge = (BadgeList) => {
    list = length(BadgeList)

    return(
        <></>
    );
};

const ProjectsPanel = () => {
  return (
    <>
    <Heading as="h1" align={'center'} jusify='center' size='xl' mb={4} className="pulse-gradient">My Projects</Heading>
    <Divider mb={4} align='center' justify='center' maxW={'15%'} mx="auto" borderWidth={'2px'}borderColor={'teal.500'}></Divider>
    <Box p={4} w="100%" align='center' justify='center'>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} align={'center'} justify={'center'} w="75%">
        {projects.map((project, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
              transition: "all 0.3s ease-in-out"
            }}
          >
            <Link href={project.link} isExternal>
              <Image
                src={project.imageUrl}
                alt={project.title}
                borderRadius="md"
                mb={4}
                w="100%"
                h="200px"
                objectFit="cover"
                boxShadow='sm'
              />
              <Heading as="h3" size="lg" mb={2}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Link>
            <Badge>{project.tags[1]}</Badge>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    </>
  );
};

export default ProjectsPanel;
