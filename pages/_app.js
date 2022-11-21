import "../styles/globals.css";
import React, { useState } from "react";
import Header from "../components/header";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Footer from "../components/footer";
import ScrollButton from "../components/scrollButton";
import Gs from '../styles/theme.config'

function MyApp({ Component, pageProps }) {
  
  const [isDark, setDarkTheme] = useState(false);
  const selectedTheme = theme(isDark);

  function setTheme(flag) {
    setDarkTheme(flag);
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <section className="MainBox clearfix">
        <Gs.GlobalStyle />
        <Header isDarkTheme={isDark} setTheme={setTheme} />
        <Component {...pageProps} isDarkTheme={isDark}/>
        <Footer />
        <ScrollButton isDarkTheme={isDark} />
      </section>
    </ThemeProvider>
  );
}

export default MyApp;
