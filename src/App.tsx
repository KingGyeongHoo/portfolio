import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";

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
`;
function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
          <section>
            <Project></Project>
          </section>
        </main>
      </ThemeProvider>
    </Container>
  );
}

export default App;
