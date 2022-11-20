/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const hunterRequestsSlice = createSlice({
  name: 'hunterRequests',
  initialState: [],
  reducers: {
    setHunterRequests: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    deleteFromHunterRequests: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setHunterRequests, deleteFromHunterRequests } = hunterRequestsSlice.actions;

export default hunterRequestsSlice.reducer;
