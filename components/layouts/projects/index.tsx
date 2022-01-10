import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC, FormEvent, useState } from 'react';
import Project from 'types/project';

interface Props {
  projects: Project[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg="gray.800"
          color="white"
          borderRadius="sm"
          border="none"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an project"
        />
      </Box>
    );
  };

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Projects
          </Heading>
          <Text>Open Source Projects developed and available on Github</Text>
        </VStack>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" lineHeight="tall" color="blue.400">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button fontSize="sm" bg="gray.900" _hover={{}}>
        View project
      </Button>
    );
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
        gap={8}
      >
        {sortedProjects.map((project: Project, index: number) => {
          return (
            <Box key={index} bg="gray.800" color="white" rounded="sm">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Box p={8}>
                  <VStack
                    spacing={4}
                    minH={48}
                    justifyContent="space-between"
                    align="left"
                  >
                    <VStack spacing={1} align="left">
                      {titleNode(project.title)}
                      {descriptionNode(project.description)}
                    </VStack>
                    <Box>{ctaNode()}</Box>
                  </VStack>
                </Box>
              </a>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {searchNode()}
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
