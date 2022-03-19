import styled from 'styled-components';

export const Select = styled.select`
  padding: 4px 6vmin;
  font-size: clamp(12px, 4vw, ${({ theme }) => theme.fontSize.m});
  background-color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid ${({ theme }) => theme.colors.primary.grey};
  border-radius: 15px;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(70, 155, 76, 0.25);
    border: 1px solid ${({ theme }) => theme.colors.secondary.green};
  }
`;
