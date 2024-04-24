import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, {css, keyframes} from "styled-components";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { projectData, Project } from "../../../Data/projectData";

import { flexCenter } from "../../../Styles/GlobalStyle";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

interface IsShown{
    isShown:boolean;
  }
interface Direction {
    dir: string;
}
interface Left {
    idx: number;
}
interface IsSelected {
    isSelected: boolean;
}

export const Carousel = () => {
    const dispatch = useDispatch()
    const idx = useSelector((state: any) => state.selectedIdx)

    useEffect(() => {
        if (idx <= 0) {
            dispatch({
                type: '0'
            })
        } else if (idx >= projectData.length - 1) {
            dispatch({
                type: (projectData.length - 1).toString()
            })
        }
    }, [idx])
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
      });

    const MoveButton = ({ dir }: Direction) => {
        return (
            <MoveButtonDiv dir={dir}>
                {dir === 'left' ? (
                    <FaArrowCircleLeft size='50' onClick={() => dispatch({ type: (idx - 1).toString() })} />
                ) : (
                    <FaArrowCircleRight size='50' onClick={() => dispatch({ type: (idx + 1).toString() })} />
                )}
            </MoveButtonDiv>
        )
    }

    return (
        <CarouselContainer ref={ref} isShown={inView}>
            <MoveButton dir='left'></MoveButton>
            <CarouselDiv idx={idx}>
                {projectData.map((el: Project, index: number) => <ProjectCard key={index} content={el} idx={index}></ProjectCard>)}
            </CarouselDiv>
            <MoveButton dir='right'></MoveButton>
            <ItemIndexDiv>
                {Array.from(projectData, (el, index) => <ItemIndex isSelected={index === idx} onClick={() => dispatch({ type: index.toString() })}></ItemIndex>)}
            </ItemIndexDiv>
        </CarouselContainer>
    )
}

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CarouselContainer = styled.div<IsShown>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 2%;
    opacity: 0;
    background-color: rgba(0,0,0,0);
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
    overflow: hidden;
    ${(props) =>
    props.isShown &&
    css`
      animation: ${fadeInAnimation} 0.5s ease-in-out forwards;
    `};
`
const MoveButtonDiv = styled.div<Direction>`
    position: absolute;
    ${props => (props.dir === 'left' ? 'left: 1%' : 'right: 1%')};
    opacity: 0.05;
    z-index: 10;
    cursor:pointer;
    &:hover{
        opacity: 0.1;
    }
`

const CarouselDiv = styled.div<Left>`
    position: absolute;
    top: 50%;
    left:${({ idx }) => 34 - idx * 33.333}%;
    display: flex;
    flex-direction: row;
    width: 132%;
    height: 80%;
    align-items: center;
    transition: left 0.5s ease-in-out;
    transform: translate(0, -50%);
`
const ItemIndexDiv = styled.div`
    position: absolute;
    bottom: 2.5%;
    left: 50%;
    transform: translate(-50%, 0);
    ${flexCenter};
    width: 40%;
    height: 1.5%;
    background-color: white;
`
const ItemIndex = styled.div<IsSelected>`
    height: 100%;
    aspect-ratio: 1 / 1;
    margin: 0 1%;
    transform: rotate(${({ isSelected }) => isSelected ? '45deg' : 0});
    border: 1px solid ${({ theme }) => theme.fontColor.light_gray};
    background-color: ${({ isSelected }) => isSelected ? ({ theme }) => theme.fontColor.light_gray : 'rgba(0,0,0,0)'};
    transition: transform 0.5s ease;
    opacity: 0.5;
    z-index: 10;
    cursor: pointer;
`