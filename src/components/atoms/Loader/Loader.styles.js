import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const Wrapper = styled.div`
  z-index: 99;
  position: ${({ isAbsolute }) => (isAbsolute ? 'absolute' : 'fixed')};
  width: 100px;
  padding: 10px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  left: 50%;
  margin-top: -100px;
  margin-left: -50px;
  border-radius: 0.5rem;

  p {
    margin: 5px 0 0 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
  }

  .upper {
    animation: ${rotate};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transform-origin: center;
  }
`;
