import { SkillData } from "../../Data/SkillData";

interface SkillAction {
  type: string;
}

const skillState: string = "";
export const skillReducer = (
  state: string = skillState,
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
    default:
      return state;
  }
};
