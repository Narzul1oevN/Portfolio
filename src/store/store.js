import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/todoSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});