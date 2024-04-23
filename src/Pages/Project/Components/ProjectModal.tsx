import styled from "styled-components";
import { Project } from "../../../Data/projectData";
import { useSelector, useDispatch } from "react-redux";
import { flexCenter } from "../../../Styles/GlobalStyle";

interface IsOpen{
  isOpen:boolean;
}

const ProjectModal = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state:any) => state.isOpen)
  const closeModal = () => {
    dispatch({
      type:'Modal_Close'
    })
  }
  return (
    <ModalBackground onClick={closeModal} isOpen={isOpen}></ModalBackground>
  );
};

const ModalBackground = styled.div<IsOpen>`
    position: fixed;
    top: 0;
    left: 0;
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 15;
`

export default ProjectModal
