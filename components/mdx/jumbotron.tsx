import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoLogoGithub, IoMdEye } from "react-icons/io";

interface IProps {
  description: string;
  githubLink: string;
  demoLink: string;
}

const Jumbotron: FC<IProps> = ({ description, githubLink, demoLink }) => {
  const githubButtonNode = () => {
    if (!githubLink) {
      return false;
    }

    return (
      <Link
        py={2}
        px={4}
        href={githubLink}
        rounded="md"
        bg="gray.600"
        color="white"
        fontWeight="bold"
        isExternal
        textDecoration="none"
      >
        <HStack spacing={2} alignItems="center">
          <Box as={IoLogoGithub} />
          <Box>View source</Box>
        </HStack>
      </Link>
    );
  };

  const demoButtonNode = () => {
    if (!demoLink) {
      return false;
    }

    return (
      <Link
        py={2}
        px={4}
        href={demoLink}
        rounded="md"
        bg="blue.600"
        color="white"
        fontWeight="bold"
        isExternal
      >
        <HStack spacing={2} alignItems="center">
          <Box as={IoMdEye} />
          <Box>View demo</Box>
        </HStack>
      </Link>
    );
  };

  return (
    <VStack
      spacing={0}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pb={12}
    >
      <Box>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            {githubButtonNode()}
            {demoButtonNode()}
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
