import { useSelector } from 'react-redux';

export const useExampleMealsMacros = () => {
  const exampleDietMacros = useSelector((state) => state.exampleDietMacros);

  const sumCalories = exampleDietMacros.reduce((a, b) => a + parseInt(b.calories.amount), 0);
  const sumProtein = exampleDietMacros.reduce((a, b) => a + parseInt(b.protein.amount), 0);
  const sumFat = exampleDietMacros.reduce((a, b) => a + parseInt(b.fat.amount), 0);
  const sumCarbo = exampleDietMacros.reduce((a, b) => a + parseInt(b.carbo.amount), 0);
  return { calories: sumCalories, protein: sumProtein, fat: sumFat, carbo: sumCarbo };
};
