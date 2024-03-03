import { useInView } from 'react-intersection-observer';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import Pallete from "../../Pallete"

const InfoContainer = styled.div`
    flex-direction: row;
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: purple;
`

const Project = () => {
    const [ref, inView] = useInView({
        threshold: 0.9
    });
    const dispatch = useDispatch()

    useEffect(() => {
        if (inView) {
            dispatch({type:'Project'})
        }
    }, [inView]);

    return (
        <InfoContainer ref={ref}>
        </InfoContainer>
    )
}
export default Project