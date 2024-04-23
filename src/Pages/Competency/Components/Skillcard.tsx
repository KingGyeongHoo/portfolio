import styled from "styled-components";
import { flexCenter } from "../../../Styles/GlobalStyle";
import { SkillData, Skills } from "../../../Data/SkillData";

const SkillCard = ({skill, url}:Skills) => {
    return(
        <SkillCardContainer>
            <img src={`https://simpleicons.org/icons/${url}.svg`}></img>
            <span>{skill}</span>
        </SkillCardContainer>
    )
}

const SkillCardContainer = styled.div`
    ${flexCenter};
    flex-direction: column;
    width: 19%;
    aspect-ratio: 1 / 1;
    margin: 0.5%;
    background-color: #F9F9F9;
    color: black;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    /* transition: transform 0.3s ease; */
    transition-property: color, transform; /* 변화를 줄 속성 목록 */
    transition-duration: 0.3s, 0.3s; /* 각 속성에 대한 전환 지속 시간 */
    transition-timing-function: ease, ease;
    &:hover{
        transform: scale(1.05);
        color:${({theme}) => theme.fontColor.highlight};
        & > img{
            filter: invert(56%) sepia(27%) saturate(313%) hue-rotate(166deg) brightness(98%) contrast(95%);
            transition: filter 0.3s ease;
        }
    }
    img{
        width: 30%;
        aspect-ratio: 1 / 1;
    }
    span{
        text-align: center;
        margin-top: 20px;
        font-weight: 900;
        font-size: 30px;
    }
`
export default SkillCard