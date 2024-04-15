import {styled, keyframes} from "styled-components"

export const MainFont = () => {
    
    return (
        <FontDiv>
            <h1 className='empty'>HI, I'M</h1>
            <h1 className='empty'>FRONTEND</h1>
            <h1 className='empty'>DEVELOPER</h1>
            <h1 className='fill'>SONG GYEONG HOO</h1>
        </FontDiv>
    )
}

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0);
  }
`;

const FontDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    animation: ${moveUpDown} 2s ease-in-out infinite;
    h1{
        line-height: 105px;
        margin: 0;
        padding:0;
        font-size: 7em;
        @media(max-width: 600px){
            font-size: 4em;
            line-height: 50px;
        }
        font-weight: 900;
    }
    h1.empty {
        color: ${({ theme }) => theme.bgColor.main};
        text-shadow: 
        -2px -2px 0 #000,  
        2px -2px 0 #000,
        -2px  2px 0 #000,
        2px  2px 0 #000,
        -2px -1px 0 #000,  
        2px -1px 0 #000,
        -1px  2px 0 #000,
        1px  2px 0 #000;
        @media(max-width: 600px){
            text-shadow: 
            -1px -1px 0 #000,  
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000,
        }
    }
    h1.fill {
        color: black;
    }
`