import styled from "styled-components";
import { Project } from "../../../Data/projectData";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { flexCenter } from "../../../Styles/GlobalStyle";

import ProjectModal from "./ProjectModal";

interface Content{
  content: Project
  idx:number;
}
interface IsSelected{
  isSelected:boolean;
  background: string;
}
export const ProjectCard = ({content, idx}:Content) => {
  const dispatch = useDispatch()
  const selectedIdx = useSelector((state:any) => state.selectedIdx)
  const isSelected = selectedIdx === idx
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => {
    if(isSelected){
      setIsModalOpen(true)
    } else {
      dispatch({
        type:idx.toString()
      })
    }
  }
  return (
    <ProjectCardContainer>
      {isModalOpen ? <ProjectModal content={content} closeModal={setIsModalOpen}></ProjectModal> : ''}
      <ProjectContentDiv isSelected={isSelected} background={content.background} onClick={handleClick}>
        <div className="project-img">
          <img src={`${process.env.PUBLIC_URL}/img/projects/${content.file}`}></img>
        </div>
        <div className="project-content">
          <h1>
            {content.projectName}
          </h1>
          <p>
            {content.title}
          </p>
          <span>
            {content.type}
          </span>
        </div>
      </ProjectContentDiv>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  background-color: rgba(0,0,0,0);
  margin: 0;
`
const ProjectContentDiv = styled.div<IsSelected>`
  width: 100%;
  height: 100%;
  transform: scale(${({isSelected}) => isSelected ? 1 : 0.8});
  transition: transform 0.5s ease;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
  cursor:pointer;
  .project-img{
    ${flexCenter};
    width: 100%;
    height: 70%;
    background-color: ${({background}) => background};
    img{
      width: 70%;
    }
  }
  .project-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    padding: 4% 5%;
    h1{
      font-size: 42px;
      color: black;
    }
    p{
      font-size: 20px;
      color: ${({theme}) => theme.fontColor.dark_gray};
      margin-top: 1%;
    }
    span{
      position: absolute;
      bottom: 2%;
      right: 2%;
      font-size: 18px;
    }
  }
`

export default ProjectCard
