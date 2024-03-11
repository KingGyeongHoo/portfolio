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
      return projectData[0];
    case "CPM":
      return projectData[1];
    case "Portfolio":
      return projectData[2];
    default:
      return state;
  }
};
