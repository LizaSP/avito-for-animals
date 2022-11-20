/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const requestsSlice = createSlice({
  name: 'requests',
  initialState: [],
  reducers: {
    setUserRequests: (state, action) => action.payload,
    deleteFromRequestsById: (state, action) => state.filter((el) => el.Animal.id !== action.payload),
  },
});

export const { setUserRequests, deleteFromRequestsById } = requestsSlice.actions;

export default requestsSlice.reducer;
