import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 30px;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  color: ${({ color }) => (color ? color : '#ffffff')};
  border: none;
  border-radius: 50px;
  background: ${({ theme, background }) => (background ? background : theme.colors.secondary.green)};
  cursor: pointer;
`;
