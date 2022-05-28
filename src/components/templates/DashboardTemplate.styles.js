import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: grid;

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    grid-template-columns: 0.5fr 3fr 1fr;
    height: 100vh;
  }
`;

export const Section = styled.div`
  width: 100vw;
  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    position: relative;
    grid-column: 2;
    grid-row: 1 / -1;
    width: auto;
    overflow-y: auto;
  }
`;

export const AsideRight = styled.div`
  padding: 10px;
  grid-column: 3;
  grid-row: 1 / -1;
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  overflow-y: auto;
`;

export const AsideLeft = styled.div`
  position: relative;
  padding: 10px;
  grid-column: 1;
  grid-row: 1 / -1;
  background-color: ${({ theme }) => theme.colors.secondary.gray};
`;

export const BurgerButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 46px;
  height: 46px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 999;

  .strips {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: black;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
    }

    &::before {
      top: 12px;
    }
    &::after {
      top: 24px;
    }
  }
`;
