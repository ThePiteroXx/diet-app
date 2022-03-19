import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 15px 0;
  position: relative;
  width: 150px;
  min-height: 200px;

  img {
    position: relative;
    display: block;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }

  .title {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
    text-align: center;
  }
`;

export const ButtonRemove = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 27px;
  height: 27px;
  color: ${({ theme }) => theme.colors.primary.white};
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 8px;
  z-index: 1;
  cursor: pointer;
`;

export const MacroWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
`;

export const KcalWrapper = styled.div`
  position: absolute;
  top: calc(150px - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;

  svg {
    width: 13px;
    filter: brightness(2) invert(1);
  }
`;

export const Macro = styled.div`
  margin: 10px 0;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  width: 1px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme, isProtein, isCarbo, isFat }) => {
      if (isProtein) return theme.colors.protein;
      if (isCarbo) return theme.colors.carbo;
      if (isFat) return theme.colors.fat;
      return theme.colors.primary.gray;
    }};
  }
`;
