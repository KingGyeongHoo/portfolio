import {styled, keyframes} from "styled-components"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export interface Font{
    scroll:number;
}

export const MainFont = () => {
    const dispatch = useDispatch()
    const scroll = useSelector((state:any) => state.scroll)
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          dispatch (
                {
                    type: 'SCROLL',
                    scrollAmt: (scrollTop*2)
                }
            )
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [])
    return (
        <FontDiv scroll={scroll+64}>
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
    display: ${props => props.scroll < 1400 ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size:${props => props.scroll}px;
    overflow: hidden;
    h1{
        /* line-height: ${props => props.scroll + 25}px; */
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