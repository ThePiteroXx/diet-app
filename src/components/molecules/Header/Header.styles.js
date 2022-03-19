import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Header = styled.header`
  position: relative;
  overflow-x: hidden;

  .wave-desktop {
    display: none;

    @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
      display: block;
      width: 100%;
      z-index: -1;
    }
  }

  ${Button} {
    margin-top: 60px;

    @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
      display: none;
    }
  }

  .logo {
    position: absolute;
    top: 10px;
    left: 10px;

    @media (min-width: ${({ theme }) => theme.viewportSize.s}) {
      top: 30px;
      left: 30px;
    }
  }

  .ilustration {
    @media (min-width: ${({ theme }) => theme.viewportSize.xxl}) {
      width: 100%;
    }
  }

  h1 {
    margin-top: 35px;
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.primary.white};
    font-weight: 800;
  }

  p {
    margin: 10px 0;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary.gradientGreen};

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    position: absolute;
    top: 50%;
    min-height: 0;
    background: transparent;
    transform: translateY(-50%);
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 550px) {
    max-width: 500px;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 100px;
    max-width: 1400px;
    text-align: left;
  }
`;

export const HeaderContent = styled.div`
  max-width: 500px;
`;
