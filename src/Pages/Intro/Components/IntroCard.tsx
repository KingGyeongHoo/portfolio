import styled from "styled-components";
import { flexCenter, highlight } from "../../../Styles/GlobalStyle";

import { MdArticle } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { LuExternalLink } from "react-icons/lu";

interface Props {
  iconName: string;
}

const Content = ({ iconName }: Props) => {
  const openLink = (e: any, target: string) => {
    if (target === "solved") {
      window.open("https://solved.ac/profile/fmaxgo", "_blank");
    } else {
      window.open("https://kinggh.tistory.com/", "_blank");
    }
  };
  if (iconName === "blog") {
    return (
      <>
        <div>
          <MdArticle size="100" />
          <h1>BLOG</h1>
        </div>

        <div>
          <p>
            학습한 내용을 정리하기 위해 <span>블로그</span>
            <LuExternalLink
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "2px",
                marginRight: "2px",
                filter:
                  "invert(60%) sepia(37%) saturate(257%) hue-rotate(166deg) brightness(92%) contrast(84%)",
                cursor: "pointer",
              }}
              onClick={(e) => openLink(e, "blog")}
            />
            를 운영 중입니다.
          </p>
          <p>Frontend Skill, 코딩 테스트 풀이, CS 지식 등 </p>
          <p>
            다양한 분야의 게시물을 <span>100개</span> 이상 작성하였습니다.
          </p>
        </div>
      </>
    );
  } else if (iconName === "gtq") {
    return (
      <>
        <div>
          <PiCertificateFill size="100" />
          <h1>GTQ</h1>
        </div>
        <div>
          <p>UI 디자인 및 사용자 경험 개선을 위해</p>
          <p>
            <span>GTQ 1급(Photoshop)</span> 자격증을 취득했습니다.
          </p>
          <p>이를 활용하여 UI/웹 디자인을 담당하기도 했습니다.</p>
        </div>
      </>
    );
  } else if (iconName === "algorithm") {
    return (
      <>
        <div>
          <GiArtificialIntelligence size="100" />
          <h1>ALGORITHM</h1>
        </div>
        <div>
          <p>
            <span>Javascript</span> 활용 능력을 높이고자
          </p>
          <p>백준, 프로그래머스 알고리즘 문제를 꾸준히 풀고 있습니다.</p>
          <p>
            현재 <span>골드3</span>
            <LuExternalLink
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "2px",
                marginRight: "2px",
                filter:
                  "invert(60%) sepia(37%) saturate(257%) hue-rotate(166deg) brightness(92%) contrast(84%)",
                cursor: "pointer",
              }}
              onClick={(e) => openLink(e, "solved")}
            />
            티어를 유지하고 있습니다.
          </p>
        </div>
      </>
    );
  } else if (iconName === "projects") {
    return (
      <>
        <div>
          <PiProjectorScreenChartFill size="100" />
          <h1>PROJECTS</h1>
        </div>
        <div>
          <p>프론트엔드 개발 경험 및 협업 능력을 배양하고자</p>
          <p>금융, 부동산, 전기차, 핸드폰 요금제 등</p>
          <p>
            <span>4개</span>의 프로젝트를 수행했습니다
          </p>
        </div>
      </>
    );
  } else {
    return null;
  }
};
const IntroCard = ({ iconName }: Props) => {
  return (
    <CardContainer>
      <Content iconName={iconName}></Content>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
  margin: 2% 0;
  padding: 0 1%;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  div {
    ${flexCenter};
    flex-direction: column;
    h1 {
      width: 100%;
      color: black;
      font-family: "Pretendard-Bold";
      font-size: 36px;
      @media (max-width: 600px) {
        font-size: 18px;
      }
      text-align: center;
    }
    p {
      margin: 3px 0;
      color: ${({ theme }) => theme.fontColor.dark_gray};
      font-weight: 900;
      span {
        ${highlight}
      }
      @media (max-width: 600px) {
        font-size: 10px;
      }
    }
  }
`;

const DirectImg = styled.img`
  width: 5px;
  height: 5px;
  filter: invert(60%) sepia(37%) saturate(257%) hue-rotate(166deg)
    brightness(92%) contrast(84%);
`;

export default IntroCard;
