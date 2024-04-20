import { createGlobalStyle, styled, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const highlight = css`
    font-weight: 900;
    color: ${({ theme }) => theme.fontColor.highlight};
`
export const Title = styled.h1`
    width: 100%;
    margin-top:2%;
  font-size: 72px;
  font-weight: 900;
  color: black;
`