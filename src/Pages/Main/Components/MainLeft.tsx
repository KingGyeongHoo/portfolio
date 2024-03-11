import styled, {keyframes, css} from "styled-components"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../../Pallete"

interface Text{
    display: string;
    typing: boolean;
}
interface ButtonProps{
    fade:boolean;
}
interface Circle{
    top: string;
    left: string;
}

const typingAnimation = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainLeftContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: #ffffff;
    overflow: hidden;
`
const TextDiv = styled.div`
    position: relative;
    width: 80%;
`
const Text = styled.span<Text>`
    display: ${props => props.display};
    font-size: 7em;
    @media (max-width: 1700px){
        font-size: 6em;
    }
    @media (max-width: 1440px){
        font-size: 5em;
    }
    @media (max-width: 1200px){
        font-size: 4em;
    }
    @media (max-width: 960px){
        font-size: 3em;
    }
    @media (max-width: 560px){
        font-size: 2.5em;
    }
    overflow: hidden; /* 타이핑 효과를 위해 오버플로우 숨김 설정 */
    white-space: nowrap;
    animation: ${props => props.typing ? typingAnimation : 'none'} 1.5s steps(40, end); /* 타이핑 애니메이션 적용 */
`
const Text2 = styled(Text)<Text>`

`
const Highlight = styled.span`
    font-family: "Black Han Sans", sans-serif;
    color: ${Pallete.main_color};
`
const Button = styled.button<ButtonProps>`
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
    @media (max-width: 1640px){
        font-size: 1.5em;
    }
    @media (max-width: 768px){
        font-size: 1em;
    }
    color: #ffffff;
    opacity: 0;
    &:hover{
        background-color: ${Pallete.main_color_dark};
    }
    animation: ${props => props.fade ? css `${fadeInAnimation} 1s forwards` : 'none'};
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

export const BgCircles = () => {
    return(
        <>
            <BgCircle top='-35' left='-40'></BgCircle>
            <BgCircle top='60' left='40'></BgCircle>
            <BgCircle top='-45' left='65'></BgCircle>
        </>
    )
}

const MainLeft = () => {
    const [type, setType] = useState<boolean>(false)
    const [fade, setFade] = useState<boolean>(false)

    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setType(true)
        }, 1200)
    }, [])
    useEffect(() => {
        if(type){
            setTimeout(() => {
                setFade(true)
        }, 1000)
        }
    }, [type])

    const scrollToBottom = ():void => {
        dispatch({type: 'About'})
        const nextSection = document.querySelector('.About') as HTMLElement;
        if(nextSection){
            const nextSectionTop = nextSection.offsetTop;
            window.scrollTo({
                top: nextSectionTop,
                behavior: 'smooth'
              });
        }
      };


    return (
        <MainLeftContainer>
            <TextDiv>
                <>
                    <Text display='block' className="black-han" typing>프론트엔드 개발자</Text>
                    <Text2 display={type ? 'block' : 'none'} className="black-han" typing={type}><Highlight>송경후</Highlight>입니다</Text2>
                </>
                <Button onClick={scrollToBottom} fade={fade}>Learn More</Button>
            </TextDiv>
            <BgCircles />
        </MainLeftContainer>
    )
}
export default MainLeft