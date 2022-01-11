import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import SubTitle from "components/SubTitle";

const Jumbotron: FC = () => {
  return (
    <VStack
      w="full"
      spacing={8}
      minH="50vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading textAlign="center" as="h1" fontWeight="medium" size="xl">
        Hey, I&apos;m Thales 👋
      </Heading>
      <SubTitle />
    </VStack>
  );
};

export default Jumbotron;
