import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Link as _Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { FC, FormEvent, useState } from 'react';
import Publication from 'types/publication';
import { Post } from '.contentlayer/types';
import router from 'next/router';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
  posts: (Post & Publication)[] | Post[];
  hideViewAllLinksNode?: boolean;
  currentTag?: string;
  currentCategory?: string;
  heading?: string;
}

const Posts: FC<Props> = ({
  posts = [],
  hideViewAllLinksNode = false,
  currentTag,
  currentCategory,
  heading,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = posts
    .sort(
      (a: Post & Publication, b: Post & Publication) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((post: Post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Button
        size="sm"
        variant="ghost"
        color="gray.300"
        rightIcon={<FaArrowRight />}
        onClick={() => router.push('/posts')}
      >
        View all
      </Button>
    );
  };

  const searchNode = () => {
    if (!hideViewAllLinksNode) return false;

    return (
      <Box>
        <Input
          bg="gray.800"
          color="white"
          borderRadius="sm"
          border="none"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an post"
        />
      </Box>
    );
  };

  const headingNode = () => {
    if (!!currentTag) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Posts
          </Heading>
          <Text>Posts tagged with &quot;{currentTag}&quot;</Text>
        </VStack>
      );
    }

    if (!!currentCategory) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Posts
          </Heading>
          <Text>
            Posts which belong to the &quot;{currentCategory}&quot; category
          </Text>
        </VStack>
      );
    }

    if (!!heading) {
      return (
        <Heading as="h2" size="lg">
          {heading}
        </Heading>
      );
    }

    if (hideViewAllLinksNode) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Posts
          </Heading>
        </VStack>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl" color="gray.300">
          Posts
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string) => {
    return (
      <Box>
        <Text fontSize="sm" color="gray.400">
          {DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}
        </Text>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const postsNode = () => {
    if (!sortedPosts.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No posts found!</Text>
        </VStack>
      );
    }

    return sortedPosts.map((post: Post & Publication, index) => {
      if (!post.slug) {
        return (
          <Box key={index}>
            <a
              href={post.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Box>
                <VStack spacing={1} align="left">
                  {metaNode(post.date)}
                  {titleNode(post.title)}
                  {descriptionNode(post.description)}
                </VStack>
              </Box>
            </a>
          </Box>
        );
      }

      return (
        <Box key={index}>
          <Link href={`/posts/${post.slug}`} passHref>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  <HStack w="full" justifyContent="space-between">
                    {titleNode(post.title)}
                    {metaNode(post.date)}
                  </HStack>
                  {descriptionNode(post.description)}
                </VStack>
              </Box>
            </a>
          </Link>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {searchNode()}
      {postsNode()}
    </VStack>
  );
};

export default Posts;
