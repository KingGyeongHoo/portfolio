import React from "react";
import styled from "styled-components";
import Pallete from "../../../Pallete";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid yellow;
`
const Picture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 23%;
    border: 1px solid green;
    margin-right: 2%;
`
const Image = styled.img`
    width: 90%;
    height: 90%;
    z-index: 10;
`
const Frame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 90%; 
    height: 90%;
    border: 1px solid white;
`
const Frame2 = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%; 
    height: 90%;
    border: 1px solid white;
`

const Info = styled.div`
    position: relative;
    width: 50%;
    border: 1px solid pink;
`

const InfoDiv = styled.div`
    position: relative;
    width: 76%;
    padding: 4% 2%;
    background-color: rgba(255,255,255,1);
    opacity: 1;
    margin-bottom: 2%;
    z-index: 50;
    &:last-child{
        margin-bottom: 0;
    }
`
const InfoFrame  = styled.div`
    position: absolute;
    top: 10;
    left: 10;
    width: 80%;
    height: 50%;
    background-color: rgba(0,0,0,0);
    border: 2px solid #ffffff;
    z-index: 5;
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
                <Frame></Frame>
                <Frame2></Frame2>
            </Picture>
            <Info>
                    <InfoDiv>
                         <InfoFrame></InfoFrame>
                    </InfoDiv>
            </Info>
            <Links></Links>
        </InfoContainer>
    )
}
export default Information