/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const animalsSlice = createSlice({
  name: 'animals',
  initialState: [],
  reducers: {
    setAllAnimals: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    deleteFromAllAnimalsById: (state, action) => state.filter((el) => el.id !== action.payload),
    updateAnimal: (state, action) => state.map((block) => (block.id === action.payload.id ? action.payload : block)),

  },
});

export const {
  setAllAnimals, deleteFromAllAnimalsById, updateAnimal,
} = animalsSlice.actions;

export default animalsSlice.reducer;
