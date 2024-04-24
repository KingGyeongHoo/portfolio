import {styled} from "styled-components"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export interface Scroll{
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

const FontDiv = styled.div<Scroll>`
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
        margin: 0;
        padding:0;
        @media(max-width: 600px){
            font-size:${props => props.scroll/1.8}px;
            overflow-wrap: break-word;
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