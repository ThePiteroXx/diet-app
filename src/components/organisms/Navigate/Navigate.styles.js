import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigateWrapper = styled.nav`
  position: fixed;
  padding: 20px;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  transition: top 0.3s;
  z-index: 99;

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    position: static;
    gap: 20px;
  }
`;

export const NavigateLink = styled(Link)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  text-transform: capitalize;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary.gradientGreen};
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &:hover {
    color: black;
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    font-weight: 400;
  }
`;
