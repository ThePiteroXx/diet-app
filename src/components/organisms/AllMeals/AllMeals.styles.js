import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: relative;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;

  @media (min-width: ${({ theme }) => theme.viewportSize.xxl}) {
    margin: 90px auto;
    justify-content: flex-start;
    width: 1190px;
  }
`;

export const WrapperLoader = styled.div`
  margin-top: 90px;
  position: relative;
  height: 40px;
`;
