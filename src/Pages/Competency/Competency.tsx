import styled from "styled-components";
import { Education } from "./Components/Education";
import { Skill } from "./Components/Skill";
import { Career } from "./Components/Career";

const Competency = () => {
  return (
    <CompetencyContainer>
      <Education></Education>
      <Career />
      <Skill></Skill>
    </CompetencyContainer>
  );
};

const CompetencyContainer = styled.div`
  width: 94%;
  padding: 5% 3%;
  background-color: ${({ theme }) => theme.bgColor.main};
`;
export default Competency;
