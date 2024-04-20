import styled from "styled-components";
import { Project } from "../../../Data/projectData";
import { useSelector, useDispatch } from "react-redux";
import { flexCenter } from "../../../Styles/GlobalStyle";

interface Content{
    content: Project;
    closeModal:any;
}

const ProjectModal = ({content, closeModal}:Content) => {

  return (
    <ModalBackground onClick={closeModal(false)}></ModalBackground>
  );
};

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
`

export default ProjectModal
