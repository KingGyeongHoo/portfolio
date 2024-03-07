import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled, {css} from "styled-components"

import { SkillData } from "../../../Data/SkillData";
import Pallete from "../../../Pallete";
import { fadeIn, fadeOut } from "../../About/Components/Information";

interface SkillsProps{
    title:string;
    isAbove:boolean;
}
interface Hover{
    isHover: boolean;
}
interface Skill{
    skill:string;
    color: string;
    isSc:boolean;
}
interface Prof{
    prof:number;
}
interface Modal{
    isOpen:boolean;
}

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 1% 0;
`
const SkillsTitle = styled.h1`
    padding: 1%;
    color: #000000;
`
const SkillContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 1% 0;
`
const SkillDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12%;
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
    font-weight: bold;
`
const SkillProf = styled.p<Prof>`
    text-align: center;
    color:${props => props.prof > 2 ? Pallete.prof_familiar : 
    props.prof > 1 ? Pallete.prof_learning : Pallete.prof_experienced};
    font-size: 1.2em;
    font-weight: bold;
`
const ModalBackground = styled.div<Modal>`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    background-color: rgba(0,0,0,0.5);
    z-index: 200;
`
const SkillBox:React.FC<SkillsProps> = ({title,isAbove}) => {
    let data:any[] = []
    if(isAbove){
        data = SkillData.slice(0, 8)
    } else {
        data = SkillData.slice(8)
    }
    const [hover, setHover] = useState(999)
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    return (
        <Container>
            <SkillsTitle>{title}</SkillsTitle>
            <SkillContent>
                {data.map((el, idx) => {
                    return(
                        <SkillDiv onClick={() => dispatch({type:el.skill, isOpen: true})}>
                            <SkillImg
                                src={`${process.env.PUBLIC_URL}/img/skills/${el.skill}.png`}
                                onMouseOver={(event) => {
                                    event.stopPropagation()
                                    setHover(idx)}
                                }
                                onMouseLeave={(event) => {
                                    event.stopPropagation()
                                    setHover(999)
                                }}
                            ></SkillImg>
                            <SkillDescDiv isHover={hover === idx}>
                                <SkillDesc skill={el.skill} color={el.color} isSc={idx === 5 && isAbove}>{el.skill}</SkillDesc>
                                <SkillProf prof={el.prof}>familiar</SkillProf>
                            </SkillDescDiv>
                        </SkillDiv>
                    )
                })}
            </SkillContent>
        </Container>
    )
}
export default SkillBox