import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Title from '../About/Components/Title';
import { Container, ContentContainer } from '../About/About';

interface SkillsProps{
    url:string
}

const SkillsContainer = styled(Container)`
    background-color: #ffffff;
`

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.9
    });
    const dispatch = useDispatch()

    useEffect(() => {
        if (inView) {
            dispatch({type:'Skills'})
        }
    }, [inView]);

    return (
        <SkillsContainer ref={ref} url={`${process.env.PUBLIC_URL}/img/content_bg_main.png`}>
            <ContentContainer>
                <Title title='Skills' color={Pallete.main_color}></Title>
            </ContentContainer>
        </SkillsContainer>
    )
}
export default Skills