import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorite";
import loadingReducer from "./slices/loading";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    loading: loadingReducer,
  },
});

export default store;
