import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../Pallete";
import { readBuilderProgram } from "typescript";

interface NavbarProps {
  curPage: number;
  isSelected: boolean;
}
const NavButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50px;
  height: 160px;
  padding: 20px 10px;
  transform: translate(0%, 50%);
  z-index: 45;
  @media (max-width: 985px) {
    right: 10px;
  }
  @media (max-width: 910px) {
    display: none; /* 화면이 더 작아질 때의 너비 */
  }
`;
const SelectButton = styled.div<NavbarProps>`
  width: 12px;
  height: 12px;
  border: ${(props) =>
    props.curPage > 1
      ? `1px solid ${Pallete.main_color}`
      : "1px solid #ffffff"};
  transform: ${(props) => (props.isSelected ? "rotate(45deg)" : "")};
  background-color: ${(props) =>
    props.isSelected
      ? props.curPage > 1
        ? Pallete.main_color
        : "#ffffff"
      : ""};
  transition: transform 0.3s ease;
`;
const Navbar = () => {
  const [fontSize, setFontSize] = useState(16);

  window.addEventListener("resize", () => {
    setFontSize(Math.round(window.innerWidth / 80));
  });

  const dispatch = useDispatch();
  const curPage: number = useSelector((state: any) => state.page);
  const pageList: string[] = ["Main", "About", "Skills", "Projects"];

  const movePage = (el:string): void => {
    dispatch({ type: el });
    const nextSection = document.querySelector(`.${el}`) as HTMLElement;
    if (nextSection) {
      const nextSectionTop = nextSection.offsetTop;
      window.scrollTo({
        top: nextSectionTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <NavButton>
        {pageList.map((el: any, idx: number) => (
          <SelectButton
            curPage={curPage}
            isSelected={curPage === idx}
            onClick={() => movePage(el)}
          ></SelectButton>
        ))}
      </NavButton>
    </>
  );
};
export default Navbar;
