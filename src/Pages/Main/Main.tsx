import styled from "styled-components"
import { MainFont } from "./Components/MainFont"
import { Scroll } from "./Components/Scroll"
import { IntroTitle } from "./Components/IntroTitle"

import { flexCenter } from "../../Styles/GlobalStyle"


const Main = () => {
    return (
        <MainContainer>
            <MainFont></MainFont>
            <IntroTitle></IntroTitle>
            <Scroll></Scroll>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    height: 200vh;
    padding: 0;
    background-color: ${({theme}) => theme.bgColor.main};
`
export default Main