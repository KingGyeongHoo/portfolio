import React from "react";
import styled from "styled-components";

interface TitleProps{
    title: string;
    color:string;
}
interface Design{
    color:string;
}

const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 2%;
    border: 1px solid red;
`
const TitleSpan = styled.span<Design>`
    color: ${props => props.color};
    font-size: 6em;
    font-weight: strong;
`

const Title:React.FC<TitleProps> = ({title, color}) => {
    return (
        <TitleContainer>
            <TitleSpan color={color}>{title}</TitleSpan>
        </TitleContainer>
    )
}
export default Title