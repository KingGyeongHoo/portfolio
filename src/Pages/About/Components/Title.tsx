import React from "react";
import styled from "styled-components";

interface TitleProps{
    title: string;
    color:string;
}
interface Design{
    color:string;
}

const TitleSpan = styled.h1<Design>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    margin-bottom: 3%;
    color: ${props => props.color};
    font-size: 5em;
    font-weight: 900;
`

const Title:React.FC<TitleProps> = ({title, color}) => {
    return (
            <TitleSpan color={color}>{title}</TitleSpan>
    )
}
export default Title