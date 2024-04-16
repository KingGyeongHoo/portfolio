import {styled, keyframes} from "styled-components"
import { useState, useEffect } from "react";
import { flexCenter } from "../../../Styles/GlobalStyle";
interface Font{
    fontSize:number;
}

export const MainFont = () => {
    const [fontSize, setFontSize] = useState(64)
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          console.log(scrollTop)
          // 스크롤을 아래로 내릴수록 글자를 크게 만듭니다.
          setFontSize(64 + scrollTop*2); // 10은 조절 가능한 스크롤 속도입니다.
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [])
    return (
        <FontDiv fontSize={fontSize}>
            <h1 className='empty'>HI, I'M</h1>
            <h1 className='empty'>FRONTEND</h1>
            <h1 className='empty'>DEVELOPER</h1>
            <h1 className='fill'>SONG GYEONG HOO</h1>
        </FontDiv>
    )
}

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0);
  }
`;

const FontDiv = styled.div<Font>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.fontSize < 1400 ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    /* animation: ${moveUpDown} 2s ease-in-out infinite; */
    /* transition: font-size 0.5s ease; */
    font-size:${props => props.fontSize}px;
    overflow: hidden;
    h1{
        /* line-height: ${props => props.fontSize + 25}px; */
        margin: 0;
        padding:0;
        @media(max-width: 600px){
            font-size: 4em;
            line-height: 50px;
        }
        font-weight: 900;
        white-space: nowrap;
    }
    h1.empty {
        color: ${({ theme }) => theme.bgColor.main};
        text-shadow: 
        -2px -2px 0 #000,  
        2px -2px 0 #000,
        -2px  2px 0 #000,
        2px  2px 0 #000,
        -2px -1px 0 #000,  
        2px -1px 0 #000,
        -1px  2px 0 #000,
        1px  2px 0 #000;
        @media(max-width: 600px){
            text-shadow: 
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000,
        }
    }
    h1.fill {
        color: black;
    }
`