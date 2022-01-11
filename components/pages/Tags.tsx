import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Post } from ".contentlayer/types";

const Posts = dynamic(
  () => import(/* webpackChunkName: "Posts" */ "components/layouts/Posts")
);

interface Props {
  posts: Post[];
  currentTag: string;
}

const Page: FC<Props> = ({ posts = [], currentTag }) => {
  const sortedPosts: Post[] = posts.sort((a: Post, b: Post) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Posts
              posts={sortedPosts}
              hideViewAllLinksNode
              currentTag={currentTag}
            />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
