import styled from 'styled-components';
import footerBgc from 'assets/images/footerBgc.svg';
import footerBgcDesktop from 'assets/images/bgcFooter-desktop.svg';

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  height: clamp(250px, 45vw, 500px);
  background: url(${footerBgc});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.primary.white};

  .logo {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    background: url(${footerBgcDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 300px;

    .logo {
      top: 30px;
      right: 30px;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  min-height: 100px;

  .footer-title {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .footer-paragraf {
    text-transform: uppercase;
    font-weight: 600;

    span {
      text-transform: lowercase;
      font-weight: 400;
    }
  }

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    width: 100%;
    align-items: flex-end;
  }
`;
