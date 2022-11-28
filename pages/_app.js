import '../styles/globals.css';
import React, { useState } from 'react';
import Header from '../components/header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Footer from '../components/footer';
import ScrollButton from '../components/scrollButton';
import Gs from '../styles/theme.config';
import { getCategories } from './api/blogs';
import Head from 'next/head';
export const getServerSideProps = async () => {
  const categories = await getCategories();
  return {
    props: { categories },
  };
};

function MyApp({ Component, pageProps }) {
  const [isDark, setDarkTheme] = useState(false);
  const selectedTheme = theme(isDark);

  const [category, setCategories] = useState([]);
  function setTheme(flag) {
    setDarkTheme(flag);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <title>Liquid Loans – 0% DeFi lending on PulseChain</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling "
        />
        <meta
          name="description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="google-site-verification"
          content="tFM5T7kMGqGaqNMe8Cs6EvJ8PZrT45_9bncFeILmOKA"
        />
        <link rel="canonical" href="https://liquidloans.io" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />

        <meta property="og:url" content="https://liquidloans.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling"
        />
        <meta
          property="og:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          property="og:image"
          content=" https://liquidloans.io/images/liquidloans.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling"
        />
        <meta name="twitter:url" content="https://liquidloans.io/" />
        <meta
          name="twitter:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="twitter:image"
          content="https://liquidloans.io/images/liquidloans.jpg"
        />
      </Head>
      <ThemeProvider theme={selectedTheme}>
        <Gs.GlobalStyle />
        <section className="MainBox clearfix">
          <Header
            isDarkTheme={isDark}
            setTheme={setTheme}
            categories={category}
          />
          <Component
            {...pageProps}
            isDarkTheme={isDark}
            setCategories={(value) => {
              setCategories(value);
            }}
          />
          <Footer />
          <ScrollButton isDarkTheme={isDark} />
        </section>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
