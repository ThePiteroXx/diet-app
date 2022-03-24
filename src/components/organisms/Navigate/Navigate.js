import { NavigateWrapper, NavigateLink } from './Navigate.styles';
import { clearStorageData } from 'helpers/operationsWithDataStorage';
import { useDispatch } from 'react-redux';
import { resetData, resetExampleDietMacros } from 'store';
import { theme } from 'assets/styles/theme';

const dekstopSize = parseInt(theme.viewportSize.l.slice(0, -2));

const Navigate = ({ isOpen }) => {
  const dispatch = useDispatch();

  const resetPersonData = () => {
    clearStorageData('data_person');
    dispatch(resetData());
    dispatch(resetExampleDietMacros());
  };

  return (
    <NavigateWrapper isOpen={isOpen}>
      {window.innerWidth > dekstopSize ? (
        // desktop navigation
        <NavigateLink to="/" onClick={resetPersonData}>
          home page
        </NavigateLink>
      ) : (
        // mobile navigation
        <>
          <NavigateLink to="/" onClick={resetPersonData}>
            home page
          </NavigateLink>
          <NavigateLink to="/dashboard">dashboard</NavigateLink>
          <NavigateLink to="/dashboard/favourites">favourites</NavigateLink>
        </>
      )}
    </NavigateWrapper>
  );
};

export default Navigate;
