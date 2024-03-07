import styled from "styled-components"
import Pallete from "../../../Pallete"

interface Container{
    url:string;
}

const MainRightContainer = styled.div<Container>`
    position: relative;
    width: 40%;
    height: 100%;
    background-color: ${Pallete.main_color};
    background-image: url(${props => props.url});
    background-size: cover;
    z-index: 100;
`

const MainRight = () => {
    return (
        <MainRightContainer url={`${process.env.PUBLIC_URL}/img/main_bg.png`}>
        </MainRightContainer>
    )
}
export default MainRight