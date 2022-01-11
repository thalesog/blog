import { Page } from ".contentlayer/types";
import PageLayout from "components/layouts/Page";
import { getAllPages, getCurrentPage, getNextPages } from "lib/get-page-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IProps {
  currentPage: Page;
}

const PagesSlugPage: NextPage<IProps> = ({ currentPage }) => {
  return <PageLayout page={currentPage} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllPages().map((page) => {
      return {
        params: {
          page: page.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = getCurrentPage(params);

  return {
    props: {
      currentPage,
    },
  };
};

export default PagesSlugPage;
