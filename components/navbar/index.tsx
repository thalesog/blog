import { Box, Button, HStack, Link as _Link, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/posts',
    title: 'Blog',
  },
  {
    url: '/projects',
    title: 'Projects',
  },
];

const Navbar: FC = () => {
  const router = useRouter();
  const menuNode = () => {
    return (
      <HStack isInline spacing={4} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            const isActive =
              (link.url !== '/' && router.pathname.startsWith(link.url)) ||
              link.url === router.pathname
                ? 'solid'
                : 'ghost';
            return (
              <Button
                key={link.url}
                variant={isActive}
                onClick={() => router.push(link.url)}
              >
                {link.title}
              </Button>
            );
          }),
        ]}
      </HStack>
    );
  };

  return (
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="blue.400">
      <Box maxW="6xl" mx="auto" px={4}>
        <VStack
          justifyContent="center"
          alignItems="center"
          py={4}
          gridGap={[4, 4, 0]}
        >
          {menuNode()}
        </VStack>
      </Box>
    </Box>
  );
};

export default Navbar;
