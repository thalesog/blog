import { Avatar, Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import SubTitle from "components/SubTitle";
import LogoThog from "components/LogoThog";

const Jumbotron: FC = () => {
  return (
    <VStack
      w="full"
      spacing={8}
      minH="65vh"
      justifyContent="center"
      alignItems="center"
    >
      <VStack rounded="full" p={6} spacing={4} alignItems="center">
        <LogoThog fill="blue.300" w={20} h={20} />
      </VStack>
      <Heading textAlign="center" as="h1" fontWeight="medium" size="xl">
        Hey, I&apos;m Thales 👋
      </Heading>
      <Divider />
      <SubTitle />
    </VStack>
  );
};

export default Jumbotron;
