/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'user',
  initialState: { loading: true },
  reducers: {
    setAuthUser: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    logoutUser: (state) => ({}),
    updateUser: (state, action) => state.map((block) => (block.id === action.payload.id ? action.payload : block)),
  },
});

export const { setAuthUser, logoutUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
