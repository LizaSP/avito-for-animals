/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const offerModalSlice = createSlice({
  name: 'offerModal',
  initialState: { active: false, card: {} },
  reducers: {
    setActive: (state) => ({ ...state, active: !state.active }),
    setCard: (state, action) => ({ ...state, card: action.payload }),
  },
});

export const { setActive, setCard } = offerModalSlice.actions;

export default offerModalSlice.reducer;
