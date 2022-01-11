import {
  Text,
  Center,
  Button,
  Heading,
  SlideFade,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <SlideFade in>
      <Center minH="calc(100vh - 200px)">
        <VStack spacing={8}>
          <Heading>404</Heading>
          <Text>The page you are looking for is missing.</Text>
          <Button
            variant={"ghost"}
            leftIcon={<FaHome />}
            onClick={() => router.push("/")}
          >
            Go home
          </Button>
        </VStack>
      </Center>
    </SlideFade>
  );
};

export default NotFoundPage;
