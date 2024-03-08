import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, {css} from "styled-components"

import Pallete from "../../../Pallete";
import { BgCircles } from "../../Main/Components/MainLeft";
import { SkillProf } from "./SkillBox";
import { fadeIn, fadeOut } from "../../About/Components/Information";
import Graph from "./Graph";
interface Modal{
    isOpen:boolean;
}
interface Open{
    open: boolean;
}
const ModalBackground = styled.div<Modal>`
    position: absolute;
    top:0;
    left:0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    animation: ${props => props.isOpen ? css`${fadeIn} 0.3s linear forwards` : css`${fadeOut} 0.3s linear forwards`};
    z-index: 110;
`
const ModalContainer = styled.div`
    position: relative;
    width:48%;
    height: 78%;
    padding: 1%;
    background-color: #ffffff;
    border-radius: 40px;
    overflow: hidden;
`
const ModalContentDiv = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 100%;
    height: 100%;
`
const ModalSkillName = styled.h1`
    color: ${Pallete.main_color};
    font-size: 4em;
`
const ModalProf = styled(SkillProf)`
    font-size: 2em;
`
const GraphDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:60%;
    margin: 3% 0 5% 0;
`
const TotalRate = styled.p`
    margin-top: -5%;
    font-size: 2em;
    font-weight: bold;
`
const Describe = styled.p`
    margin: 0.2% 0;
    font-weight: bold;
`
const GraphModal = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state:any) => state.isOpen)
    const skillInfo = useSelector((state:any) => state.skill)
    console.log(skillInfo)
    const closeModal = () => {
        dispatch({
            type: 'Modal_Close',
        })
    }
    return(
        <ModalBackground isOpen={isOpen} onClick={closeModal}>
            <ModalContainer>
                <ModalContentDiv>
                    <ModalSkillName>{skillInfo.skill}</ModalSkillName>
                    <ModalProf prof={skillInfo.prof}>
                        {skillInfo.prof > 2 ? 'Familiar' : (
                            skillInfo.prof > 1 ? 'Learning' : 'Experienced'
                        )}
                    </ModalProf>
                    <GraphDiv>
                        <Graph info={skillInfo.info}></Graph>
                        <TotalRate>Total Rate : {skillInfo.info.reduce((acc:number, cur:any) => acc+cur.rate, 0)/5}</TotalRate>
                    </GraphDiv>
                    {skillInfo.text.split('.').map((el:any) => <Describe>{el}</Describe>)}
                </ModalContentDiv>
                <BgCircles></BgCircles>
            </ModalContainer>
        </ModalBackground>
    )
}

export default GraphModal