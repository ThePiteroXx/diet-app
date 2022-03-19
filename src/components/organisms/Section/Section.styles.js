import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const SectionWrapper = styled.section`
  position: relative;
  padding: 100px 20px 20px 20px;
  width: 100%;

  form {
    margin: 30px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    max-width: 580px;
  }

  ${Button} {
    margin-top: 30px;
    align-self: center;

    @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
      width: 100%;
    }
  }

  .wave-mobile {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
      display: none;
    }
  }

  .form-ilustration {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 430px;

    @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  margin: 20% auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 580px;

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    margin-top: 0;
    max-width: 1200px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    margin-top: 50px;
    flex-direction: row;
  }
`;
