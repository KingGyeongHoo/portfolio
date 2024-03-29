import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Pallete from "../../../Pallete";
import { InfoData, LinkData, Link } from "../../../Data/InfoData";

interface Hovered {
    hover?: boolean;
}

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const fadeChange = keyframes`
    0% {
        opacity: 0;
    }
    99% {
        opacity: 1;
    }
`;
export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`; 

const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
`
const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 400px;
    height: 400px;
    margin-right: 2%;
    &::before{
        content:'';
        position: absolute;
        top: 5%;
        left: 5%;
        width: 320px; 
        height: 320px; 
        border: 5px solid white;
        z-index: 5; /* 이미지 위에 레이어를 올릴 때 z-index 설정 */
    }
    &::after{
        content:'';
        position: absolute;
        bottom: 5%;
        right: 5%;
        width: 320px; 
        height: 320px; 
        border: 5px solid white;
        z-index: 5; /* 이미지 위에 레이어를 올릴 때 z-index 설정 */
    }
`
const Image = styled.img`
    position: relative;
    width: 320px;
    height: auto;
    z-index: 10;
`;

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 700px;
    @media (max-width: 850px) {
        width: 400px; /* 화면이 작아질 때의 너비 */
    }
`

const InfoDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 1.25% 0%;
    background-color: rgba(255,255,255,1);
    opacity: 1;
    z-index: 50;
    &:last-child{
        margin-bottom: 0;
    }
    &::after{
        content:'';
        position: absolute;
        top: 10%;
        left: 1%;
        width: 100%;
        height: 60px;
        background-color: rgba(0,0,0,0);
        border: 3px solid #ffffff;
        z-index: 5;
    }
`
const Index = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 15%;
    height: 100%;
    margin-left: 5%;
`
const IndexSpan = styled.span`
    width: 100%;
    color: ${Pallete.main_color};
    font-size: 1.5em;
    font-weight: 900;
    white-space: pre-wrap;
`
const Content = styled(Index)`
    justify-content: flex-start;
    width: 60%;
    margin-left: 10%;
    color: #000000;
    z-index: 100;
    white-space: pre-wrap;
`
const ContentSpan = styled(IndexSpan)<Hovered>`
    color: #000000;
    font-weight: 200;
    z-index: 100;
    animation: ${props => props.hover ? css`${fadeIn} 0.5s linear forwards` : css`${fadeChange} 0.5s linear forwards`};
`
const Links = styled.div`
    width: 315px;
    height: 400px;
    margin: 1% 0 1% 4%;
`
const LinkSpanDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 10%;
`
const LinkSpan = styled.span`
    font-size: 2em;
    font-weight: 900;
    color: #ffffff;
`
const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 90%;
    border: 3px solid #ffffff;
    border-radius: 20px;
    background-color: ${Pallete.main_color};
`
const LinkContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 30%;
    cursor: pointer;
`
const LinkIcon = styled.img`
    width: 65px;
    margin: 2%;
`
const LinkDescDiv = styled.div<Hovered>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 2%;
    background-color: #ffffff;
    border-radius: 30px;
    opacity: 0;
    animation: ${props => props.hover ? css`${fadeIn} 0.3s linear forwards` : css`${fadeOut} 0.3s linear forwards`};
`
const LinkDesc = styled.span`
    color: #000000;
    font-weight: 700;
`

const Information = () => {
    const [hover, setHover] = useState(false)
    const [iconHover, setIconHover] = useState(999)
    const openWindow = (link:string) => {
        return () => {window.open(link, '_blank')}
        
    }
    return (
        <InfoContainer>
            <Picture>
                <Image src={`${process.env.PUBLIC_URL}/img/about/profile.png`}></Image>
            </Picture>
            <Info>
                {InfoData.map((el, idx) => (
                    <InfoDiv key={idx}>
                        <Index>
                            <IndexSpan>
                                {el.index}
                            </IndexSpan>
                        </Index>
                        {el.instead === undefined ? (
                            <Content>
                                <ContentSpan hover={true}>
                                    {el.content}
                                </ContentSpan>
                            </Content>
                        ) : (
                            <Content>
                                <ContentSpan
                                    hover={hover}
                                    onMouseLeave={() => setHover(false)}
                                    onMouseEnter={() => setHover(true)}
                                >
                                    {hover ? el.instead : el.content}
                                </ContentSpan>
                            </Content>
                        )}

                    </InfoDiv>
                ))}

            </Info>
            <Links>
                <LinkSpanDiv>
                    <LinkSpan>LINKS</LinkSpan>
                </LinkSpanDiv>
                <LinkDiv>
                    {LinkData.map((el:Link, idx:number) => (
                        <LinkContent key={idx}>
                            <LinkIcon
                                src={`${process.env.PUBLIC_URL}/img/about/${el.file}`}
                                onMouseLeave={() => setIconHover(999)}
                                onMouseEnter={() => setIconHover(idx)}
                                onClick={openWindow(el.link)}
                            ></LinkIcon>
                            <LinkDescDiv hover={iconHover === idx}>
                                <LinkDesc>{el.redirect}</LinkDesc>
                            </LinkDescDiv>
                        </LinkContent>
                    ))}
                    
                </LinkDiv>
            </Links>
        </InfoContainer>
    )
}
export default Information