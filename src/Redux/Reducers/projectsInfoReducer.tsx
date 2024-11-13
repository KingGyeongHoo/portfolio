import { projectData } from "../../Data/projectData";
interface ProjectAction {
  type: string;
}

export const projectReducer = (state: any = {}, action: ProjectAction): any => {
  switch (action.type) {
    case "Buyrricade":
      return projectData[4];
    case "CPM":
      return projectData[3];
    case "Portfolio":
      return projectData[2];
    case "HomePredictor":
      return projectData[1];
    case "Yogosoda":
      return projectData[0];
    default:
      return state;
  }
};
