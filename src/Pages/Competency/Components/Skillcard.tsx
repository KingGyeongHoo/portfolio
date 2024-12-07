import styled from "styled-components";
import { flexCenter } from "../../../Styles/GlobalStyle";
import { Skills } from "../../../Data/SkillData";

const SkillCard = ({ skill, url, description }: Skills) => {
  return (
    <SkillCardContainer>
      <img src={`https://simpleicons.org/icons/${url}.svg`} alt={skill}></img>
      <span>{skill}</span>
      <p>{description}</p>
    </SkillCardContainer>
  );
};

const SkillCardContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  width: 19%;
  aspect-ratio: 1 / 1;
  margin: 0.5%;
  background-color: #f9f9f9;
  color: black;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition-property: color, transform; /* 변화를 줄 속성 목록 */
  transition-duration: 0.3s, 0.3s; /* 각 속성에 대한 전환 지속 시간 */
  transition-timing-function: ease, ease;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.fontColor.highlight};
    & > img {
      filter: invert(56%) sepia(27%) saturate(313%) hue-rotate(166deg)
        brightness(98%) contrast(95%);
      transition: filter 0.3s ease;
    }
  }
  img {
    width: 30%;
    aspect-ratio: 1 / 1;
  }
  span {
    text-align: center;
    margin-top: 20px;
    font-family: "Pretendard-Bold";
    font-size: 30px;
    @media (max-width: 1024px) {
      font-size: 20px;
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      font-size: 10px;
      margin-top: 10px;
    }
  }
  p {
    text-align: center;
    margin-top: 20px;
    color: gray;
    font-family: "Pretendard-regular";
    @media (max-width: 1024px) {
      font-size: 10px;
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      font-size: 7px;
      margin-top: 10px;
    }
  }
`;
export default SkillCard;
