/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const oneOfferSlice = createSlice({
  name: 'offer',
  initialState: {},
  reducers: {
    setOffer: (state, action) => action.payload,
    changeOfferStatus: (state, action) => ({ ...state, status: action.payload }),
    changeOfferReplyStatus: (state, action) => ({ ...state, hunter_reply: action.payload }),
  },
});

export const { setOffer, changeOfferStatus, changeOfferReplyStatus } = oneOfferSlice.actions;

export default oneOfferSlice.reducer;
