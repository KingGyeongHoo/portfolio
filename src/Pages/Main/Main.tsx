import styled from "styled-components"
import { MainFont } from "./Components/MainFont"
import { IntroTitle } from "./Components/IntroTitle"
import { Linkbar } from "./Components/Linkbar"

import { flexCenter } from "../../Styles/GlobalStyle"


const Main = () => {
    return (
        <MainContainer>
            <Linkbar></Linkbar>
            <MainFont></MainFont>
            <IntroTitle></IntroTitle>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    height: 300vh;
    padding: 0;
    background-color: ${({theme}) => theme.bgColor.main};
`
export default Main