/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const humanRequestsSlice = createSlice({
  name: 'peopleRequests',
  initialState: [],
  reducers: {
    setHumanRequests: (state, action) => action.payload,
    deleteFromHumanRequestsById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setHumanRequests, deleteFromHumanRequestsById } = humanRequestsSlice.actions;

export default humanRequestsSlice.reducer;
