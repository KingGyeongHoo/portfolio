import styled from "styled-components"
import { Education } from "./Components/Education"

const Skills = () => {

    return (
        <SkillContainer>
            <Education></Education>
        </SkillContainer>
    )
}

const SkillContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5%;
    background-color: ${({theme}) => theme.bgColor.main};
`
export default Skills