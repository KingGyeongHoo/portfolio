import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Title from '../Intro/Components/Title';
import { Container, ContentContainer } from '../Intro/Intro';
import SkillBox from './Components/SkillBox';
import GraphModal from './Components/GraphModal';

interface SkillsProps{
    url:string
}

const SkillsContainer = styled(Container)`
    position: relative;
    background-color: #ffffff;
`

const Skills = () => {
    const skillInfo = useSelector((state: any) => state.skill)
    const curPage:number = useSelector((state:any) => state.page)
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    
    const dispatch = useDispatch()
    useEffect(() => {
        if (inView) {
            dispatch({type:'Skills'})
        }
    }, [inView]);
    return (
        <SkillsContainer ref={ref} url={`${process.env.PUBLIC_URL}/img/content_bg_main.png`}>
            {skillInfo.skill === undefined ? '' : <GraphModal></GraphModal>}
            <ContentContainer>
                <Title title='Skills' color={Pallete.main_color}></Title>
                <SkillBox title="Frontend Skills" isAbove={true}></SkillBox>
                <SkillBox title="Other Skills" isAbove={false}></SkillBox>
            </ContentContainer>
        </SkillsContainer>
    )
}
export default Skills