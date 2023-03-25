import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pupilsSlice from "../features/puipils/pupilsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  pupils: pupilsSlice.reducer,
});
const persistConfig = {
  key: "pupils",
  storage,
  whitelist: ["pupils"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
