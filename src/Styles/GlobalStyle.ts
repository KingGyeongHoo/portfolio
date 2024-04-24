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

export const ContentDivider = styled.div`
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    margin: 1.5% 0;
    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: 1.5% 0;
        h2{
            margin: 0 2%;
            color: black;
            font-size: 36px;
            font-weight: 900;
        }
        div{
            flex: 1;
            height: 3px;
            background-color: black;
        }
    }
    .content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        /* align-items: center; */
        width: 90%;
        height: auto;
        h3{
          font-size: 30px;
        }
        h3.name{
            ${highlight};
        }
        h3.date{
            color: ${({ theme }) => theme.fontColor.dark_gray};
        }
        div{
            width: 6px;
            height: auto;
            margin: 0 2%;
            background-color: ${({ theme }) => theme.fontColor.dark_gray};
        }
    }
    .describe{
      width: 90%;
      margin: 1.5% 0;
      p{
        text-align: left;
        font-size: 21px;
        color:${({theme}) => theme.fontColor.dark_gray};
      }
      p.describe-lines{
        margin: 1% 0;
      }
    }
`