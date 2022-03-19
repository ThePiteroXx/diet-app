import { useWindowSize } from 'hooks/useWindowSize';
import { Header as HeaderWrapper, HeaderContent, WrapperFlex, Wrapper } from './Header.styles';
import Ilustration from 'assets/images/chef_ilustration.svg';
import Logo from 'components/atoms/Logo/Logo';
import { Button } from 'components/atoms/Button/Button';
import { theme } from 'assets/styles/theme';
import bgcHeader from 'assets/images/bgcHeader-desktop.svg';
import bgcXXL from 'assets/images/bgcHeader-xxl.svg';

const Header = () => {
  const { width } = useWindowSize();

  return (
    <>
      <HeaderWrapper>
        <img src={width < 1800 ? bgcHeader : bgcXXL} alt="wave" className="wave-desktop" />
        <Logo />
        <Wrapper>
          <WrapperFlex>
            <img className="ilustration" src={Ilustration} alt="chef cooking dinners" />
            <HeaderContent>
              <h1>Calculate Your Caloric Demand</h1>
              <p>
                Do you know your caloric demand?<br></br>
                Maybe you want to lose weight?
              </p>
              <p>Fill in the form and we will try to find meals depending on whether you want to gain weight or lose weight.</p>
            </HeaderContent>
          </WrapperFlex>
          <Button as="a" href="#data" color={theme.colors.primary.dark} background={theme.colors.primary.white}>
            Get Started
          </Button>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
