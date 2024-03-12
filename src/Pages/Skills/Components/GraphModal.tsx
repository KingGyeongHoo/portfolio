import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

import Pallete from "../../../Pallete";
import { BgCircles } from "../../Main/Components/MainLeft";
import { SkillProf } from "./SkillBox";
import { fadeIn, fadeOut } from "../../About/Components/Information";
import Graph from "./Graph";
interface Modal {
  isOpen: boolean;
}

export const ModalBackground = styled.div<Modal>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${(props) =>
    props.isOpen
      ? css`
          ${fadeIn} 0.3s linear forwards
        `
      : css`
          ${fadeOut} 0.3s linear forwards
        `};
  z-index: 110;
`;
export const ModalContainer = styled.div`
  position: relative;
  width: 750px;
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 400px;
    font-size: 0.75em;
  }
  height: 750px;
  @media (max-height: 850px) {
    height: 500px;
    font-size: 0.75em;
  }
  padding: 3%;
  background-color: #ffffff;
  border-radius: 40px;
  overflow: hidden;
`;
export const ModalContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ModalSkillName = styled.h1`
  color: ${Pallete.main_color};
  font-size: 4em;
`;
const ModalProf = styled(SkillProf)`
  font-size: 2em;
`;
const GraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  margin: 3% 0 10% 0;
`;
const TotalRate = styled.p`
  margin-top: -5%;
  font-size: 2em;
  font-weight: 900;
`;
const Describe = styled.p`
  margin: 0.2% 0;
  font-weight: 400;
`;
const GraphModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.isOpen);
  const skillInfo = useSelector((state: any) => state.skill);
  const closeModal = () => {
    dispatch({
      type: "Modal_Close",
    });
  };
  return (
    <ModalBackground isOpen={isOpen} onClick={closeModal}>
      <ModalContainer>
        <ModalContentDiv>
          <ModalSkillName>{skillInfo.skill}</ModalSkillName>
          <ModalProf prof={skillInfo.prof}>
            {skillInfo.prof > 2
              ? "Familiar"
              : skillInfo.prof > 1
              ? "Learning"
              : "Experienced"}
          </ModalProf>
          <GraphDiv>
            <Graph info={skillInfo.info}></Graph>
            <TotalRate>
              Total Rate :{" "}
              {skillInfo.info.reduce(
                (acc: number, cur: any) => acc + cur.rate,
                0
              ) / 5}
            </TotalRate>
          </GraphDiv>
          {skillInfo.text.split(".").map((el: any, idx:number) => (
            <Describe key={idx}>{el}</Describe>
          ))}
        </ModalContentDiv>
        <BgCircles></BgCircles>
      </ModalContainer>
    </ModalBackground>
  );
};

export default GraphModal;
