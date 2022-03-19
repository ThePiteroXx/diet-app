import { createSlice, configureStore } from '@reduxjs/toolkit';
import { mealsApi } from './api/meals';
import { pushDataToLocalStorage, removesDataFromLocalStorage } from 'helpers/operationsWithDataStorage';

export * from './api/meals';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addData(state, action) {
      state.push({
        ...action.payload,
      });
    },
    resetData(state) {
      state.length = 0;
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: 'any',
    type: 'any',
  },
  reducers: {
    addFilter(state, action) {
      return {
        ...action.payload,
      };
    },
  },
});

const exampleDietSlice = createSlice({
  name: 'exampleDiet',
  initialState: {
    offset: 0,
  },
  reducers: {
    changeDiet(state) {
      state.offset += 5;
    },
    resetDiet(state) {
      state.offset = 0;
    },
  },
});

const exampleDietMacrosSlice = createSlice({
  name: 'exampleDietMacros',
  initialState: [],
  reducers: {
    addExampleDietMacros(state, action) {
      if (state.length >= 5) return state;
      state.push({
        ...action.payload,
      });
    },
    resetExampleDietMacros(state) {
      state.length = 0;
    },
  },
});
const initialStateFavouriteMeals = JSON.parse(localStorage.getItem('favouriteMeals')) || [];
const favouriteMeals = createSlice({
  name: 'favouriteMeals',
  initialState: initialStateFavouriteMeals,
  reducers: {
    addFavouriteMeal(state, action) {
      pushDataToLocalStorage(action.payload, 'favouriteMeals');

      state.push({
        ...action.payload,
      });
    },
    removeFavouriteMeal(state, action) {
      removesDataFromLocalStorage(action.payload, 'favouriteMeals');
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addData, resetData } = dataSlice.actions;
export const { addFilter } = filterSlice.actions;
export const { changeDiet, resetDiet } = exampleDietSlice.actions;
export const { addExampleDietMacros, resetExampleDietMacros } = exampleDietMacrosSlice.actions;
export const { addFavouriteMeal, removeFavouriteMeal } = favouriteMeals.actions;

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    filter: filterSlice.reducer,
    exampleDiet: exampleDietSlice.reducer,
    exampleDietMacros: exampleDietMacrosSlice.reducer,
    favouriteMeals: favouriteMeals.reducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { warnAfter: 128 } }).concat(mealsApi.middleware),
});
