import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    show: (state, action) => {
      // state = true;
      return true
    },
    hide: (state, action) => {
      // state = false;
      return false
    },
  },
});

export const { show, hide } = loadingSlice.actions;

export default loadingSlice.reducer;
