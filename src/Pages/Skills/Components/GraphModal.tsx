import React, {useState} from "react";
import { UseSelector } from "react-redux";
import styled, {css} from "styled-components"

import { BgCircles } from "../../Main/Components/MainLeft";
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
    background-color: rgba(255,255,255,0.2);
`
const GraphModal:React.FC<Open> = ({open}) => {
    console.log(`모달은 ${open}`)
    const  [isOpen, setIsOpen] = useState(true)
    const closeModal = () => {
        setIsOpen(false)
    }
    return(
        <ModalBackground
            isOpen={open}
            onClick={closeModal}
        >
        </ModalBackground>
    )
}

export default GraphModal