import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { Title } from "../../../Styles/GlobalStyle";
import { flexCenter } from "../../../Styles/GlobalStyle";
import { EducationProps, EducationData } from "../../../Data/EducationData";

export const Education = () => {
    return (
        <EducationContainer>
            <Title>EDUCATION</Title>
            {EducationData.map((el: EducationProps, idx: number) => {
                return (
                    <EducationContent>
                        <div className="edu-title">
                            <GoDotFill size='24'></GoDotFill>
                            <h2>{el.name}</h2>
                            <div></div>
                        </div>
                        <div className="edu-content">
                            <h3>{el.place}</h3>
                            <div></div>
                            <h3>{el.date}</h3>
                        </div>
                    </EducationContent>
                )
            })}
        </EducationContainer>
    )
}

const EducationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3%;
`
const EducationContent = styled.div`
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    margin: 1% 0;
    .edu-title{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: 1% 0;
        h2{
            margin: 0 2%;
            color: black;
            font-size: 33px;
            font-weight: 700;
        }
        div{
            flex: 1;
            height: 3px;
            background-color: black;
        }
    }
    .edu-content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 90%;
        height: 32px;
        h3{
            font-size: 24px;
            color: ${({ theme }) => theme.fontColor.dark_gray};
        }
        div{
            width: 6px;
            height: 30px;
            margin: 0 2%;
            background-color: ${({ theme }) => theme.fontColor.dark_gray};
        }
    }
`