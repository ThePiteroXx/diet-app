import styled from 'styled-components';

export const Title = styled.h2`
  margin: 40px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondary.green};

  @media screen and (min-width: ${({ theme }) => theme.viewportSize.m}) {
    font-size: 40px;
  }
`;
