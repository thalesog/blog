import { Post } from ".contentlayer/types";
import Page from "components/pages/PostsList";
import { getAllPosts } from "lib/get-posts-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import publications from "public/data/publications.json";
import pick from "lodash/pick";

interface IProps {
  posts: Post[];
}

const PostsIndexPage: NextPage<IProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Page posts={posts} publications={publications} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map((posts) =>
    pick(posts, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      posts,
    },
  };
};

export default PostsIndexPage;
