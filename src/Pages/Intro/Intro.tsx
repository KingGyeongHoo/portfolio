import { useSelector } from 'react-redux';
import styled, { keyframes, css } from "styled-components"

import IntroCard  from './Components/IntroCard';
import { Scroll } from '../Main/Components/MainFont';
import { flexCenter } from '../../Styles/GlobalStyle';

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
    background-color: ${({theme}) => theme.bgColor.intro};
    z-index: 10;
    .con {
        ${flexCenter};
        flex-direction: column;
        width: 400px;
        height: 680px;
        margin: 0 1%;
        ${props => Math.abs(props.scroll) < 100 && css`animation: ${slideUp} 2s ease forwards;`}
    }
`

export default Intro