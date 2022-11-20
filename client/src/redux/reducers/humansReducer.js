/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const humansSlice = createSlice({
  name: 'people',
  initialState: [],
  reducers: {
    setAllHumans: (state, action) => action.payload,
    // eslint-disable-next-line no-unused-vars
    deleteFromAllHumansById: (state, action) => state.filter((el) => el.id !== action.payload),
    updateHumans: (state, action) => state.map((block) => (block.id === action.payload.id ? action.payload : block)),
    addOneBabysitter: (state, action) => [...state, action.payload],
  },
});

export const {
  setAllHumans, deleteFromAllHumansById, updateHumans, addOneBabysitter,
} = humansSlice.actions;

export default humansSlice.reducer;
