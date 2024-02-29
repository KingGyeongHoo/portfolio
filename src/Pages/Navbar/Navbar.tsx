import styled, {keyframes, css} from "styled-components"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pallete from "../../Pallete";
import { readBuilderProgram } from "typescript";

interface HighlightProps{
    isShow:boolean;
}

const NavbarContainer = styled.div<HighlightProps>`
    position: fixed;
    top:0;
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    padding: 0 2%;
    background-color: ${props => props.isShow ? 'rgba(0,0,0,0)' : '#ffffff'};
    z-index: 50;
`
const Logo = styled.img`
    width: 4%;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 35%;
`
const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    width:12%;
`
const PageSpan = styled.span`
    color: ${Pallete.main_color};
    margin-bottom: 5%;
`
const Highlight = styled.div<HighlightProps>`
    width: 100%;
    height: 12%;
    background-color: ${Pallete.main_color};
    opacity: ${props => props.isShow ? '1' : '0'};
`
const Navbar = () => {
    const dispatch = useDispatch()
    const curPage:number = useSelector((state:any) => state.page)
    const pageList:string[] = ['Main', 'About', 'Skills', 'Project']

    const movePage = (e:any):void => {
        dispatch({type: e.target.innerText})

        window.scrollTo({
            top: document.body.scrollHeight * -1,
            //클릭한 곳에 따라 옮기게 설정해야 함
            behavior: 'smooth' // 부드럽게 스크롤
          });
    }
    return (
        <NavbarContainer isShow={curPage ===  0? true : false}>
            <Logo src={`${process.env.PUBLIC_URL}/img/logo.png`}></Logo>
            <PageContainer>
                {pageList.map((el:string, idx:number) => {
                    return(
                        <PageDiv>
                            <PageSpan onClick={movePage}>{el}</PageSpan>
                            <Highlight isShow={idx === curPage ? true : false}/>
                        </PageDiv>
                    )
                })} 
            </PageContainer>
        </NavbarContainer>
    )
}
export default Navbar