import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      if (state.list.includes(action.payload)) {
        state.list = state.list.filter((f) => f !== action.payload);
      } else {
        state.list.push(action.payload);
        console.log(state.list);
      }
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { toggleFavourite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
