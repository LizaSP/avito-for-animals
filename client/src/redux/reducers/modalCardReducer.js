/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: { active: false, card: {} },
  reducers: {
    setActive: (state) => ({ ...state, active: !state.active }),
    setCard: (state, action) => ({ ...state, card: action.payload }),
  },
});

export const { setActive, setCard } = modalSlice.actions;

export default modalSlice.reducer;
