import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

import Main from "./Pages/Main/Main";
import Loading from "./Pages/Main/Components/Loading";
import Competency from "./Pages/Competency/Competency";
import Project from "./Pages/Project/Project";
import { GlobalStyles } from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // 3초 후 애니메이션 시작
    const timer = setTimeout(() => {
      setIsAnimating(true);

      // 1초 뒤에 display: none 적용
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>
          <Loading isAnimating={isAnimating} isHidden={isHidden} />
          <section className="Main">
            <Main />
          </section>
          <section>
            <Competency />
          </section>
          <section>
            <Project />
          </section>
        </main>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 16px;
`;

export default App;
