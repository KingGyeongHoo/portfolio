import styled from "styled-components"

export const MainFont = () => {
    return (
        <FontDiv>
            <EmptyFont>HI, I'M</EmptyFont>
            <EmptyFont>FRONTEND</EmptyFont>
            <EmptyFont>DEVELOPER</EmptyFont>
            <FilledFont>SONG GYEONG HOO</FilledFont>
        </FontDiv>
    )
}

const FontDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`
const EmptyFont = styled.p`
    line-height: 105px;
    margin: 0;
    padding:0;
    font-size: 7em;
    color: ${({ theme }) => theme.bgColor.main};
    font-weight: 900;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
`
const FilledFont = styled.p`
    line-height: 105px;
    margin: 0;
    padding:0;
    font-size: 7em;
    color: black;
    font-weight: 900;
`