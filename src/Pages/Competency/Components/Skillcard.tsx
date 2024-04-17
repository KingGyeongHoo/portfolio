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
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
    img{
        width: 30%;
        aspect-ratio: 1 / 1;
    }
    span{
        text-align: center;
        margin-top: 20px;
        color: black;
        font-weight: 900;
        font-size: 30px;
    }
`
export default SkillCard