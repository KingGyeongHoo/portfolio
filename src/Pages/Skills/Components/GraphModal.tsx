import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, {css} from "styled-components"

import { BgCircles } from "../../Main/Components/MainLeft";
import { fadeIn, fadeOut } from "../../About/Components/Information";
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
    width: 60%;
    height: 80%;
    background-color: #ffffff;
    border-radius: 40px;
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
            <ModalContainer>{skillInfo.skill}</ModalContainer>
        </ModalBackground>
    )
}

export default GraphModal