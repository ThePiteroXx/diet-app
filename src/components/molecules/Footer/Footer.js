import { FooterWrapper, ContentWrapper } from './Footer.styles';
import Logo from 'components/atoms/Logo/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <p className="footer-title">Info</p>
        <p className="footer-paragraf">
          create by: <span>peter skubisz</span>
        </p>
        <p className="footer-paragraf">
          used api: <span>spooncular.com</span>
        </p>
        <p className="footer-paragraf">
          ilustration: <span>manypixels.co</span>
        </p>
        <p className="footer-paragraf">
          contact: <span>thepremiumxx@wp.pl</span>
        </p>
      </ContentWrapper>
      <Logo />
    </FooterWrapper>
  );
};

export default Footer;
