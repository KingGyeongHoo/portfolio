import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

interface InfoProps{
    num:string
}
const InfoContainer = styled.div`
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: ${Pallete.main_color};
`

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.9
    });
    const dispatch = useDispatch()

    useEffect(() => {
        if (inView) {
            dispatch({type:'About'})
        }
    }, [inView]);

    return (
        <InfoContainer ref={ref}>
        </InfoContainer>
    )
}
export default About