import { configureStore } from "@reduxjs/toolkit";

export const globalConfig = configureStore({
  reducer: {
    counter: counterReducer
  },
});