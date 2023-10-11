
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const unitDataSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setUnit: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUnit: () => {
      return {};
    },
  },
});

export const { setUnit, clearUnit } = unitDataSlice.actions;

export default unitDataSlice.reducer;
