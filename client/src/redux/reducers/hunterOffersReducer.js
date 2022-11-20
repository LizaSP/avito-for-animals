/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const hunterOffersSlice = createSlice({
  name: 'hunterOffers',
  initialState: [],
  reducers: {
    setHunterOffersRequests: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    deleteFromHunterOffers: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setHunterOffersRequests, deleteFromHunterOffers } = hunterOffersSlice.actions;

export default hunterOffersSlice.reducer;
