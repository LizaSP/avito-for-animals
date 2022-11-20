/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    setAllFavourites: (state, action) => action.payload,
    addFavourites: (state, action) => [...state, action.payload],
    // eslint-disable-next-line no-unused-vars
    deleteFromAllFavouritesById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setAllFavourites, deleteFromAllFavouritesById, addFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
