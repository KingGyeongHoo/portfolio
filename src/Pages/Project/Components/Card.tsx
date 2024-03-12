import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Pallete from "../../../Pallete";

import { projectData } from "../../../Data/projectData";

interface BgProps {
  background: string;
}
interface ImgProps {
  percentage: number;
}
interface FigmaProps {
  color: string;
}
interface Hover {
  isHover: boolean;
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CardDiv = styled.div<Hover>`
  position: relative;
  width: 450px;
  height: 540px;
  margin-bottom: 6%;
  padding-bottom: 1%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  transform: ${props => props.isHover ? 'scale(1.05)' : ''};
  overflow: hidden;
`;
const LogoDiv = styled.div<BgProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background: ${props => props.background};
`;
const LogoImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const LogoImg = styled.img<ImgProps>`
  width: ${props => props.percentage}%;
`;
const TitleDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 5%;
  padding: 3% 5%;
  transform: translate(-50%, -50%);
  background-color: ${Pallete.main_color};
`;
const TitleSpan = styled.p`
  color: #ffffff;
  font-size: 2em;
  font-weight: 900;
  text-align: center;
`;
const DescDiv = styled.div`
  width: 100%;
  height: 50%;
  background-color: #ffffff;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 75%;
  margin-top: 6.5%;
`;
const ContentTitle = styled.p`
  width: 90%;
  height: 15%;
  color: ${Pallete.main_color};
  margin: 3% 0 2% 0;
  font-size: 1.5em;
  text-align: center;
  font-weight: 900;
`;
const ContentDescDiv = styled.div`
  width: 90%;
  height: 35%;
`
const ContentDesc = styled.p`
  text-align: center;
  color: ${Pallete.font_gray};
  font-size: 0.9em;
`;
const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 0 5%;
`;
const Github = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  padding: 1% 2%;
  background: #000000;
  border-radius: 50px;
  cursor: pointer;
`;
const Netlify = styled(Github)`
  background: linear-gradient(to bottom, #23c3b8, #45a1bc);
  cursor: pointer;
`;
const Figma = styled(Github)`
  background: #f7f7f7;
  cursor: pointer;
`;
const LinkImg = styled.img`
  width: 30%;
`;
const LinkSpan = styled.p`
  margin-right: 15%;
  color: #ffffff;
  font-size: 0.8em;
  font-weight: 900;
`;
const FigmaSpan = styled.span<FigmaProps>`
  color: ${(props) => props.color};
`;
const ShowDetailDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 92%;
  padding: 0 4%;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;
const ShowDetail = styled.p`
  font-size: 1em;
  color: ${Pallete.main_color};
`;
const Arrow = styled.img`
  width: 80%;
`;

const Card = () => {
  const [hover, setHover] = useState(999)
  const dispatch = useDispatch()
  const openWindow = (link: string) => {
    if (link.length < 1) {
      return () => alert('준비중입니다!')
    } else {
      if (link.includes('buyrricade')) {
        return () => {
          alert('sample Id : sample@gmail.com\nsample Pw : password123!')
          window.open(link, '_blank')
        }
      } else {
        return () => { window.open(link, '_blank') }
      }
    }
  }
  const openProjcetModal = (project: string) => {
    dispatch({ type: project })
    dispatch({ type: 'PModal_Open' })
  }
  return (
    <CardContainer>
      {projectData.map((el: any, idx: number) => {
        return (
          <>
            <CardDiv key={idx} isHover={hover === idx} onMouseOver={() => setHover(idx)} onMouseLeave={() => setHover(999)}>
              <TitleDiv>
                <TitleSpan>{el.projectName}</TitleSpan>
              </TitleDiv>
              <LogoDiv background={el.background}>
                <LogoImgDiv>
                  <LogoImg
                    src={`${process.env.PUBLIC_URL}/img/projects/${el.file}`}
                    percentage={el.percentage}
                  ></LogoImg>
                </LogoImgDiv>
              </LogoDiv>
              <DescDiv>
                <ContentDiv>
                  <ContentTitle>{el.title}</ContentTitle>
                  <ContentDescDiv>
                    {el.desc.split('.').map((el: string) => <ContentDesc key={idx}>{el}</ContentDesc>)}
                  </ContentDescDiv>
                  <LinkDiv>
                    <Github onClick={openWindow(el.github)}>
                      <LinkImg
                        src={`${process.env.PUBLIC_URL}/img/projects/github.png`}
                      ></LinkImg>
                      <LinkSpan>Github</LinkSpan>
                    </Github>
                    <Netlify onClick={openWindow(el.deploy)}>
                      <LinkImg
                        src={`${process.env.PUBLIC_URL}/img/projects/netlify.png`}
                      ></LinkImg>
                      <LinkSpan>배포링크</LinkSpan>
                    </Netlify>
                    <Figma onClick={openWindow(el.figma)}>
                      <LinkImg
                        src={`${process.env.PUBLIC_URL}/img/projects/figma.png`}
                      ></LinkImg>
                      <LinkSpan>
                        <FigmaSpan color="#f24e1f">F</FigmaSpan>
                        <FigmaSpan color="#ff7262">I</FigmaSpan>
                        <FigmaSpan color="#a259ff">G</FigmaSpan>
                        <FigmaSpan color="#1abcfe">M</FigmaSpan>
                        <FigmaSpan color="#0dd084">A</FigmaSpan>
                      </LinkSpan>
                    </Figma>
                  </LinkDiv>
                </ContentDiv>
                <ShowDetailDiv>
                  <Button onClick={() => openProjcetModal(el.projectName)}>
                    <ShowDetail>Show Detail</ShowDetail>
                    <Arrow
                      src={`${process.env.PUBLIC_URL}/img/projects/Arrow.png`}
                    ></Arrow>
                  </Button>
                </ShowDetailDiv>
              </DescDiv>
            </CardDiv>
          </>
        );
      })}
    </CardContainer>
  );
};

export default Card;
