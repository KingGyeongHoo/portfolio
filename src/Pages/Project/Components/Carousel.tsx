import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projectData, Project } from "../../../Data/projectData";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

interface Direction{
    dir: string;
}
interface Left{
    idx:number;
}

export const Carousel = () => {
    const dispatch = useDispatch()
    const idx = useSelector((state:any) => state.selectedIdx)

    useEffect(() => {
        console.log(idx)
        if(idx <= 0){
            dispatch({
                type: '0'
            })
        } else if(idx >= projectData.length - 1){
            dispatch({
                type: (projectData.length - 1).toString()
            })
        }
    }, [idx])

    const MoveButton = ({dir}:Direction) => {
        return(
            <MoveButtonDiv dir={dir}>
                {dir === 'left' ? (
                    <FaArrowCircleLeft size='50' onClick={() => dispatch({type: (idx - 1).toString()})}/>
                ): (
                    <FaArrowCircleRight size='50' onClick={() => dispatch({type: (idx + 1).toString()})}/>
                )}
            </MoveButtonDiv>
        )
    }

    return(
        <CarouselContainer>
            <MoveButton dir='left'></MoveButton>
            <CarouselDiv idx={idx}>
                {projectData.map((el:Project, index:number) => <ProjectCard key={index} content={el} idx={index}></ProjectCard>)} 
            </CarouselDiv>
            <MoveButton dir='right'></MoveButton>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 2%;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
    overflow: hidden;
`
const MoveButtonDiv =  styled.div<Direction>`
    position: absolute;
    ${props => (props.dir === 'left' ? 'left: 1%' : 'right: 1%')};
    opacity: 0.05;
    z-index: 100;
    cursor:pointer;
    &:hover{
        opacity: 0.1;
    }
`

const CarouselDiv = styled.div<Left>`
    position: absolute;
    top: 50%;
    left:${({idx}) => 34 - idx * 33.333}%;
    display: flex;
    flex-direction: row;
    width: 132%;
    height: 90%;
    align-items: center;
    transition: left 0.5s ease-in-out;
    transform: translate(0, -50%);
`