/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const filteredHumansSlice = createSlice({
  name: 'filteredHumans',
  initialState: [],
  reducers: {
    setFilteredHumans: (state, action) => action.payload,
    updateFilteredHumans: (state, action) => state.filter((el) => el[action.payload.key] === action.payload.value),
    updateFilteredHumansByUser: (state, action) => state.filter((el) => el.User[action.payload.key] === action.payload.value),
    // updateFilteredHumansByAnimalType: (state, action) => state.filter((el) => action.payload.value.includes(el[action.payload.key])),
    updateFilteredHumansByAnimalType: (state, action) => state.filter((el) => {
      function contains(a, b) {
      // array matches
        if (Array.isArray(b)) {
          return b.some((x) => a.indexOf(x) > -1);
        }
        // string match
        return a.indexOf(b) > -1;
      }
      return contains(el[action.payload.key], action.payload.value);
    }),
    // eslint-disable-next-line no-unused-vars
    deleteFromFilteredHumansById: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

export const {
  setFilteredHumans, updateFilteredHumans, updateFilteredHumansByUser, deleteFromFilteredHumansById, updateFilteredHumansByAnimalType,
} = filteredHumansSlice.actions;

export default filteredHumansSlice.reducer;
