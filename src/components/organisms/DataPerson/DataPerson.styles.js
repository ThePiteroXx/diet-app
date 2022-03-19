import styled from 'styled-components';
import { Wrapper as LineBar } from 'components/atoms/LineBar/LineBar.styles';
import { Title } from 'components/atoms/Title/Title';

export const CaloricInfoWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.viewportSize.m}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
  }
`;

export const Legend = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-column: 2;
  grid-row: 2;

  .container {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      color: ${({ theme }) => theme.colors.primary.gray};
    }

    .circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.secondary.gray};
    }

    .protein {
      background-color: ${({ theme }) => theme.colors.protein};
    }
    .fat {
      background-color: ${({ theme }) => theme.colors.fat};
    }
    .carbo {
      background-color: ${({ theme }) => theme.colors.carbo};
    }
  }
`;

export const CaloricInfo = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 290px;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  p {
    font-weight: 600;
    width: 150px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  .caloric-title {
    color: ${({ theme }) => theme.colors.primary.gray};
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.m}) {
    margin: 20px 0;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
  margin: 60px auto;
  width: 200px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    align-items: center;

    ${ChartWrapper} {
      grid-column: 1 / 2;
      grid-row: 2;
      width: 300px;
    }

    ${CaloricInfoWrapper} {
      grid-column: 3;
      grid-row: 2;
      gap: 20px;
    }

    ${Title} {
      grid-column: 1 / -1;
    }

    ${LineBar} {
      margin: 20px;
      grid-row: 3;
    }
  }
`;
