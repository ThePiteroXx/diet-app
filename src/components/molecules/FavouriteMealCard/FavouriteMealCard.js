import { Wrapper, ButtonRemove, MacroWrapper, Macro, KcalWrapper } from './FavouriteMealCard.styles';
import { ReactComponent as FireIcon } from 'assets/icons/fire-gray.svg';
import Modal from 'components/organisms/Modal/Modal';
import MealInfo from 'components/molecules/MealInfo/MealInfo';
import { removeFavouriteMeal } from 'store';
import useModal from 'components/organisms/Modal/useModal';
import { useDispatch } from 'react-redux';

const FavouriteMealCard = ({ item }) => {
  const dispatch = useDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [calories] = item.nutrition.nutrients.filter((e) => e.name === 'Calories');
  const [fat] = item.nutrition.nutrients.filter((e) => e.name === 'Fat');
  const [protein] = item.nutrition.nutrients.filter((e) => e.name === 'Protein');
  const [carbo] = item.nutrition.nutrients.filter((e) => e.name === 'Carbohydrates');

  const removeMeal = (id) => {
    dispatch(removeFavouriteMeal(id));
  };

  return (
    <Wrapper key={item.id}>
      <Modal isOpen={isOpen} handleClose={handleCloseModal} withExit>
        <MealInfo item={item} />
      </Modal>
      <ButtonRemove onClick={() => removeMeal(item.id)} data-cy="buttonRemoveFavourite">
        X
      </ButtonRemove>
      <img src={item.image} alt={item.title} onClick={handleOpenModal} />
      <p className="title">{item.title}</p>
      <KcalWrapper>
        <FireIcon />
        {parseInt(calories.amount)} kcal
      </KcalWrapper>
      <MacroWrapper>
        <Macro isProtein>{parseInt(protein.amount)}g</Macro>
        <Macro isFat>{parseInt(fat.amount)}g</Macro>
        <Macro isCarbo>{parseInt(carbo.amount)}g</Macro>
      </MacroWrapper>
    </Wrapper>
  );
};

export default FavouriteMealCard;
