/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const ownerAnimalsSlice = createSlice({
  name: 'ownerAnimals',
  initialState: [],
  reducers: {
    setOwnerAnimals: (state, action) => action.payload,
    addOwnerAnimal: (state, action) => [...state, action.payload],
    // eslint-disable-next-line no-unused-vars
    deleteById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setOwnerAnimals, deleteById, addOwnerAnimal } = ownerAnimalsSlice.actions;

export default ownerAnimalsSlice.reducer;
