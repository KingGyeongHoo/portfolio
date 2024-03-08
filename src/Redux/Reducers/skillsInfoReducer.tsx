import { SkillData } from "../../Data/SkillData";

interface SkillAction {
  type: string;
}

export const skillReducer = (
  state: any = {},
  action: SkillAction
): any => {
  switch (action.type) {
    case "Javascript":
      return SkillData[0];
    case "HTML":
      return SkillData[1];
    case "CSS":
      return SkillData[2];
    case "React":
      return SkillData[3];
    case "Redux":
      return SkillData[4];
    case "Styled-Components":
      return SkillData[5];
    case "AXIOS":
      return SkillData[6];
    case "Typescript":
      return SkillData[7];
    case "Python":
      return SkillData[8];
    case "AWS":
      return SkillData[9];
    case "Netlify":
      return SkillData[10];
    case "Node.js":
      return SkillData[11];
    case "Git":
      return SkillData[12];
    case "Figma":
      return SkillData[13];
    case "Photoshop":
      return SkillData[14];
    case "Jira":
      return SkillData[15];
    default:
      return state;
  }
};
