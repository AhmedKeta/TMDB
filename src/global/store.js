import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorite";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
