import styled from "styled-components"
import { Education } from "./Components/Education"
import { Skill } from "./Components/Skill"

const Competency = () => {

    return (
        <CompetencyContainer>
            <Education></Education>
            <Skill></Skill>
        </CompetencyContainer>
    )
}

const CompetencyContainer = styled.div`
    width: 94%;
    padding: 5% 3%;
    background-color: ${({theme}) => theme.bgColor.main};
`
export default Competency