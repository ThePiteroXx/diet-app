import { useEffect, forwardRef } from 'react';
import { theme } from 'assets/styles/theme';
import { MealWrapper, ImgWrapper, MealBody, Circle } from './Meal.styles';
import { ReactComponent as TimeIcon } from 'assets/icons/time.svg';
import { ReactComponent as FireIcon } from 'assets/icons/fire-gray.svg';
import ButtonFavourite from 'components/atoms/ButtonFavourite/ButtonFavourite';
import { Rating } from 'react-simple-star-rating';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import MealInfo from 'components/molecules/MealInfo/MealInfo';

import { useDispatch } from 'react-redux';
import { addExampleDietMacros } from 'store';

const Meal = forwardRef(({ item, isExampleMeal }, ref) => {
  const [calories] = item.nutrition.nutrients.filter((e) => e.name === 'Calories');
  const [fat] = item.nutrition.nutrients.filter((e) => e.name === 'Fat');
  const [protein] = item.nutrition.nutrients.filter((e) => e.name === 'Protein');
  const [carbo] = item.nutrition.nutrients.filter((e) => e.name === 'Carbohydrates');

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isExampleMeal) dispatch(addExampleDietMacros({ calories, fat, protein, carbo }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MealWrapper ref={ref} data-cy="mealCard">
      <ButtonFavourite item={item} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal} withExit>
        <MealInfo item={item} />
      </Modal>
      <ImgWrapper onClick={handleOpenModal}>
        <img src={item.image} alt={item.title} />
      </ImgWrapper>
      <MealBody>
        <p>{item.title}</p>
        <div className="meal-info">
          <div className="row">
            <TimeIcon />
            {item.readyInMinutes} min
          </div>
          <div className="row">
            <FireIcon />
            {parseInt(calories.amount)} Calories
          </div>
        </div>
        <div className="meal-rating">
          <Rating readonly initialValue={item.healthScore / 20} size={30} />
          Health
        </div>
        <div className="meal-macros" color={theme.colors.carbo}>
          <div className="row">
            <Circle color={theme.colors.protein} />
            {parseInt(protein.amount)}g
          </div>
          <div className="row">
            <Circle color={theme.colors.fat} />
            {parseInt(fat.amount)}g
          </div>
          <div className="row">
            <Circle color={theme.colors.carbo} />
            {parseInt(carbo.amount)}g
          </div>
        </div>
      </MealBody>
    </MealWrapper>
  );
});

export default Meal;
