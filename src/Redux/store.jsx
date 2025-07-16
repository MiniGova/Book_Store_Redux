import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./reducers";

export const store = configureStore({
  reducer: {
    Book: bookReducer,
  },
});