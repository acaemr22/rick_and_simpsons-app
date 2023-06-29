import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charctersSlice";

import quotesReducer from "./quotesSlice";
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    quotes: quotesReducer
  },
});
