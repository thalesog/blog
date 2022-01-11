import { Page } from ".contentlayer/types";
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
  page: Page;
}

const Page: NextPage<IProps> = ({ page }) => {
  const MDXContent = useMDXComponent(page.body.code);

  return (
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <VStack spacing={8} align="left">
              <Box className="article">
                <MDXContent components={components} />
              </Box>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
