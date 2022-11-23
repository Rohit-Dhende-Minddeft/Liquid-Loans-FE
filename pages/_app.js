import "../styles/globals.css";
import React, { useState } from "react";
import Header from "../components/header";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Footer from "../components/footer";
import ScrollButton from "../components/scrollButton";
import Gs from "../styles/theme.config";
import { getCategories } from "./api/blogs";
import { AppWrapper } from "../context/state";

export const getServerSideProps = async () => {
  const categories = await getCategories();
  return {
    props: { categories },
  };
};

function MyApp({ Component, pageProps }) {
  const [isDark, setDarkTheme] = useState(false);
  const selectedTheme = theme(isDark);

  function setTheme(flag) {
    setDarkTheme(flag);
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <Gs.GlobalStyle />
      <AppWrapper>
        <section className="MainBox clearfix">
          <Header
            isDarkTheme={isDark}
            setTheme={setTheme}
            categories={pageProps.categories}
          />
          <Component
            {...pageProps}
            isDarkTheme={isDark}
            categories={pageProps.categories}
          />
          <Footer />
          <ScrollButton isDarkTheme={isDark} />
        </section>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
