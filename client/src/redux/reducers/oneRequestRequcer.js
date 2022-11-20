/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const oneRequestSlice = createSlice({
  name: 'request',
  initialState: {},
  reducers: {
    setRequest: (state, action) => action.payload,
    changeStatus: (state, action) => ({ ...state, status: action.payload }),
    changeReplyStatus: (state, action) => ({ ...state, hunter_reply: action.payload }),
  },
});

export const { setRequest, changeStatus, changeReplyStatus } = oneRequestSlice.actions;

export default oneRequestSlice.reducer;
