import styled from "styled-components"
import { Title } from '../../Styles/GlobalStyle';
import { Carousel } from './Components/Carousel';
import ProjectModal from './Components/ProjectModal';


const Project = () => {
    return (
        <ProjectsContainer>
            <ProjectModal></ProjectModal>
            <Title>Projects</Title>
            <Carousel></Carousel>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100vh;
    padding: 0 5%;
    background-color: #ffffff;
`

export default Project