import "@fontsource/inter";
import "@fontsource/fira-code";
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Thales Ogliari" />
        <meta name="application-name" content="Thales Ogliari" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
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
              url: `${siteConfig.details.url}`, //${siteConfig.assets.avatar}
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
