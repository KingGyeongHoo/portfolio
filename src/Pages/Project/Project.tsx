import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Card from './Components/Card';
import Title from '../About/Components/Title';
import { Container, ContentContainer } from '../About/About';

const ProjectsContainer = styled(Container)`
    position: relative;
    background-color: #ffffff;
`

const Project = () => {
    const curPage:number = useSelector((state:any) => state.page)
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    const dispatch = useDispatch()
    useEffect(() => {
        if (inView) {
            dispatch({type:'Projects'})
        }
    }, [inView]);

    return (
        <ProjectsContainer ref={ref} url={`${process.env.PUBLIC_URL}/img/content_bg_main.png`}>
            <ContentContainer>
                <Title title='Projects' color={Pallete.main_color}></Title>
                <Card></Card>
            </ContentContainer>
        </ProjectsContainer>
    )
}
export default Project