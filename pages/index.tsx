import { Post } from '.contentlayer/types';
import Page from 'components/pages/index/base/index';
import { getAllPosts } from 'lib/get-posts-data';
import { GetStaticProps, NextPage } from 'next';
import projects from 'public/data/projects.json';
import publications from 'public/data/publications.json';
import pick from 'lodash/pick';

interface IProps {
  posts: Post[];
}

const IndexPage: NextPage<IProps> = ({ posts }) => {
  return <Page posts={posts} projects={projects} publications={publications} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map((posts) =>
    pick(posts, ['date', 'description', 'title', 'slug'])
  );

  return {
    props: {
      posts,
    },
  };
};

export default IndexPage;
