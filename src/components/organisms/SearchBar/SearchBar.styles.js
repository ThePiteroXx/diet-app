import styled from 'styled-components';
import { LabelRadio } from 'components/atoms/Radio/Radio.styles';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1190px;

  @media (min-width: ${({ theme }) => theme.viewportSize.s}) {
    gap: 40px;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.xxl}) {
    margin: 60px auto;
    justify-content: space-between;
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 248px;
  height: 42px;

  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 20px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.s}) {
    width: 300px;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    width: 450px;
    height: 50px;
  }
`;
export const SearchBarInput = styled.input`
  position: absolute;
  padding: 10px 33px;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.secondary.gray};
  color: ${({ theme }) => theme.colors.primary.mainText};
  border-radius: 32px;
  border: none;
  z-index: 0;
`;

export const ButtonFilter = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FilterWrapper = styled.div`
  position: fixed;
  padding: 17px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 450px;
  min-height: 360px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 15px;

  p {
    margin-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
  }

  .title {
    margin-top: 20px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary.green};
  }

  .inputWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  ${LabelRadio} {
    padding: 8px 5px;
    width: clamp(65px, 25vw, 130px);
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    max-width: 600px;
    align-items: center;

    .inputWrapper {
      justify-content: center;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;

  ${Button} {
    width: 140px;
  }
`;
