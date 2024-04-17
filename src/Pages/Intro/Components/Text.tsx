import styled from "styled-components";

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    margin-top: 3%;
`
const TextTitle = styled.h1`
    padding: 1% 0;
    margin-bottom: 1%;
    color: #ffffff;
    border-bottom: 10px solid #ffffff;
    font-size: 3em;
    @media (max-width: 850px) {
        font-size: 2.5em; /* 화면이 작아질 때의 너비 */
    }
    font-weight: 900;
`
const TextContent = styled.p`
    text-align: center;
    margin-top: 0.5%;
    color: #ffffff;
    font-size: 1.5em;
    @media (max-width: 1100px) {
        font-size: 1.0em;
    }
    @media (max-width: 850px) {
        font-size: 0.8em;
    }
    font-weight: 400;
`

const Text = () => {
    return (
        <TextContainer>
            <TextTitle>“세상에 안되는 일은 없다”</TextTitle>
            <TextContent>
                어떤 어려움에 부딪히더라도 포기하지 않고 끝까지 해내는 자세를 가지고 있습니다.
            </TextContent>
            <TextContent>
                끊임없는 도전으로 성장하며, 어떤 상황에서도 긍정적인 에너지를 유지하는 것이 제 자신의 모토입니다.
            </TextContent>
        
        </TextContainer>
    )
}
export default Text