import styled from "styled-components"
import Pallete from "../../../Pallete"

const MainRightContainer = styled.div`
    width: 40%;
    height: 100%;
    background-color: ${Pallete.main_color};
`
const BgImg = styled.img`
    width: 100%;
    height: 100%;
`

const MainRight = () => {
    return (
        <MainRightContainer>
            <BgImg src={`${process.env.PUBLIC_URL}/img/main_bg.png`}></BgImg>
        </MainRightContainer>
    )
}
export default MainRight