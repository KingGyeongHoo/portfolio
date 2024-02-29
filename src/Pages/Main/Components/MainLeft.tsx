import styled from "styled-components"

import Pallete from "../../../Pallete"

interface Text{
    color:string;
    display: string;
}
interface Circle{
    top: string;
    left: string;
}

const MainLeftContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: #ffffff;
`
const LogoContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 96%;
    padding: 1% 2%;
    overflow: hidden;
`
const Logo = styled.img`
    width: 7%;
`
const TextDiv = styled.div`
    position: relative;
    width: 80%;
`
const Text = styled.span<Text>`
    display: ${props => props.display};
    font-family: "Black Han Sans", sans-serif;
    font-size: 7em;
    color: ${props => props.color};
`
const Button = styled.button`
    z-index: 10;
    display: flex;
    width: 25%;
    padding: 4% 2%;
    align-items: center;
    justify-content: center;
    background-color: ${Pallete.main_color};
    border: 0;
    border-radius: 10px;
    font-size: 2em;
    color: #ffffff;
    &:hover{
        background-color: ${Pallete.main_color_dark};
    }
`
const BgCircle = styled.div<Circle>`
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    width:75%;
    height: 60%;
    border: 80px solid ${Pallete.main_color};
    border-radius: 100%;
    opacity: 0.1;
`

const MainLeft = () => {

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' // 부드럽게 스크롤
        });
      };


    return (
        <MainLeftContainer>
            <LogoContainer>
                <Logo src={`${process.env.PUBLIC_URL}/img/logo.png`}></Logo>
            </LogoContainer>
            <TextDiv>
                <>
                    <Text color='black' display='block' className="black-han">프론트엔드 개발자</Text>
                    <Text color={Pallete.main_color} display='inline' className="black-han">송경후</Text>
                    <Text color='black' display='inline' className="black-han">입니다</Text>
                </>
                <Button onClick={scrollToBottom}>Learn More</Button>
            </TextDiv>
            <>
                <BgCircle top='-35' left='-40'></BgCircle>
                <BgCircle top='60' left='40'></BgCircle>
                <BgCircle top='-45' left='65'></BgCircle>
            </>
        </MainLeftContainer>
    )
}
export default MainLeft