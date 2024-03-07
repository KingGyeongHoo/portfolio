import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Pallete from "../../../Pallete";
import { InfoData, LinkData } from "../../../Data/InfoData";

interface Hovered {
    hover?: boolean;
}

const fadeIn = keyframes`
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
const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`; 

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60%;
`
const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 28%;
    height: 100%;
    margin-right: 2%;
    &::before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 90%; 
        height: 90%;
        border: 5px solid white;
        z-index: 5; /* 이미지 위에 레이어를 올릴 때 z-index 설정 */
    }
    &::after{
        content:'';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 90%; 
        height: 90%;
        border: 5px solid white;
        z-index: 5; /* 이미지 위에 레이어를 올릴 때 z-index 설정 */
    }
`
const Image = styled.img`
    position: relative;
    width: 90%;
    height: auto;
    z-index: 10;
`;

const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 50%;
    height: 100%;
`

const InfoDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 15%;
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
        height: 100%;
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
    font-weight: bold;
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
    z-index: 100;
    animation: ${props => props.hover ? css`${fadeIn} 0.5s linear forwards` : css`${fadeChange} 0.5s linear forwards`};
`
const Links = styled.div`
    width: 21%;
    height: 100%;
    margin-left: 4%;
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
    font-weight: bold;
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
`
const LinkIcon = styled.img`
    width: 3.5vw;
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
    font-weight: bold;
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
                <Image src={`${process.env.PUBLIC_URL}/img/profile.png`}></Image>
            </Picture>
            <Info>
                {InfoData.map((el, idx) => (
                    <InfoDiv>
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
                    {LinkData.map((el, idx) => (
                        <LinkContent>
                            <LinkIcon
                                src={`${process.env.PUBLIC_URL}/img/${el.file}`}
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