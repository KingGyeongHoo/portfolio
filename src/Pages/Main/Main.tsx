import styled from "styled-components"
import { MainFont } from "./Components/MainFont"

import { flexCenter } from "../../Styles/GlobalStyle"


const Main = () => {
    return (
        <MainContainer>
            <MainFont></MainFont>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    ${flexCenter};
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: ${({theme}) => theme.bgColor.main};
`
export default Main