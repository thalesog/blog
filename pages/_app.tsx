import "@fontsource/inter";
import { Box } from "@chakra-ui/react";
import siteConfig from "config/site";
import { initGA } from "lib/google-analytics";
import isProduction from "lib/is-production";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";

const MainLayout = dynamic(
  () =>
    import(/* webpackChunkName: "MainLayout" */ "components/layouts/MainLayout")
);
const Navbar = dynamic(
  () => import(/* webpackChunkName: "Navbar" */ "components/Navbar")
);
const Footer = dynamic(
  () => import(/* webpackChunkName: "Footer" */ "components/Footer")
);

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (isProduction) {
      initGA(process.env.NEXT_PUBLIC_GA);
    }
  }, []);

  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
      </Head>
      <NextSeo
        title={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          site: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: siteConfig.details.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "website",
          locale: "en_US",
        }}
      />
      <Navbar />
      <Box minH="calc(100vh - 77px - 148px)">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </MainLayout>
  );
};

export default PortfolioApp;
