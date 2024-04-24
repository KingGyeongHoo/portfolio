import styled from "styled-components";

export const Linkbar = () => {
    const openLink = (e:any) => {
        const target = e.target as HTMLElement;
        if(target && target.innerText === 'Github'){
            window.open("https://github.com/KingGyeongHoo", "_blank");
        } else {
            window.open("https://kinggh.tistory.com/", "_blank");
        }
    }
    return(
        <LinkbarContainer>
            <span onClick={openLink}>Github</span>
            <span onClick={openLink}>Blog</span>
        </LinkbarContainer>
    )
}

const LinkbarContainer = styled.div`
    position: absolute;
    top:0;
    right:3%;
    width: 100%;
    height: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span{
        margin: 0 2%;
        font-weight: 900;
        color: black;
        font-size:18px;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            transition: transform 0.3s ease;
        }
    }
`