import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Card from './Components/Card';
import Title from '../Intro/Components/Title';
import { Container, ContentContainer } from '../Intro/Intro';
import ProjectsModal from './Components/ProjectsModal';

const ProjectsContainer = styled(Container)`
    position: relative;
    background-color: #ffffff;
`

const Project = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    const dispatch = useDispatch()
    useEffect(() => {
        if (inView) {
            dispatch({type:'Projects'})
        }
    }, [inView, dispatch]);
    const project = useSelector((state: any) => state.project)

    return (
        <ProjectsContainer ref={ref} url={`${process.env.PUBLIC_URL}/img/content_bg_main.png`}>
            {project.projectName !== undefined ? <ProjectsModal></ProjectsModal> : ''}
            <ContentContainer>
                <Title title='Projects' color={Pallete.main_color}></Title>
                <Card></Card>
            </ContentContainer>
        </ProjectsContainer>
    )
}
export default Project