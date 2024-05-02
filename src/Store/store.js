import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Reducers/UserReducer";

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  },
});
