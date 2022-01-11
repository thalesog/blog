import { Box, VStack, Link } from "@chakra-ui/react";
import { FC } from "react";
import NextImage from "next/image";
import { ChakraNextImage } from "components/ChakraNextImage";

interface IProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const Image: FC<IProps> = ({ src, alt, height, width }) => {
  return (
    <Link href={src} target="_blank" rel="noopener noreferrer">
      <VStack
        rounded="md"
        shadow="md"
        bg="gray.800"
        borderRadius="md"
        mx={0}
        spacing={0}
        as="span"
      >
        <ChakraNextImage
          src={src}
          alt={alt}
          height={height}
          width={width}
          roundedTop={"md"}
        />
        <Box fontSize="sm" p={2} as="span">
          {alt}
        </Box>
      </VStack>
    </Link>
  );
};

export default Image;
