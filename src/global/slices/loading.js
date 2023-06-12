import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    show: (state, action) => {
      return true;
    },
    hide: (state, action) => {
      return false;
    },
  },
});

export const { show, hide } = loadingSlice.actions;

export default loadingSlice.reducer;
