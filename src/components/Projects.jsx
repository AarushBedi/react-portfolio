import { Box, Image, Text, SimpleGrid, Heading, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomBadge from "./CustomBadge";

const projects = [
  {
    title: "Mutuals",
    description: "Web app that simplifies the process of finding & connecting with individuals with a common interest in activities.",
    imageUrl: "images/mutuals logo.svg",
    link: "/mutuals",
    tags: ["Javascript", "React", "Firebase"]
  },
  {
    title: "Fraud Detection",
    description: "An ablation study into understanding if personal information is required when it comes to credit card fraud detection.",
    imageUrl: "images/fraud_icon.webp",
    link: "/ML",
    tags: ["Jupyter", "Machine Learning", "Python"]
  },
  {
    title: "Personal Portfolio",
    description: "A personal website portfolio built through React and Chakra UI.",
    imageUrl: "images/aarush_icon.svg",
    link: "/portfolio",
    tags: ["React", "Chakra UI"]
  },
  {
    title: "Reactive Heatmap",
    description: "Heatmap created for analysis with respect to data provided by Red Cross Georgia, through Biokind Analystics.",
    imageUrl: "images/biokind_logo.png",
    link: "/biokind",
    tags: ["Python", "Folium", "Pandas"]
  }
];

const ProjectsPanel = () => {
  return (
    <Box w='100%' bg='blue.100' display="flex" justifyContent="center" mt={-5} transform={"skewY(3deg)"}>
      <Box w='100%' align="center" justify='center' mt={-5}>
        <Box p={4} w={["90%", "85%", "75%"]} align='center' justify='center' borderRadius={'lg'} transform={"skewY(-3deg)"} bg={'white'} mx="auto" my={20}>
          <Heading as="h1" align={'center'} justify='center' size={['lg', 'xl', '2xl']} mb={4} className="pulse-gradient">My Projects</Heading>
          <Divider mb={4} align='center' justify='center' maxW={['50%', '35%', '25%']} mx="auto" borderWidth={'2px'} borderColor={'teal.500'}></Divider>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10} align={'center'} justify={'center'} w="100%">
            {projects.map((project, index) => (
              <Box
                key={index}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height={["auto", "auto", "350px"]}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                  transition: "all 0.3s ease-in-out"
                }}
              >
                <Link to={project.link} >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    borderRadius="md"
                    mb={4}
                    w="100%"
                    h={["200px", "200px", "150px"]}
                    objectFit="cover"
                    boxShadow='sm'
                  />
                  <Heading as="h3" size={["md", "lg", "lg"]} mb={2}>
                    {project.title}
                  </Heading>
                  <Text mb={2} fontSize={["sm", "md", "md"]}>{project.description}</Text>
                </Link>
                <CustomBadge tags={project.tags} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsPanel;
