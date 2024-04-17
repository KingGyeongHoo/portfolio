import styled from "styled-components";
import { useSelector } from "react-redux";

import { Scroll } from "./MainFont";
import { flexCenter, highlight } from "../../../Styles/GlobalStyle";

export const IntroTitle = () => {
    const scroll = useSelector((state:any) => state.scroll)
    return (
        <IntroDiv scroll={scroll}>
            <p>개발이란, 사용자가 만족하는 방향으로 계속 <span>변화</span>해야 한다고 생각합니다.</p>
            <p>그렇기에 저는 최고의 <span>사용자 경험</span>을 제공하기 위해  다방면으로 노력하고 있습니다.</p>
        </IntroDiv>
    )
}


const IntroDiv = styled.div<Scroll>`
    position: fixed;
    top: 50%;
    left: 50%;
    ${flexCenter}
    display: ${props => props.scroll > 3700 ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
    width: 80%;
    opacity: ${props => props.scroll > 1000  ? (props.scroll - 800) / 1000 : '0'};
    transition: opacity 0.3s ease-out;
    p{
        font-size: 40px;
        font-weight: 900;
        margin: 5px 0;
        span{
            ${highlight};
        }
    }
`