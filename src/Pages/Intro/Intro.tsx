import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Title from "./Components/Title";
import Information from './Components/Information';
import Text from './Components/Text';
import { Scroll } from '../Main/Components/MainFont';

interface InfoProps{
    url:string;
}

const Intro = () => {
    const right = Math.max(0, (window.innerHeight * 4 - useSelector((state:any) => state.scroll))/15)
    console.log(right)

    return (
        <InrtoContainer scroll={right}>
            
        </InrtoContainer>
    )
}

const InrtoContainer = styled.div<Scroll>`
    position: fixed;
    top: 0;
    right: ${props => props.scroll}%;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.bgColor.intro};
    transition: right 0.5s ease-in-out;
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