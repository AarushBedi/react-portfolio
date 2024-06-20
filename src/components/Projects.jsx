import { Box, Image, Link, Text, SimpleGrid, Heading } from "@chakra-ui/react";

const projects = [
  {
    title: "Project One",
    description: "A description of project one.",
    imageUrl: "path/to/project-one-image.png",
    link: "https://link-to-project-one.com"
  },
  {
    title: "Project Two",
    description: "A description of project two.",
    imageUrl: "path/to/project-two-image.png",
    link: "https://link-to-project-two.com"
  },
  {
    title: "Project Three",
    description: "A description of project three.",
    imageUrl: "path/to/project-three-image.png",
    link: "https://link-to-project-three.com"
  },
  {
    title: "Project Four",
    description: "A description of project four.",
    imageUrl: "path/to/project-four-image.png",
    link: "https://link-to-project-four.com"
  }
];

const ProjectsPanel = () => {
  return (
    <Box p={4} w="100%">
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
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
              />
              <Heading as="h3" size="lg" mb={2}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsPanel;
