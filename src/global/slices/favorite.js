import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      if (state.list.includes(action.payload)) {
        state.list = state.list.filter((f) => f !== action.payload);
        state.counter--;
      } else {
        state.list.push(action.payload);
        console.log(state.list)
        state.counter++;
      }
    },
  },
});

export const { toggleFavourite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
