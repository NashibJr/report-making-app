import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pupils: [],
  searchResult: [],
};
const pupilsSlice = createSlice({
  name: "pupils",
  initialState,
  reducers: {
    addPupils: (state, action) => {
      state.pupils = state.pupils.concat(action.payload);
    },
    handleSearch: (state, action) => {
      const wantedPupils = state.pupils.filter(
        (pupil) =>
          pupil.firstName.includes(action.payload) ||
          pupil.lastName.includes(action.payload)
      );
      state.searchResult = wantedPupils;
    },
  },
});

export const { addPupils, handleSearch } = pupilsSlice.actions;

export default pupilsSlice;
