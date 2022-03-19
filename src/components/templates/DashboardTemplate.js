import { useState } from 'react';
import { DashboardWrapper, AsideRight, AsideLeft, Section, BurgerButton } from './DashboardTemplate.styles';
import FavouriteMeals from 'components/organisms/FavouriteMeals/FavouriteMeals';
import { useWindowSize } from 'hooks/useWindowSize';
import Logo from 'components/atoms/Logo/Logo';
import Navigate from 'components/organisms/Navigate/Navigate';
import { theme } from 'assets/styles/theme';

const dekstopSize = parseInt(theme.viewportSize.l.slice(0, -2));

const DashboardTemplate = ({ children }) => {
  const windowSize = useWindowSize();
  const [isOpen, handleOpenNav] = useState(false);

  return (
    <DashboardWrapper>
      {windowSize.width > dekstopSize ? (
        // view desktop
        <>
          <AsideRight>
            <FavouriteMeals />
          </AsideRight>
          <AsideLeft>
            <Logo />
            <Navigate />
          </AsideLeft>
        </>
      ) : (
        // view phone
        <>
          <BurgerButton onClick={() => handleOpenNav(!isOpen)} data-cy="buttonBurger">
            <div className="strips"></div>
          </BurgerButton>
          <Navigate isOpen={isOpen} />
        </>
      )}
      <Section>{children}</Section>
    </DashboardWrapper>
  );
};

export default DashboardTemplate;
