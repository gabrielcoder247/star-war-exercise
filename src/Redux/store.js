import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters";

const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export default store;
