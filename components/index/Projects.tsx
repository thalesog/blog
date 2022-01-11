import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import Project from "types/project";

interface Props {
  projects: Project[];
  hideViewAllLinksNode?: boolean;
}

const Projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Button
        size="sm"
        variant="ghost"
        color="gray.300"
        rightIcon={<FaArrowRight />}
        onClick={() => router.push("/projects")}
      >
        View all
      </Button>
    );
  };

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl" color="gray.300">
          Projects
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="brand.400" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const projectsNode = () => {
    return projects.map((project: Project, index: number) => {
      return (
        <Box key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <VStack spacing={1} align="left">
              {titleNode(project.title)}
              {descriptionNode(project.description)}
            </VStack>
          </a>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
