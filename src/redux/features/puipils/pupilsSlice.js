import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  pupils: [],
  searchResult: [],
};
const pupilsSlice = createSlice({
  name: "pupils",
  initialState,
  reducers: {
    addPupils: (state, action) => {
      const pupil = {
        ...action.payload,
        position: "",
        grade: "",
        total: "",
        agg: { mathAgg: "", sstAgg: "", engAgg: "", sciAgg: "" },
        aggregates: "",
      };
      state.pupils = state.pupils.concat(pupil);
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
