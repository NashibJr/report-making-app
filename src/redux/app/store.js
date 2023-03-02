import { configureStore } from "@reduxjs/toolkit";
import puiplsSlice from "../features/puipils/pupilsSlice";

export const store = configureStore({
  reducer: {
    pupils: puiplsSlice.reducer,
  },
});
