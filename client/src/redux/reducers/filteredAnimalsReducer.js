/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const filteredAnimalsSlice = createSlice({
  name: 'filteredAnimals',
  initialState: [],
  reducers: {
    setFilteredAnimals: (state, action) => action.payload,
    updateFilteredAnimals: (state, action) => state.filter((el) => el[action.payload.key] === action.payload.value),
    // eslint-disable-next-line no-unused-vars
    deleteFromFilteredAnimalById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setFilteredAnimals, updateFilteredAnimals, deleteFromFilteredAnimalById } = filteredAnimalsSlice.actions;

export default filteredAnimalsSlice.reducer;

// updateFilteredAnimals: (state, action) => state.filter((el) => {
//   for (const key in el) {
//     if (el[key] !== action.payload) {
//       return false;
//     }
//   }
//   return true;
// }),
