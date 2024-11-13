import styled from "styled-components";
import { StacksProps, Functions } from "../../../Data/projectData";
import { useSelector, useDispatch } from "react-redux";
import { ContentDivider, highlight } from "../../../Styles/GlobalStyle";
import { LuExternalLink } from "react-icons/lu";

import { IoCloseSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

interface IsOpen {
  isOpen: boolean;
}

const ProjectModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.isOpen);
  const project = useSelector((state: any) => state.project);
  const closeModal = () => {
    dispatch({
      type: "Modal_Close",
    });
  };
  const modalContent = document.querySelector(".modal") as HTMLElement;
  if (modalContent !== null) {
    modalContent.scrollTop = 0;
  }

  const openLink = (e: any) => {
    if (e.target.innerText === "Github") {
      if (project.github.length < 1) {
        alert("준비중입니다!");
      } else {
        window.open(`${project.github}`, "_blank");
      }
    } else if (e.target.innerText === "Figma") {
      if (project.figma.length < 1) {
        alert("준비중입니다!");
      } else {
        window.open(`${project.figma}`, "_blank");
      }
    } else {
      if (project.deploy.length < 1) {
        alert("준비중입니다!");
      } else {
        window.open(`${project.deploy}`, "_blank");
      }
    }
  };
  return (
    <ModalBackground onClick={closeModal} isOpen={isOpen}>
      <ModalContainer className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <div className="close-modal">
            <IoCloseSharp size="36" onClick={closeModal}></IoCloseSharp>
          </div>
        </div>
        <ContentDivider>
          <div className="title">
            <GoDotFill size="24"></GoDotFill>
            <h2>프로젝트 개요</h2>
            <div></div>
          </div>
          <div className="content">
            <h3 className="name">{project.projectName}</h3>
            <div></div>
            <h3 className="date">{project.date}</h3>
          </div>
          <div className="describe">
            <p>{project.desc}</p>
          </div>
          <Links>
            <div onClick={openLink}>
              <span>Github</span>
              <LuExternalLink color="#bbbbbb"></LuExternalLink>
            </div>
            <div onClick={openLink}>
              <span>배포 링크</span>
              <LuExternalLink color="#bbbbbb"></LuExternalLink>
            </div>
            <div onClick={openLink}>
              <span>Figma</span>
              <LuExternalLink color="#bbbbbb"></LuExternalLink>
            </div>
          </Links>
        </ContentDivider>
        <ContentDivider>
          <div className="title">
            <GoDotFill size="24"></GoDotFill>
            <h2>Teck Stacks</h2>
            <div></div>
          </div>
          <div className="content">
            <TechUl>
              {project?.info?.stacks?.map((el: StacksProps, idx: number) => {
                return (
                  <li key={idx}>
                    <p className="stack-type">{el.type}</p>
                    <p className="stack-stackname">
                      {Array.isArray(el.stack) && el.stack.join(", ")}
                    </p>
                  </li>
                );
              })}
            </TechUl>
          </div>
        </ContentDivider>
        <ContentDivider>
          <div className="title">
            <GoDotFill size="24"></GoDotFill>
            <h2>My Role</h2>
            <div></div>
          </div>
          <MyroleDiv>
            {project?.info?.functions?.map((el: Functions, idx: number) => {
              return (
                <MyroleUl>
                  <h3>{el.title}</h3>
                  {el.function.map((content: string, idx: number) => {
                    return <li>{content}</li>;
                  })}
                </MyroleUl>
              );
            })}
          </MyroleDiv>
        </ContentDivider>
        <ContentDivider>
          <div className="title">
            <GoDotFill size="24"></GoDotFill>
            <h2>느낀점</h2>
            <div></div>
          </div>
          <div className="describe">
            {project?.info?.feeling
              ?.split("\n")
              .map((el: string, idx: number) => {
                return <p className="describe-lines">{el}</p>;
              })}
          </div>
        </ContentDivider>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div<IsOpen>`
  position: fixed;
  top: 0;
  left: 0;
  /* display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "15" : "-15")};
  transition: opacity 0.3s ease-in-out;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 80%;
  padding: 3%;
  background-color: white;
  border-radius: 10px;
  overflow-y: scroll;
  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    div.close-modal {
      cursor: pointer;
    }
  }
`;

const Links = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 5%;
    span {
      margin-right: 2px;
      font-size: 21px;
      @media (max-width: 600px) {
        font-size: 12px;
      }
      color: ${({ theme }) => theme.fontColor.light_gray};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const TechUl = styled.ul`
  width: 100%;
  margin-bottom: 1.5%;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 1% 0;
    p {
      font-size: 27px;
      @media (max-width: 600px) {
        font-size: 12px;
      }
      overflow-wrap: break-word;
    }
    p.stack-type {
      width: 12%;
      text-align: right;
      font-weight: 900;
    }
    p.stack-stackname {
      width: 85%;
      text-align: left;
      color: ${({ theme }) => theme.fontColor.dark_gray};
      font-weight: 500;
    }
  }
`;
const MyroleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1.5% 0;
`;
const MyroleUl = styled.ul`
  width: 100%;
  margin-bottom: 1.5%;
  h3 {
    ${highlight};
    margin-left: -2%;
    font-size: 24px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  li {
    margin: 1% 0;
    font-size: 20px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export default ProjectModal;
