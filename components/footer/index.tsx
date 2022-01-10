import {
  Box,
  Divider,
  HStack,
  IconButton,
  Link as _Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

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
                variant="ghost"
                aria-label="GitHub"
                icon={<FaGithub />}
              />
              <IconButton
                variant="ghost"
                aria-label="Twitter"
                icon={<FaTwitter />}
              />
              <IconButton
                variant="ghost"
                aria-label="E-mail"
                icon={<CgMail />}
              />
            </HStack>
            <Text p={4} textAlign="center">
              Copyright &copy; {new Date().getFullYear()} Thales Ogliari
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default SocialLinks;
