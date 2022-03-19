import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const MealsWrapper = styled.div`
  margin: 20px auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
`;

export const MacroWrapper = styled.div`
  margin: 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  p {
    margin: 7px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary.green};

    span {
      margin-left: 10px;
      color: #000;
    }
  }
  .macro-calories {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.s}) {
    flex-direction: row;
    justify-content: center;
    gap: 70px;

    ${Button} {
      margin: 0;
    }
  }
`;
