import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { Title } from '../../Styles/GlobalStyle';
import { Carousel } from './Components/Carousel';


const Project = () => {
    return (
        <ProjectsContainer>
            <Title>Projects</Title>
            <Carousel></Carousel>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0 5% 5% 5%;
    background-color: #ffffff;
`

export default Project