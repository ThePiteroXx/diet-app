import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    filter: ${({ isFavourite }) =>
      isFavourite ? 'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8)' : 'brightness(0) invert(1)'};
  }
`;
