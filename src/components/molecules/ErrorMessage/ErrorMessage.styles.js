import styled, { keyframes } from 'styled-components';

const showAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background-color: rgb(255, 209, 218);
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 5px;
  animation: ${showAnimation} 1s ease-in-out 1 forwards, ${showAnimation} 1s 4s ease-in-out 1 reverse forwards;
  z-index: 99;
`;
