import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import Favourite from './MobileViews/FavouriteMobile';
import { Routes, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Routes>
      <Route path="dashboard/favourites" element={<Favourite />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default Root;
