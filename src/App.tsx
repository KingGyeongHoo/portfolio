import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "./Pages/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Info from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Project from "./Pages/Project/Project";

const Container = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0;
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
    <Container>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <section className="Main">
          <Main></Main>
        </section>
        <section className="About">
          <Info></Info>
        </section>
        <section className="Skills">
          <Skills></Skills>
        </section>
        <section className="Projects">
          <Project></Project>
        </section>
      </main>
    </Container>
  );
}

export default App;
