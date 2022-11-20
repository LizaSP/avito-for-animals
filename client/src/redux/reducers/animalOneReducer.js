import { createSlice } from '@reduxjs/toolkit';

export const animalOneSlice = createSlice({
  name: 'ani',
  initialState: [],
  reducers: {
    getOneAnimal: (state, action) => action.payload,
    addAnimal: (state, action) => [...state, action.payload],
  },
});

export const { getOneAnimal, addAnimal } = animalOneSlice.actions;

export default animalOneSlice.reducer;
