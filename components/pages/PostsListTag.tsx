import { Post } from ".contentlayer/types";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import TableOfContents from "components/TableOfContents";
import siteConfig from "config/site";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { DateTime } from "luxon";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { FaRegClock } from "react-icons/fa";
import { MdUpdate, MdDateRange, MdPerson } from "react-icons/md";
import { useRouter } from "next/router";

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const components = { Callout, img: Image };

interface IProps {
  post: Post;
  nextPosts: Post[];
}

const SocialShare = dynamic(
  () => import(/* webpackChunkName: "SocialShare" */ "components/SocialShare"),
  {
    ssr: false,
  }
);
const Posts = dynamic(
  () => import(/* webpackChunkName: "Posts" */ "components/layouts/Posts")
);

const Page: NextPage<IProps> = ({ post, nextPosts }) => {
  const router = useRouter();
  const MDXContent = useMDXComponent(post.body.code);
  const publishedMetaNode = () => {
    return (
      <>
        <HStack isInline spacing={1} alignItems="center">
          <Flex me={3} alignItems="center">
            <Icon me={1} as={MdDateRange} color="gray.400" />
            <Text fontSize="sm" fontWeight="medium">
              {DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_MED)}
            </Text>
          </Flex>
        </HStack>
      </>
    );
  };

  const tagsNode = () => {
    return (
      <HStack spacing={1} isInline alignItems="center">
        {post.tags.map((tag, index) => {
          return (
            <Button
              h={21}
              fontSize={12}
              key={index}
              href={`/tags/${tag}`}
              size="sm"
              variant={"ghost"}
              onClick={() => router.push(`/tags/${tag}`)}
              textTransform="none"
            >
              #{tag}
            </Button>
          );
        })}
      </HStack>
    );
  };

  const titleNode = () => {
    return (
      <Heading as="h1" size="2xl">
        {post.title}
      </Heading>
    );
  };

  const relatedPostsNode = () => {
    return <Posts posts={nextPosts.slice(0, 5)} heading="Related posts" />;
  };

  return (
    <SlideFade in>
      <NextSeo
        title={`${post.title}`}
        description={post.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: `${post.title}`,
          description: post.description,
          images: [
            {
              url: `https://cover-images.vercel.app/api?postTitle=${post.title}&postDescription=${post.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.details.url}${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
              width: 1200,
              height: 675,
              alt: post.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "post",
          locale: "en_US",
        }}
      />
      <Box>
        <Box maxW={["2xl", "2xl", "2xl", "6xl"]} mx="auto" py={8} px={4}>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]}
            gridGap={[0, 0, 0, 24]}
          >
            <Box maxW="100%" overflowX="hidden">
              <VStack spacing={8} align="left">
                <VStack spacing={2} align="left">
                  {titleNode()}
                  <HStack justifyContent="space-between">
                    {publishedMetaNode()}
                    {tagsNode()}
                  </HStack>
                </VStack>
                <Box className="article">
                  <MDXContent components={components} />
                </Box>
                <Box pt={12}>{relatedPostsNode()}</Box>
              </VStack>
            </Box>
            <VStack
              spacing={8}
              pos="sticky"
              top={8}
              h="80vh"
              overflow="auto"
              display={["none", "none", "none", "block"]}
            >
              <TableOfContents source={post.body.raw} />
              <SocialShare title={post.title} />
            </VStack>
          </Grid>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Page;
