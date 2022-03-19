import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { setToken } from 'helpers/tokens';

const token = setToken();

export const mealsApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spoonacular.com/recipes',
  }),
  tagTypes: ['Meals'],
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: ({ number, search, type, value }) =>
        `complexSearch?apiKey=${token}&number=${number}${
          type === 'keto'
            ? '&diet=Ketogenic'
            : type === 'vege'
            ? '&diet=Vegetarian'
            : type === 'vegan'
            ? '&diet=Vegan'
            : type === 'glutenFree'
            ? '&diet=Gluten Free'
            : ''
        }${
          search === 'caloric' && value
            ? `&minCalories=${parseInt(value) - 50}&maxCalories=${parseInt(value) + 50}`
            : search === 'ingredient'
            ? `&includeIngredients=${value}`
            : `&titleMatch=${value}`
        }&addRecipeInformation=true&addRecipeNutrition=true`,
      providesTags: ['Meals'],
    }),
    getExampleMeals: builder.query({
      query: ({ minCalories, maxCalories, minCarbs, minProtein, maxProtein, maxFat, offset }) =>
        `complexSearch?apiKey=${token}&minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&maxFat=${maxFat}&number=5&offset=${offset}&addRecipeInformation=true`,
      providesTags: ['Meals'],
    }),
    getMealIngredients: builder.query({
      query: (id) => `${id}/ingredientWidget.json?apiKey=${token}`,
    }),
  }),
});

export const { useGetAllMealsQuery, useGetExampleMealsQuery, useGetMealIngredientsQuery } = mealsApi;
