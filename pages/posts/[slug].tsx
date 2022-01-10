import { Post } from '.contentlayer/types';
import Page from 'components/pages/posts/[slug]';
import { getAllPosts, getCurrentPost, getNextPosts } from 'lib/get-posts-data';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import pick from 'lodash/pick';

interface IProps {
  currentPost: Post;
  nextPosts: Post[];
}

const PostsSlugPage: NextPage<IProps> = ({ currentPost, nextPosts }) => {
  return <Page post={currentPost} nextPosts={nextPosts} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPost = getCurrentPost(params);
  const nextPosts = getNextPosts(params).map((posts) =>
    pick(posts, ['date', 'description', 'title', 'slug'])
  );

  console.log(currentPost);

  return {
    props: {
      currentPost,
      nextPosts,
    },
  };
};

export default PostsSlugPage;
