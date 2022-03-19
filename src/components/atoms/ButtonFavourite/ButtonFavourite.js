import { useCallback } from 'react';
import { StyledButton } from './ButtonFavourite.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteMeal } from 'store';
import { useError } from 'hooks/useError';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';

const ButtonFavourite = ({ item }) => {
  const { dispatchError } = useError();
  const dispatch = useDispatch();
  const favouriteMeals = useSelector((state) => state.favouriteMeals); // favourite meals
  const isFavourite = favouriteMeals.some((meal) => meal.id === item.id); // if this meal belongs to favourite -> return true

  const handleClick = useCallback(() => {
    if (isFavourite) return dispatchError('You have already added this meal to your favorites');
    dispatch(addFavouriteMeal(item));
  }, [dispatch, item, dispatchError, isFavourite]);

  return (
    <StyledButton onClick={handleClick} isFavourite={isFavourite} data-cy="buttonFavourite">
      <HeartIcon />
    </StyledButton>
  );
};

export default ButtonFavourite;
