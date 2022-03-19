import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';

export const DashboardSection = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  min-height: 450px;

  ${Title} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }

  ${Button} {
    margin: auto;
    padding: 15px;
    display: block;
    width: 270px;
  }

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.secondary.gray};
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    padding: 50px;
    ${Title} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  a {
    text-decoration: underline;
  }

  h2 {
    text-align: center;
    font-size: 40px;
    line-height: 2;
  }
`;
