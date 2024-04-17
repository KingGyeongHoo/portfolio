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
    width: 280px;
    height: 280px;
    margin: 10px;
    background-color: #F9F9F9;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    img{
        width: 120px;
        height: 120px;
    }
    span{
        margin-top: 20px;
        color: black;
        font-weight: 900;
        font-size: 36px;
    }
`
export default SkillCard