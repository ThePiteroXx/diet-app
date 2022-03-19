import DashboardTemplate from 'components/templates/DashboardTemplate';
import FavouriteMeals from 'components/organisms/FavouriteMeals/FavouriteMeals';
import { useWindowSize } from 'hooks/useWindowSize';
import { Navigate } from 'react-router-dom';
import { theme } from 'assets/styles/theme';

const dekstopSize = parseInt(theme.viewportSize.l.slice(0, -2));
/**
 * View for a mobile device only
 */
const Favourite = () => {
  const windowSize = useWindowSize();
  if (!localStorage.getItem('data_person')) return <Navigate to="/" />;
  if (windowSize.width > dekstopSize) return <Navigate to="/dashboard" />;
  return (
    <DashboardTemplate>
      <FavouriteMeals></FavouriteMeals>
    </DashboardTemplate>
  );
};

export default Favourite;
