import { Avatar, Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
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
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Thales Ogliari
            </Heading>
          </VStack>
        </Box>
      </VStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
          mattis libero. Donec eget fringilla orci, sed mattis justo. Aliquam
          feugiat nisi nec ligula dapibus lobortis. Morbi mattis nulla non magna
          pellentesque, condimentum gravida purus vehicula. Sed sed pellentesque
          metus, vel ultrices augue. Morbi eu magna aliquam, viverra sem non,
          molestie leo.
        </Text>
        <Text>
          Etiam eget dapibus lorem. Vestibulum hendrerit arcu et sem venenatis,
          sit amet fringilla elit ornare. In gravida, velit sit amet pulvinar
          consectetur, ligula ipsum tempus ligula, sit amet imperdiet eros lacus
          ut neque.
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
