import {
  Avatar,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import LogoThog from "components/LogoThog";
import React, { FC } from "react";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <VStack spacing={4} alignItems="center">
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Avatar
            src={"http://github.com/thalesog.png"}
            alt="Thales Ogliari"
            height={100}
            width={100}
            quality={100}
            priority
            placeholder="blur"
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left"></VStack>
        </Box>
      </VStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text textAlign="center">
          <Heading fontWeight="bold" textAlign="center">
            Hi 👋
          </Heading>
          <Heading as="h1" size="xl" textAlign="center">
            I{"'"}m Thales Ogliari
          </Heading>
          a developer from Brazil 🇧🇷
        </Text>
        <Text>
          <Text fontWeight={"bold"}>The beginning</Text>
          Since I was a child, always loved to disassemble electronics, format,
          and customize computers to see how it{"'"}s done by the inside, over
          time the toys begin to get bigger, and I started to work in an
          internet provider.
          <Text fontWeight={"bold"}>MKANET</Text>
          In November 2014 I started to work in MKANET Telecom, first as a
          Customer Support, then in the Network Operation Center, and finally
          the CGR, or, Network Management Center (here in Brazil, the CGR runs
          the entire network), where I learned much about how the networking
          really works, using technologies like BGP, OSPF, MPLS, PPP, IPsec, and
          others, we maintain a fiber optics/wireless ISP.
          <Text fontWeight={"bold"}>The Switch</Text>
          After 6 years as a network engineer, I received the opportunity to
          change to the development realm, that is the place I work today as a
          full-stack engineer in a company that provides technologies to banks
          and fintech, including all the backend to the new Brazilian instant
          payment method Pix.
          <Text fontWeight={"bold"}>Current Stack</Text>
          Today my main development language is JavaScript, using tools like
          NodeJS, React, PostgreSQL, Docker, Terraform, I manage to build entire
          applications, from the frontend to the deployment pipeline that runs
          inside the repository.
          <Text fontWeight={"bold"}>Daily Basis</Text>I think as a technology
          passionate, my duty is always be in the search of innovation, using
          development to create and improve products around the world.
        </Text>
      </Box>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={4} align="left">
            {headingNode()}
            {bioDescriptionNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
