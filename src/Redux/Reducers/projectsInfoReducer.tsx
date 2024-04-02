import { projectData } from "../../Data/projectData";
interface ProjectAction {
  type: string;
}

export const projectReducer = (
  state: any = {},
  action: ProjectAction
): any => {
  switch (action.type) {
    case "Buyrricade":
      return projectData[3];
    case "CPM":
      return projectData[2];
    case "Portfolio":
      return projectData[1];
    case "HomePredictor":
      return projectData[0];
    default:
      return state;
  }
};
