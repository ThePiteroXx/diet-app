import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  padding: 4px 5px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.gray};
  border-radius: 15px;
  font-size: clamp(12px, 4vw, ${({ theme }) => theme.fontSize.m});
  resize: none;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(70, 155, 76, 0.25);
    border: 1px solid ${({ theme }) => theme.colors.secondary.green};
  }

  &::placeholder {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
