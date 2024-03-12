import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components"

import { SkillData } from "../../../Data/SkillData";
import Pallete from "../../../Pallete";
import { fadeIn, fadeOut } from "../../About/Components/Information";

interface SkillsProps {
    title: string;
    isAbove: boolean;
}
interface Hover {
    isHover: boolean;
}
interface Skill {
    skill: string;
    color: string;
    isSc: boolean;
}
interface Prof {
    prof: number;
}

const Container = styled.div`
    position: relative;
    width: 100%;
    &:first-child{
        margin-bottom: 1%;
    }
`
const SkillsTitle = styled.h1`
    padding: 1%;
    color: #000000;
    font-weight: 900;
`
const SkillContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255,255,255,0.75);
    width: 100%;
    padding: 1% 0;
`
const SkillDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: auto;
    margin: 1% 0;
    cursor: pointer;
`
const SkillImg = styled.img`
    width: 70%;
`
const SkillDescDiv = styled.div<Hover>`
    width: 96%;
    padding: 2%;
    opacity: 0;
    animation: ${props => props.isHover ? css`${fadeIn} 0.3s linear forwards` : css`${fadeOut} 0.3s linear forwards`};
`
const SkillDesc = styled.p<Skill>`
    text-align: center;
    color:${props => props.color};
    font-size: ${props => props.isSc ? '1.3em' : '1.8em'};
    font-weight: 900;
`
export const SkillProf = styled.p<Prof>`
    text-align: center;
    color:${props => props.prof > 2 ? Pallete.prof_familiar :
        props.prof > 1 ? Pallete.prof_learning : Pallete.prof_experienced};
    font-size: 1.2em;
    font-weight: 500;
`
const SkillBox: React.FC<SkillsProps> = ({ title, isAbove }) => {
    let data: any[] = []
    if (isAbove) {
        data = SkillData.slice(0, 8)
    } else {
        data = SkillData.slice(8)
    }
    const dispatch = useDispatch()
    const openModal = (skill: string) => {
        dispatch({
            type: skill,
        })
        dispatch({
            type: 'Modal_Open',
        })
    }
    const [hover, setHover] = useState(999)
    return (
        <Container>
            <SkillsTitle>{title}</SkillsTitle>
            <SkillContent>
                {data.map((el, idx) => {
                    return (
                        <SkillDiv key={idx} onClick={() => openModal(el.skill)}>
                            <SkillImg
                                src={`${process.env.PUBLIC_URL}/img/skills/${el.skill}.png`}
                                onMouseOver={(event) => {
                                    event.stopPropagation()
                                    setHover(idx)
                                }
                                }
                                onMouseLeave={(event) => {
                                    event.stopPropagation()
                                    setHover(999)
                                }}
                            ></SkillImg>
                            <SkillDescDiv isHover={hover === idx}>
                                <SkillDesc skill={el.skill} color={el.color} isSc={idx === 5 && isAbove}>{el.skill}</SkillDesc>
                                <SkillProf prof={el.prof}>
                                    {el.prof > 2 ? 'Familiar' : (
                                        el.prof > 1 ? 'Learning' : 'Experienced'
                                    )}
                                </SkillProf>
                            </SkillDescDiv>
                        </SkillDiv>
                    )
                })}
            </SkillContent>
        </Container>
    )
}
export default SkillBox