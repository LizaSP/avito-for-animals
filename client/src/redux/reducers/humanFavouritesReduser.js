/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const peopleFavouritesSlice = createSlice({
  name: 'peopleFavourites',
  initialState: [],
  reducers: {
    setAllHumanFavourites: (state, action) => action.payload,
    addFavouritesHuman: (state, action) => [...state, action.payload],
    // eslint-disable-next-line no-unused-vars
    deleteFromAllFavouritesHumanById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setAllHumanFavourites, deleteFromAllFavouritesHumanById, addFavouritesHuman } = peopleFavouritesSlice.actions;

export default peopleFavouritesSlice.reducer;
