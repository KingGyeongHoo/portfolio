import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import { IntroCard } from './Components/IntroCard';
import { Scroll } from '../Main/Components/MainFont';
import { flexCenter } from '../../Styles/GlobalStyle';

interface InfoProps{
    url:string;
}

const Intro = () => {
    const right = Math.max(0, (window.innerHeight * 4 - useSelector((state:any) => state.scroll))/15)
    console.log(right)

    return (
        <InrtoContainer scroll={right}>
            <div className='con'>
                <IntroCard></IntroCard>
                <IntroCard></IntroCard>
            </div>
            <div className='con'>
                <IntroCard></IntroCard>
                <IntroCard></IntroCard>
            </div>
        </InrtoContainer>
    )
}

const InrtoContainer = styled.div<Scroll>`
    position: fixed;
    top: 0;
    right: ${props => props.scroll}%;
    display: ${props => props.scroll > 100 ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 10%;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    background-color: ${({theme}) => theme.bgColor.intro};
    .con {
        ${flexCenter};
        flex-direction: column;
        width: 30%;
        height: 100%;
        border: 1px solid red;
        &:nth-child(2){
            margin-top: 20%;
        }
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