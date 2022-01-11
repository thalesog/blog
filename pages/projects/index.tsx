import Page from "components/pages/Projects";
import { getAllProjects } from "lib/get-projects-data";
import { NextPage } from "next";
import Head from "next/head";

const ProjectsIndexPage: NextPage = () => {
  const projects = getAllProjects();

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Page projects={projects} />
    </>
  );
};

export default ProjectsIndexPage;
