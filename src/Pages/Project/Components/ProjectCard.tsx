import styled from "styled-components";
import { Project } from "../../../Data/projectData";
import { useSelector, useDispatch } from "react-redux";
import { flexCenter } from "../../../Styles/GlobalStyle";

interface Content {
  content: Project;
  idx: number;
}
interface IsSelected {
  isSelected: boolean;
  background: string;
}
export const ProjectCard = ({ content, idx }: Content) => {
  const dispatch = useDispatch();
  const selectedIdx = useSelector((state: any) => state.selectedIdx);
  const isSelected = selectedIdx === idx;
  const handleClick = () => {
    if (isSelected) {
      dispatch({
        type: content.projectName,
      });
      dispatch({
        type: "Modal_Open",
      });
    } else {
      dispatch({
        type: idx.toString(),
      });
    }
  };
  return (
    <ProjectCardContainer>
      <ProjectContentDiv
        isSelected={isSelected}
        background={content.background}
        onClick={handleClick}
      >
        <div className="project-img">
          <img
            src={`${process.env.PUBLIC_URL}/img/projects/${content.file}`}
            alt={content.projectName}
          ></img>
        </div>
        <div className="project-content">
          <h1>{content.projectName}</h1>
          <p>{content.title}</p>
          <span>{content.type}</span>
          <span className="span-date">{content.date}</span>
        </div>
      </ProjectContentDiv>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  display: flex;
  width: 33.3%;
  @media (max-width: 600px) {
    width: 70%;
  }
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
`;
const ProjectContentDiv = styled.div<IsSelected>`
  width: 100%;
  height: 100%;
  transform: scale(${({ isSelected }) => (isSelected ? 1 : 0.8)});
  transition: transform 0.5s ease;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  .project-img {
    ${flexCenter};
    width: 100%;
    height: 70%;
    background-color: ${({ background }) => background};
    img {
      width: 70%;
    }
  }
  .project-content {
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 30%;
    padding: 4% 5%;
    overflow: hidden;
    h1 {
      font-size: 42px;
      font-family: "Pretendard-Bold";
      color: black;
      @media (max-width: 600px) {
        font-size: 24px;
      }
    }
    p {
      width: 100%;
      font-size: 20px;
      @media (max-width: 600px) {
        font-size: 16px;
      }
      color: ${({ theme }) => theme.fontColor.dark_gray};
      margin-top: 1%;
      overflow: hidden;
    }
    span {
      position: absolute;
      bottom: 2%;
      right: 2%;
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
      }
      color: ${({ theme }) => theme.fontColor.highlight};
      overflow-wrap: break-word;
    }
    .span-date {
      position: absolute;
      bottom: 2%;
      left: 2%;
      font-size: 18px;
      @media (max-width: 600px) {
        font-size: 14px;
      }
      color: ${({ theme }) => theme.fontColor.light_gray};
      overflow-wrap: break-word;
    }
  }
`;

export default ProjectCard;
