import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Pallete from "../../../Pallete";
import { ModalBackground, ModalContainer, ModalContentDiv } from "../../Skills/Components/GraphModal";
import { StacksProps, Functions } from "../../../Data/projectData";

const PModalContainer = styled(ModalContainer)`
    width: 1200px;
    @media (max-width: 1300px) {
        width: 800px;
    }
    @media (max-width: 1100px) {
        width: 600px;
    }
    height: 800px;
    @media (max-height: 720px) {
        height: 500px;
    }
    padding: 0;
    overflow: scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar {
    display: none;
}
`
const PModalContentDiv = styled(ModalContentDiv)`
    width: 90%;
    height: 100%;
    padding: 3% 5%;
`
const MotalTitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 6%;
    padding: 2% 5%;
    background-color: ${Pallete.main_color};
`
const CloseModal = styled.span`
    font-size: 30px;
    color: white;
    cursor: pointer;
`
const ModalTitle = styled.h1`
    color: #ffffff;
    font-size: 2em;
    font-weight: 900;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 3%;
`
const ContentTitle = styled.p`
    margin-bottom: 2%;
    border-bottom: 8px solid ${Pallete.main_color};
    font-size: 2em;
    font-weight: 900;
    color: ${Pallete.main_color};
`
const StacksDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.5em;
    font-weight: 900;
`
const Stacks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 0.3% 0;
`
const StacksType= styled.p`
    width: 10%;
    margin-right: 5%;
    color: #000000;
    text-align: right;
`
const StackNamesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    color: ${Pallete.font_gray};
`
const StacksName = styled.p`
    word-wrap:break-word;
`
const FunctionUl = styled.ul`
    width: 100%;
    margin-bottom: 3%;
    padding: 0;
`
const FunctionTitle = styled.h1`
    color:#000000;
    font-size: 1.35em;
    font-weight: 900;
`
const FunctionLi = styled.li`
    width: 90%;
    margin: 1% 0 1% 3%;
    color: ${Pallete.font_gray};
    font-weight: 400;
    p {
        word-wrap:break-word;
        font-size: 1.2em;
    }
    span{
            color: ${Pallete.main_color_dark};
            font-size: 1.5em;
            font-weight: bold;
        }
`
const Feeling = styled.p`
    color: ${Pallete.font_gray};
    font-weight: 400;
    margin: 0.5% 0;
`
const ProjectsModal = () => {
    const dispatch = useDispatch()
    const projectModalOpen = useSelector((state: any) => state.pIsOpen)
    const project = useSelector((state: any) => state.project)
    const projectInfo = project.info
    const closeProjcetModal = () => {
        dispatch({ type: 'PModal_Close' })
    }
    useEffect(() => {
        const handleKeyDown = (e:KeyboardEvent) => {
          if (e.key === 'Escape') {
            closeProjcetModal()
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    const modalContent = document.querySelector('.modal') as HTMLElement;
    if(modalContent !== null){
        modalContent.scrollTop = 0;
    }
    return (
        <ModalBackground isOpen={projectModalOpen} onClick={closeProjcetModal}>
            <PModalContainer
             className='modal'
              onClick={(e) => e.stopPropagation()}
            >
                <MotalTitleDiv>
                    <ModalTitle>{project.projectName}</ModalTitle>
                    <CloseModal onClick={closeProjcetModal}>X</CloseModal>
                </MotalTitleDiv>
                <PModalContentDiv>
                    <UseStacks stacks={projectInfo.stacks}></UseStacks>
                    <MainFunction mainFunction={projectInfo.mainFunction}></MainFunction>
                    <MyRole functions={projectInfo.functions}></MyRole>
                    <Feelings feeling={projectInfo.feeling}></Feelings>
                </PModalContentDiv>
            </PModalContainer>
        </ModalBackground>
    )
}

const UseStacks = ({stacks}:any) => {
    return (
        <Contents>
            <ContentTitle>사용 스택</ContentTitle>
            <StacksDiv>
                {stacks.map((el:StacksProps, idx:number) => {
                    return (
                        <Stacks key={idx}>
                            <StacksType>{el.type}</StacksType>
                            <StackNamesDiv>
                                <StacksName>{el.stack}</StacksName>
                            </StackNamesDiv>
                        </Stacks>
                    )
                })}
            </StacksDiv>
        </Contents>
    )
}

const MainFunction = ({mainFunction}:any) => {
    return (
        <Contents>
            <ContentTitle>주요 기능</ContentTitle>
            <FunctionUl>
                {mainFunction.map((e:string, idx:number) => <FunctionLi key={idx}><span>{e}</span></FunctionLi>)}
            </FunctionUl>
        </Contents>
    )
}

const MyRole = ({functions}:any) => {
    return (
        <Contents>
            <ContentTitle>My Role</ContentTitle>
            {functions.map((el:Functions, idx:number) => {
                return(
                    <FunctionUl key={idx}>
                        <FunctionTitle>{el.title}</FunctionTitle>
                        {el.function.map((e:string, idx:number) => <FunctionLi key={idx}><p>{e}</p></FunctionLi>)}
                    </FunctionUl>
                )
            })}
        </Contents>
    )
}

const Feelings = ({feeling}:any) => {
    return (
        <Contents>
            <ContentTitle>느낀 점</ContentTitle>
            {feeling.split('.').map((el:string, idx:number) => <Feeling key={idx}>{el}</Feeling>)}
        </Contents>
    )
}

export default ProjectsModal