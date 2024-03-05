import React, { useState } from "react";
import styled, {css, keyframes} from "styled-components";

import Pallete from "../../../Pallete";
import { InfoData } from "../../../Data/InfoData";

interface Hovered{
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
const fadeOut = keyframes`
    0% {
        opacity: 0;
    }
    99% {
        opacity: 1;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45%;
    border: 1px solid yellow;
`
const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 28%;
    height: 100%;
    border: 1px solid green;
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
    border: 1px solid pink;
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
    width: 25%;
    height: 100%;
    /* margin-left: 5%; */
    color: ${Pallete.main_color};
    font-size: 1.5em;
    font-weight: bold;
`
const Content = styled(Index)<Hovered>`
    justify-content: flex-start;
    width: 60%;
    margin-left: 10%;
    color: #000000;
    animation: ${props => props.hover ? css`${fadeIn} 0.5s linear forwards` : css`${fadeOut} 0.5s linear forwards`};
    z-index: 100;
`
const Links = styled.div`
    width: 21%;
    margin-left: 4%;
    border: 1px solid skyblue;
`

const Information = () => {
    const [hover, setHover] = useState(false)
    console.log(hover)
    return (
        <InfoContainer>
            <Picture>
                <Image src={`${process.env.PUBLIC_URL}/img/profile.png`}></Image>
            </Picture>
            <Info>
                {InfoData.map((el) => (
                    <InfoDiv>
                        <Index>{el.index}</Index>
                        {el.instead === undefined? (
                            <Content
                                hover={true}
                            >{el.content}</Content>
                        ) : (
                            <Content
                                hover={hover}
                                onMouseLeave={() => setHover(false)}
                                onMouseEnter={() => setHover(true)}
                            >{hover ? el.instead : el.content}</Content>
                        )}
                        
                    </InfoDiv>
                ))}
                    
            </Info>
            <Links></Links>
        </InfoContainer>
    )
}
export default Information