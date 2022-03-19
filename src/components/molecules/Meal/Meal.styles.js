import styled from 'styled-components';
import { StyledButton } from 'components/atoms/ButtonFavourite/ButtonFavourite.styles';

export const MealWrapper = styled.div`
  position: relative;
  width: 290px;
  height: 400px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 5px 20px ${({ theme }) => theme.colors.primary.gray};

  ${StyledButton} {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
  }
  @media (min-width: ${({ theme }) => theme.viewportSize.s}) {
    width: 260px;
    height: 380px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 16px 16px 0 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::after {
    content: 'View recepit';
    padding: 3px 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.primary.white};
    text-align: center;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s 0.2s;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    z-index: 0;
  }
`;

export const MealBody = styled.div`
  padding: 10px;

  p {
    margin-top: 5px;
    color: #3e5481;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
  }

  .meal-info,
  .meal-macros {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      margin-right: 9px;
      width: 17px;
    }

    .row {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.primary.gray};

      @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
        font-size: 16px;
      }
    }
  }

  .meal-rating {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.primary.gray};
  }
`;

export const Circle = styled.div`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
