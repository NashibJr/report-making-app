import { configureStore } from "@reduxjs/toolkit";
import pupilsSlice from "../features/puipils/pupilsSlice";

export const store = configureStore({
  reducer: {
    pupils: pupilsSlice.reducer,
  },
});
