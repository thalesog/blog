import { Box, SlideFade, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import Project from 'types/project';
import Publication from 'types/publication';
import { Post } from '.contentlayer/types';

const Jumbotron = dynamic(
  () =>
    import(
      /* webpackChunkName: "Jumbotron" */ 'components/pages/index/base/jumbotron'
    )
);
const Posts = dynamic(
  () => import(/* webpackChunkName: "Posts" */ 'components/layouts/posts')
);
const Projects = dynamic(
  () =>
    import(
      /* webpackChunkName: "Projects" */ 'components/pages/index/base/projects'
    )
);

interface Props {
  posts: Post[];
  publications: Publication[];
  projects: Project[];
}

const Page: FC<Props> = ({ posts = [], publications = [], projects = [] }) => {
  const allPostsAndPublications = [...posts, ...publications] as (Post &
    Publication)[];

  const sortedAllPostsAndPublications: (Post & Publication)[] =
    allPostsAndPublications.sort(
      (a: Post & Publication, b: Post & Publication) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      }
    );

  return (
    <SlideFade in>
      <Box
        as="section"
        d="flex"
        alignItems="center"
        maxW="2xl"
        mx="auto"
        px={4}
      >
        <Jumbotron />
      </Box>
      <Box>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <VStack spacing={32} order={[2, 2, 2, 1]} align="left">
            <Box as="section">
              <Posts posts={sortedAllPostsAndPublications.slice(0, 10)} />
            </Box>
            <Box as="section" pb={32}>
              <Projects projects={projects.slice(0, 10)} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Page;
