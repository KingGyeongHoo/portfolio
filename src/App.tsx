import React from 'react';
import './App.css';
import { useState } from "react"
import styled from "styled-components"

import Navbar from './Pages/Navbar/Navbar';
import Main from './Pages/Main/Main';
import Info from './Pages/Info/Info';

interface ContainerProps{
  fontsize: number;
}
const Container = styled.div<ContainerProps>`
    flex-direction: column;
    width: 100%;
    padding: 0;
    font-size: ${props => props.fontsize}px;
`
function App() {
  const [fontSize, setFontSize] = useState<number>(Math.floor(window.innerWidth/120))
    window.addEventListener('resize', () => {
        setFontSize(Math.floor(window.innerWidth/120))
      });

  return (
    <Container fontsize={fontSize}>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Container fontsize={fontSize}>
          <Main></Main>
          <Info></Info>
        </Container>
      </main>
    </Container>
    
  );
}

export default App;
