import { useSelector } from 'react-redux';
import { useGetExampleMealsQuery } from 'store';

export const useMeals = () => {
  const dataPerson = useSelector((state) => state.data); // person data
  const exampleDietInfo = useSelector((state) => state.exampleDiet); // retrived diet
  const dataStorage = JSON.parse(localStorage.getItem('data_person')); // storage data person

  let demandKcal,
    minCarbs,
    maxCarbs,
    minFat,
    maxFat,
    minProtein,
    maxProtein = null;
  if (dataPerson.length) {
    ({ demandKcal, minCarbs, maxCarbs, minFat, maxFat, minProtein, maxProtein } = dataPerson[0]);
  } else if (dataStorage) {
    ({ demandKcal, minCarbs, maxCarbs, minFat, maxFat, minProtein, maxProtein } = dataStorage);
  }

  const {
    data: diet,
    isLoading,
    isError,
  } = useGetExampleMealsQuery({
    minCalories: (demandKcal - 500) / 5,
    maxCalories: (demandKcal + 500) / 5,
    minCarbs: minCarbs / 5,
    minProtein: minProtein / 5,
    maxProtein: maxProtein / 5,
    maxFat: maxFat / 5,
    offset: exampleDietInfo.offset,
  });

  if (demandKcal)
    return {
      demandKcal,
      minCarbs,
      maxCarbs,
      minFat,
      maxFat,
      minProtein,
      maxProtein,
      diet,
      isLoading,
      isError,
    };
};
