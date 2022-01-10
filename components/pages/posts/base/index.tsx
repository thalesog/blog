import { Box, Grid, SlideFade } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { Post } from '.contentlayer/types';
import Publication from 'types/publication';

const Posts = dynamic(
  () => import(/* webpackChunkName: "Posts" */ 'components/layouts/posts')
);

interface Props {
  posts: Post[];
  publications: Publication[];
}

const Page: FC<Props> = ({ posts = [], publications = [] }) => {
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
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Posts posts={sortedAllPostsAndPublications} hideViewAllLinksNode />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
