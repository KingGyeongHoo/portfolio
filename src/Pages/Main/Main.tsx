import styled from "styled-components"

import MainLeft from "./Components/MainLeft"
import MainRight from "./Components/MainRight"


const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 0;
`

const Main = () => {
    return (
        <MainContainer>
            <MainLeft />
            <MainRight />
        </MainContainer>
    )
}
export default Main