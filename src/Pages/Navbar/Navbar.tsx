import styled, {keyframes, css} from "styled-components"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../Pallete";
import { readBuilderProgram } from "typescript";

interface NavbarProps{
    isShow:boolean;
    idx: number;
    fontSize: number;
}
interface HighlightProps{
    idx:number;
}

const NavbarContainer = styled.div<NavbarProps>`
    position: fixed;
    top:0;
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    height: 45px;
    padding: 0.3% 2%;
    font-size: ${props => props.fontSize}px;
    background-color: ${props => props.idx < 2 ? (props.idx < 1 ? 'rgba(0,0,0,0)' : '#ffffff') : Pallete.main_color};
    z-index: 50;
`
const Logo = styled.img`
    width: 40px;
    height: 40px;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%; 
    height: 100%;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    width: 90%;
    height: 80%;
`
const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:20%;
    height: 100%;
    padding: 0 2.5%;
    font-size: 1.35em;
    cursor: pointer;
`
const PageSpan = styled.span<HighlightProps>`
    color: ${props => props.idx < 2 ? Pallete.main_color : '#ffffff'};
    margin-bottom: 5%;
`
const HighlightDiv = styled.div`
    padding: 0 5%;
    width: 90%;
    height: 15%;
`
const Highlight = styled.div<HighlightProps>`
    width: 20%;
    height: 100%;
    background-color: ${props => props.idx < 2 ? Pallete.main_color : '#ffffff'};
    margin-left: ${props => 2.5 + (props.idx * 25)}%;
    transition: margin-left 0.5s ease; /* margin-left 변경 시 부드럽게 이동하는 애니메이션 설정 */
`
const Navbar = () => {
    const [fontSize, setFontSize] = useState(16)

    window.addEventListener("resize", () => {
        setFontSize(Math.round(window.innerWidth/80))
    });

    const dispatch = useDispatch()
    const curPage:number = useSelector((state:any) => state.page)
    const pageList:string[] = ['Main', 'About', 'Skills', 'Projects']
    
    const movePage = (e: any, idx: number):void => {
        dispatch({type: e.target.innerText})
        window.scrollTo({
            top: window.innerHeight * idx,
            behavior: 'smooth'
          });
    }
    return (
        <NavbarContainer isShow={curPage ===  0? true : false} idx={curPage} fontSize={fontSize}>
            <Logo src={`${process.env.PUBLIC_URL}/img/logo.png`}></Logo>
            <ListContainer>
                <PageContainer>
                    {pageList.map((el:string, idx:number) => {
                        return(
                            <PageDiv>
                                <PageSpan onClick={(e) => movePage(e, idx)} idx={curPage}>{el}</PageSpan>
                            </PageDiv>
                        )
                    })} 
                </PageContainer>
                <HighlightDiv>
                    <Highlight idx={curPage}></Highlight>
                </HighlightDiv>
            </ListContainer>
            
        </NavbarContainer>
    )
}
export default Navbar