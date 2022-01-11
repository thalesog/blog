import { Post } from ".contentlayer/types";
import Page from "components/pages/Tags";
import { getAllPostsWhichBelongToCurrentSlug } from "lib/get-posts-data";
import { getAllTags } from "lib/get-tags-data";
import pick from "lodash/pick";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

interface IProps {
  posts: Post[];
  currentTag: string;
}

const TagsListingPage: NextPage<IProps> = ({ posts, currentTag }) => {
  return <Page posts={posts} currentTag={currentTag} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const posts = getAllPostsWhichBelongToCurrentSlug(params, "tags").map(
    (posts) => pick(posts, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      posts,
      currentTag: params?.slug as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllTags().map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};

export default TagsListingPage;
