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
    width: 90%;
    height: 6%;
    padding: 2% 5%;
    background-color: ${Pallete.main_color};
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
    padding-bottom: 5%;
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
    margin-right: 8px;
`
const FunctionUl = styled.ul`
    width: 100%;
    margin-bottom: 7.5%;
`
const FunctionTitle = styled.h1`
    color:#000000;
    font-size: 1.35em;
    font-weight: 900;
`
const FunctionLi = styled.li`
    width: 100%;
    margin: 1% 0;
    color: ${Pallete.font_gray};
    font-weight: 400;
`
const Feeling = styled.p`
    color: ${Pallete.font_gray};
    font-weight: 400;
    margin: 0.75% 0;
`
const ProjectsModal = () => {
    const dispatch = useDispatch()
    const projectModalOpen = useSelector((state: any) => state.pIsOpen)
    const project = useSelector((state: any) => state.project)
    const projectInfo = project.info
    const closeProjcetModal = () => {
        dispatch({ type: 'PModal_Close' })
    }
    const modalContent = document.querySelector('.modal') as HTMLElement;
    if(modalContent !== null){
        modalContent.scrollTop = 0;
    }
    return (
        <ModalBackground isOpen={projectModalOpen} onClick={closeProjcetModal}>
            <PModalContainer className='modal'>
                <MotalTitleDiv>
                    <ModalTitle>{project.projectName}</ModalTitle>
                </MotalTitleDiv>
                <PModalContentDiv>
                    <Contents>
                        <ContentTitle>사용 스택</ContentTitle>
                        <StacksDiv>
                            {projectInfo.stacks.map((el:StacksProps, idx:number) => {
                                return (
                                    <Stacks key={idx}>
                                        <StacksType>{el.type}</StacksType>
                                        <StackNamesDiv>
                                            {el.stack.map((e:string, idx:number) => <StacksName key={idx}>{e}</StacksName>)}
                                        </StackNamesDiv>
                                    </Stacks>
                                )
                            })}
                        </StacksDiv>
                    </Contents>
                    <Contents>
                        <ContentTitle>주요 기능</ContentTitle>
                        {projectInfo.functions.map((el:Functions, idx:number) => {
                            return(
                                <div key={idx}>
                                    <FunctionTitle>{el.title}</FunctionTitle>
                                    <FunctionUl>
                                        {el.function.map((e:string, idx:number) => <FunctionLi key={idx}>{e}</FunctionLi>)}
                                    </FunctionUl>
                                </div>
                            )
                        })}
                    </Contents>
                    <Contents>
                        <ContentTitle>느낀 점</ContentTitle>
                        {projectInfo.feeling.split('.').map((el:string, idx:number) => <Feeling key={idx}>{el}</Feeling>)}
                    </Contents>
                </PModalContentDiv>
            </PModalContainer>
        </ModalBackground>
    )
}
export default ProjectsModal