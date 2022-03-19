import { FavouriteWrapper } from './FavouriteMeals.styles';
import { Title } from 'components/atoms/Title/Title';
import { useSelector } from 'react-redux';
import FavouriteMealCard from 'components/molecules/FavouriteMealCard/FavouriteMealCard';

const FavouriteMeals = () => {
  const favouriteMeals = useSelector((state) => state.favouriteMeals); // all favourite user meals

  return (
    <FavouriteWrapper>
      <Title>Favourites</Title>
      {favouriteMeals.length ? favouriteMeals.map((item) => <FavouriteMealCard key={item.id} item={item} />) : <p>You haven't any favourite meals</p>}
    </FavouriteWrapper>
  );
};

export default FavouriteMeals;
