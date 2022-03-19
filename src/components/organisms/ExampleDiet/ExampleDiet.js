import { MealsWrapper, MacroWrapper } from './ExampleDiet.styles';

import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import Loader from 'components/atoms/Loader/Loader';
import Meal from 'components/molecules/Meal/Meal';

import { useMeals } from 'hooks/useMeals';
import { useExampleMealsMacros } from 'hooks/useExampleMealsMacros';
import { useDispatch } from 'react-redux';
import { changeDiet, resetDiet, resetExampleDietMacros } from 'store';

const ExampleDiet = () => {
  const dietInfo = useMeals(); // main information about diet
  const exampleMealsMacros = useExampleMealsMacros();
  const dispatch = useDispatch();

  // change example dietr
  const changeExampleDiet = () => {
    if (dietInfo.diet.offset > dietInfo.diet.totalResults - 10) {
      dispatch(resetExampleDietMacros());
      dispatch(resetDiet());
    } else {
      dispatch(resetExampleDietMacros());
      dispatch(changeDiet());
    }
  };

  return (
    <>
      <Title>Example diet for you</Title>
      <MealsWrapper data-cy="exampleMeals">
        {dietInfo.isLoading ? (
          <Loader speed={5} customText={'Loading...'} isAbsolute />
        ) : (
          dietInfo.diet.results.map((item) => <Meal key={item.id} item={item} isExampleMeal />)
        )}
      </MealsWrapper>
      <MacroWrapper>
        <div>
          <p>
            Carbohydrates: <span>{exampleMealsMacros.carbo} g</span>
          </p>
          <p>
            Fat: <span>{exampleMealsMacros.fat} g</span>
          </p>
          <p>
            Protein: <span>{exampleMealsMacros.protein} g</span>
          </p>
        </div>
        <div>
          <p className="macro-calories">
            Calories: <br />
            <span>{exampleMealsMacros.calories} g</span>
          </p>
        </div>
        <Button onClick={changeExampleDiet}>Another</Button>
      </MacroWrapper>
    </>
  );
};

export default ExampleDiet;
