import styled from "styled-components";
import { Title } from "../../../Styles/GlobalStyle";
import SkillCard from "./Skillcard";
import { SkillData, Skills } from "../../../Data/SkillData";
export const Skill = () => {
  return (
    <SkillContainer>
      <Title>SKILLS</Title>
      <SkillDiv>
        {SkillData.map((el: Skills, idx: number) => {
          return (
            <SkillCard
              skill={el.skill}
              url={el.url}
              description={el.description}
            ></SkillCard>
          );
        })}
      </SkillDiv>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const SkillDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2%;
`;
