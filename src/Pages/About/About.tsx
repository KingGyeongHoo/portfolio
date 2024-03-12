import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

import Title from "./Components/Title";
import Information from './Components/Information';
import Text from './Components/Text';

interface InfoProps{
    url:string;
}
export const Container = styled.div<InfoProps>`
    display: flex;
    width: 100%;
    padding: 0;
    background-color: ${Pallete.main_color};
    background-image: url(${props => props.url});
    background-size: cover;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 94%;
    padding: 3% 10%;
`

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    });
    const dispatch = useDispatch()

    useEffect(() => {
        if (inView) {
            dispatch({type:'About'})
        }
    }, [inView, dispatch]);

    return (
        <Container ref={ref} url={`${process.env.PUBLIC_URL}/img/content_bg_white.png`}>
            <ContentContainer>
                <Title title='About' color='#ffffff'></Title>
                <Information></Information>
                <Text></Text>
            </ContentContainer>
        </Container>
    )
}
export default About