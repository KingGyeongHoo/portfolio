import styled, {keyframes, css} from "styled-components"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../Pallete";
import { readBuilderProgram } from "typescript";

interface Navbar{
    isShow:boolean;
    idx: number;
}
interface HighlightProps{
    idx:number;
}

const NavbarContainer = styled.div<Navbar>`
    position: fixed;
    top:0;
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    padding: 0 2%;
    background-color: ${props => props.idx < 2 ? '#ffffff' : Pallete.main_color};
    z-index: 50;
`
const Logo = styled.img`
    width: 4%;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%; 
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20%;
    width: 100%;
`
const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:12%;
    padding: 0 3%;
    font-size: 1.5em;
`
const PageSpan = styled.span<HighlightProps>`
    color: ${props => props.idx < 2 ? Pallete.main_color : '#ffffff'};
    margin-bottom: 5%;
`
const HighlightDiv = styled.div`
    width: 100%;
`
const Highlight = styled.div<HighlightProps>`
    width: 12%;
    padding: 0.5% 0;
    background-color: ${props => props.idx < 2 ? Pallete.main_color : '#ffffff'};
    margin-left: ${props => 23 + (props.idx * 18)}%;
    transition: margin-left 0.5s ease; /* margin-left 변경 시 부드럽게 이동하는 애니메이션 설정 */
`
const Navbar = () => {
    const dispatch = useDispatch()
    const curPage:number = useSelector((state:any) => state.page)
    const pageList:string[] = ['Main', 'About', 'Skills', 'Project']
    
    const movePage = (e: any, idx: number):void => {
        window.scrollTo({
            top: window.innerHeight * idx,
            behavior: 'smooth'
          });
    }
    return (
        <NavbarContainer isShow={curPage ===  0? true : false} idx={curPage}>
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