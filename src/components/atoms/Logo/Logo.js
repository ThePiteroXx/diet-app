import styled from 'styled-components';
import LogoSvg from 'assets/icons/logo.svg';

const Img = styled.img`
  width: 47px;

  @media (min-width: ${({ theme }) => theme.viewportSize.l}) {
    width: 60px;
  }
`;

const Logo = () => {
  return <Img src={LogoSvg} alt="logo" className="logo" />;
};

export default Logo;
