import styled, { keyframes } from "styled-components";

interface ILoading {
  isAnimating: boolean;
  isHidden: boolean;
}

function Loading({ isHidden, isAnimating }: ILoading) {
  return (
    <LoadingComponent isAnimating={isAnimating} isHidden={isHidden}>
      <Loader>
        <p>Loading</p>
      </Loader>
    </LoadingComponent>
  );
}

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const LoadingComponent = styled.div<ILoading>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor.main};
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  animation: ${({ isAnimating }) => (isAnimating ? slideLeft : "none")} 200ms
    linear forwards;
`;

const loader2_1 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const loader2_2 = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
`;

const Loader = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  vertical-align: middle;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    animation: 1s infinite ease-in-out;
  }

  &::before {
    border: 1px solid #333;
    top: -1px;
    left: -1px;
    opacity: 0;
    animation-name: ${loader2_1};
  }

  &::after {
    background-color: #333;
    animation-name: ${loader2_2};
  }

  p {
    z-index: 9999;
    color: white;
    animation: 1s infinite ease-in-out;
    animation-name: ${loader2_2};
  }
`;

export default Loading;
