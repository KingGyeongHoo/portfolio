import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Pallete from "../../../Pallete";
import { ModalBackground, ModalContainer, ModalContentDiv } from "../../Skills/Components/GraphModal";

const PModalContainer = styled(ModalContainer)`
    width: 1000px;
    height: 800px;
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
    font-weight: bold;
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
    font-weight: bold;
    color: ${Pallete.main_color};
`
const StacksDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
`
const Stacks = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0.3% 0;
`
const StacksType = styled.p`
    width: 15%;
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
    margin-bottom: 1%;
`
const FunctionTitle = styled.h1`
    color:#000000;
    font-size: 1.35em;
    font-weight: bold;
`
const FunctionLi = styled.li`
    width: 100%;
    margin: 0.2% 0;
    color: ${Pallete.font_gray};
    font-weight: bold;
`
const Feeling = styled.p`
    color: ${Pallete.font_gray};
    font-weight: bold;
    margin: 0.2% 0;
`
const ProjectsModal = () => {
    const dispatch = useDispatch()
    const projectModalOpen = useSelector((state: any) => state.pIsOpen)
    const project = useSelector((state: any) => state.project)
    const projectInfo = project.info
    const closeProjcetModal = () => {
        dispatch({ type: 'PModal_Close' })
    }
    return (
        <ModalBackground isOpen={projectModalOpen} onClick={closeProjcetModal}>
            <PModalContainer>
                <MotalTitleDiv>
                    <ModalTitle>{project.projectName}</ModalTitle>
                </MotalTitleDiv>
                <PModalContentDiv>
                    <Contents>
                        <ContentTitle>사용 스택</ContentTitle>
                        <StacksDiv>
                            {projectInfo.stacks.map((el:any, idx:number) => {
                                return (
                                    <Stacks>
                                        <StacksType>{el.type}</StacksType>
                                        <StackNamesDiv>
                                            {el.stack.map((e:string) => <StacksName>{e}</StacksName>)}
                                        </StackNamesDiv>
                                    </Stacks>
                                )
                            })}
                        </StacksDiv>
                    </Contents>
                    <Contents>
                        <ContentTitle>주요 기능</ContentTitle>
                        {projectInfo.functions.map((el:any) => {
                            return(
                                <>
                                    <FunctionTitle>{el.title}</FunctionTitle>
                                    <FunctionUl>
                                        {el.function.map((e:any) => <FunctionLi>{e}</FunctionLi>)}
                                    </FunctionUl>
                                </>
                            )
                        })}
                    </Contents>
                    <Contents>
                        <ContentTitle>느낀 점</ContentTitle>
                        {projectInfo.feeling.split('.').map((el:string) => <Feeling>{el}</Feeling>)}
                    </Contents>
                </PModalContentDiv>
            </PModalContainer>
        </ModalBackground>
    )
}
export default ProjectsModal