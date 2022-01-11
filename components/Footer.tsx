import {
  Box,
  Divider,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const SocialLinks: FC = () => {
  return (
    <>
      <Divider />
      <Box p={4} as="footer">
        <Box maxW="6xl" mx="auto" fontSize="sm">
          <VStack
            d="flex"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <HStack>
              <IconButton
                as="a"
                href="https://github.com/thalesog"
                variant="ghost"
                aria-label="GitHub"
                icon={<FaGithub />}
              />
              <IconButton
                as="a"
                href="https://twitter.com/thalesog"
                variant="ghost"
                aria-label="Twitter"
                icon={<FaTwitter />}
              />
              <IconButton
                as="a"
                href="mailto:just@thog.me"
                variant="ghost"
                aria-label="E-mail"
                icon={<CgMail />}
              />
            </HStack>
            <Text p={4} textAlign="center">
              &copy; {new Date().getFullYear()} Thales Ogliari
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default SocialLinks;
