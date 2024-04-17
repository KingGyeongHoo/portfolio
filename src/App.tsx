import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";

import Navbar from "./Pages/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Intro from "./Pages/Intro/Intro";
import Competency from "./Pages/Competency/Competency";
import Project from "./Pages/Project/Project";
import { GlobalStyles } from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";

const Container = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 1350px) {
    font-size: 14px; /* 화면이 작아질 때의 너비 */
  }
  @media (max-width: 768px) {
    font-size: 12px; /* 화면이 더 작아질 때의 너비 */
  }
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>
          <section className="Main">
            <Main></Main>
          </section>
          <section>
            <Intro></Intro>
          </section>
          <section>
            <Competency></Competency>
          </section>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
