import styled from "styled-components"
import { flexCenter } from "../../../Styles/GlobalStyle"

export const Scroll = () => {
    const handleScroll = () => {
        window.scrollBy({
          top: window.innerHeight, // 100vh만큼 아래로 이동
          behavior: "smooth", // 부드러운 스크롤 효과
        });
    }

    return (
        <ScrollDiv onClick={handleScroll}>
            <div></div>
            <span>Scroll</span>
        </ScrollDiv>
    )
}

const ScrollDiv = styled.div`
    position: absolute;
    ${flexCenter};
    flex-direction: column;
    justify-content: space-around;
    bottom: 10px;
    left: 50%;
    width: 75px;
    height: 8%;
    transform: translate(-50%, 0);
    &:hover{
            > div{
                transition: background-color 0.3s ease;
                background-color:black;
            }
            >span{
                transition: color 0.3s ease;
                color:black;
            }
        }
    div{
        width: 2px;
        height: 60%;
        background-color: ${({theme}) => theme.fontColor.light_gray};
    }
    span{
        color:${({theme}) => theme.fontColor.light_gray};
    }
`