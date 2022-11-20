/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const ownerRequestsSlice = createSlice({
  name: 'ownerRequests',
  initialState: [],
  reducers: {
    setOwnerRequests: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    deleteFromOwnerRequests: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const { setOwnerRequests, deleteFromOwnerRequests } = ownerRequestsSlice.actions;

export default ownerRequestsSlice.reducer;
