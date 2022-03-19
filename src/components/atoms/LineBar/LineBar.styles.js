import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  from {
    transform: scaleX(0%) ;
  }
  to {
    transform: scaleX(100%);
  }
`;

export const LineBarWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 350px;
  height: 19px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  z-index: -1;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${({ percent }) => `${percent}%`};
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    transform-origin: left;
    animation: ${moveLeft} 0.6s forwards;
    z-index: 0;
  }
`;

export const Wrapper = styled.div`
  margin: 30px auto;
  max-width: 350px;

  span {
    margin: 10px 0;
    display: block;
    color: ${({ theme }) => theme.colors.primary.gray};
  }

  p {
    font-size: 12px;
    font-weight: 600;
  }

  .flex-row {
    display: flex;
    gap: 6px;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    max-width: 600px;
  }
`;
