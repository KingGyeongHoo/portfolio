import styled from "styled-components";
import { flexCenter } from "../../../Styles/GlobalStyle";

export const IntroCard = () => {
    return(
        <CardContainer></CardContainer>
    )
}

const CardContainer = styled.div`
    ${flexCenter};
    width: 100%;
    height: 500px;
    background-color: white;
    box-shadow: 1px 1px 2px black;
`