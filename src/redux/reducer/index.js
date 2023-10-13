import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./accountReducer";

export const globalConfig = configureStore({
  reducer: {
    accountReducer,
  },
});
