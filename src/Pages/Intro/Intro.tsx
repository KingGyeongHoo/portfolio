import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes, css } from "styled-components"
import Pallete from "../../Pallete"

import IntroCard  from './Components/IntroCard';
import { Scroll } from '../Main/Components/MainFont';
import { flexCenter } from '../../Styles/GlobalStyle';

interface InfoProps{
    url:string;
}

const Intro = () => {
    // const right = Math.max(0, (window.innerHeight * 4 - useSelector((state:any) => state.scroll))/15)
    const scroll = useSelector((state:any) => state.scroll)
    const right = Math.abs((window.innerHeight * 4 - scroll)/15) < 10 ? 0 : (window.innerHeight * 4 - scroll)/15

    return (
        <InrtoContainer scroll={right}>
            <div className='con'>
                <IntroCard iconName='blog'></IntroCard>
                <IntroCard iconName='gtq'></IntroCard>
            </div>
            <div className='con'>
                <IntroCard iconName='algorithm'></IntroCard>
                <IntroCard iconName='projects'></IntroCard>
            </div>
        </InrtoContainer>
    )
}

const slideUp = keyframes`
    from {
        transform: translateY(10%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

const InrtoContainer = styled.div<Scroll>`
    position: fixed;
    top: 0;
    right: ${props => props.scroll}%;
    display: ${props => props.scroll > 100 || props.scroll < -100  ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 10%;
    /* overflow: auto; */
    &::-webkit-scrollbar {
        display: none;
    }
    background-color: ${({theme}) => theme.bgColor.intro};
    .con {
        ${flexCenter};
        flex-direction: column;
        width: 400px;
        height: 680px;
        margin: 0 1%;
        ${props => Math.abs(props.scroll) < 100 && css`animation: ${slideUp} 2s ease forwards;`}
    }
`

export const Container = styled.div<InfoProps>`
    display: flex;
    width: 100%;
    padding: 0;
    background-color: ${Pallete.main_color};
    background-image: url(${props => props.url});
    background-size: cover;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 94%;
    padding: 3% 10%;
`

export default Intro