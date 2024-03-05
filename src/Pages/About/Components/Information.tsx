import React from "react";
import styled from "styled-components";

import Pallete from "../../../Pallete";
import { InfoData } from "../../../Data/InfoData";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40%;
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
    height: 60%; /* 이미지의 높이를 자동으로 조정하여 비율 유지 */
    z-index: 10;
`;

const Info = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid pink;
`

const InfoDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 10%;
    padding: 1% 5%;
    background-color: rgba(255,255,255,1);
    opacity: 1;
    margin-bottom: 3%;
    z-index: 50;
    &:last-child{
        margin-bottom: 0;
    }
    &::after{
        content:'';
        position: absolute;
        top: 10%;
        left: 2%;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        border: 3px solid #ffffff;
        z-index: 5;
    }
`
const  Index = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    border: 1px solid purple;
    color: ${Pallete.main_color};
`
const Content = styled(Index)`
    width: 60%;
    color: #000000;
`
const Links = styled.div`
    width: 21%;
    margin-left: 4%;
    border: 1px solid skyblue;
`

const Information = () => {
    return (
        <InfoContainer>
            <Picture>
                <Image src={`${process.env.PUBLIC_URL}/img/profile.png`}></Image>
            </Picture>
            <Info>
                {InfoData.map(el => (
                    <InfoDiv>
                        <Index>{el.index}</Index>
                        <Content>{el.content}</Content>
                    </InfoDiv>
                ))}
                    
            </Info>
            <Links></Links>
        </InfoContainer>
    )
}
export default Information