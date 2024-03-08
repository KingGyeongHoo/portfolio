import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Title from '../About/Components/Title';
import { Container, ContentContainer } from '../About/About';
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
    const [ref, inView] = useInView({
        threshold: 0.9
    });
    const dispatch = useDispatch()
    const skillInfo = useSelector((state: any) => state.skill)
    useEffect(() => {
        if (inView) {
            dispatch({type:'Skills'})
        }
    }, [inView]);
    console.log(skillInfo)
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