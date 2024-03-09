import styled, {keyframes, css} from "styled-components"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../Pallete";
import { readBuilderProgram } from "typescript";

interface NavbarProps{
    curPage: number;
}
interface HighlightProps{
    idx:number;
}

const NavbarContainer = styled.div<NavbarProps>`
    position: fixed;
    right: 30px;
    bottom:50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    height: 160px;
    padding: 20px 10px;
    background-color: ${props => props.curPage > 1 ? Pallete.main_color : '#ffffff'};
    color: ${props => props.curPage < 2 ? Pallete.main_color : '#ffffff'};
    z-index: 50;
    border-radius: 50px;
    @media (max-width: 985px) {
        right: 10px;
    }
    @media (max-width: 910px) {
        display: none; /* 화면이 더 작아질 때의 너비 */
    }
`
const Logo = styled.img`
    width: 40px;
    height: 40px;
`
const CurPage = styled.p`
    margin-bottom: 45px;
    transform: rotate(90deg);
    font-size: 1.5em;
    font-weight: bold;
`
const Navbar = () => {
    const [fontSize, setFontSize] = useState(16)

    window.addEventListener("resize", () => {
        setFontSize(Math.round(window.innerWidth/80))
    });

    const dispatch = useDispatch()
    const curPage:number = useSelector((state:any) => state.page)
    const pageList:string[] = ['Main', 'About', 'Skills', 'Projects']
    console.log(curPage)
    const movePage = (e: any, idx: number):void => {
        dispatch({type: e.target.innerText})
        window.scrollTo({
            top: window.innerHeight * idx,
            behavior: 'smooth'
          });
    }
    return (
        <NavbarContainer curPage={curPage}>
            <Logo src={`${process.env.PUBLIC_URL}/img/logo.png`}></Logo>
            <CurPage>{pageList[curPage]}</CurPage>
        </NavbarContainer>
    )
}
export default Navbar