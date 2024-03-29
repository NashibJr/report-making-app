import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pupils: [],
  searchResult: [],
};
const pupilsSlice = createSlice({
  name: "pupils",
  initialState,
  reducers: {
    handlePupils: (state, action) => {
      const pupil = {
        ...action.payload,
        position: 0,
        grade: 0,
        total: 0,
        agg: { mathAgg: 0, sstAgg: 0, engAgg: 0, sciAgg: 0 },
        aggregates: 0,
        comment: {
          _math: "",
          _sst: "",
          _sci: "",
          _eng: "",
          teachers: "",
          headTeachers: "",
        },
      };
      //aggregating mathematics
      if (pupil.mathematics < 40) {
        pupil.agg.mathAgg = 9;
        pupil.comment = "Failed, please improve";
      } else if (pupil.mathematics >= 40 && pupil.mathematics < 45) {
        pupil.agg.mathAgg = 8;
        pupil.comment._math = "Aim higher than this please";
      } else if (pupil.mathematics >= 45 && pupil.mathematics < 40) {
        pupil.agg.mathAgg = 7;
      } else if (pupil.mathematics >= 50 && pupil.mathematics < 55) {
        pupil.agg.mathAgg = 6;
        pupil.comment._math = "Aim higher please";
      } else if (pupil.mathematics >= 55 && pupil.mathematics < 60) {
        pupil.agg.mathAgg = 5;
        pupil.comment._math = "Aim higher than this";
      } else if (pupil.mathematics >= 60 && pupil.mathematics < 64) {
        pupil.agg.mathAgg = 4;
        pupil.comment._math = "Fair, aim higher";
      } else if (pupil.mathematics >= 65 && pupil.mathematics < 70) {
        pupil.agg.mathAgg = 3;
        pupil.comment._math = "Quite good, can go better";
      } else if (pupil.mathematics >= 70 && pupil.mathematics < 80) {
        pupil.agg.mathAgg = 2;
        pupil.comment._math = "Good, don'nt relax";
      } else {
        pupil.agg.mathAgg = 1;
        pupil.comment._math = "Excellent, keep it up";
      }
      //aggregating english
      if (pupil.english < 40) {
        pupil.agg.engAgg = 9;
        pupil.comment._eng = "Failed, please improve";
      } else if (pupil.english >= 40 && pupil.english < 45) {
        pupil.agg.engAgg = 8;
        pupil.comment._eng = "Aim higher than this please";
      } else if (pupil.english >= 45 && pupil.english < 40) {
        pupil.agg.engAgg = 7;
      } else if (pupil.english >= 50 && pupil.english < 55) {
        pupil.agg.engAgg = 6;
        pupil.comment._eng = "Aim higher please";
      } else if (pupil.english >= 55 && pupil.english < 60) {
        pupil.agg.engAgg = 5;
        pupil.comment._eng = "Aim higher than this";
      } else if (pupil.english >= 60 && pupil.english < 64) {
        pupil.agg.engAgg = 4;
        pupil.comment._eng = "Fair, aim higher";
      } else if (pupil.english >= 65 && pupil.english < 70) {
        pupil.agg.engAgg = 3;
        pupil.comment._eng = "Quite good, can go better";
      } else if (pupil.english >= 70 && pupil.english < 80) {
        pupil.agg.engAgg = 2;
        pupil.comment._eng = "Good, don'nt relax";
      } else {
        pupil.agg.engAgg = 1;
        pupil.comment._eng = "Excellent, keep it up";
      }
      //aggregating sst
      if (pupil.sst < 40) {
        pupil.agg.sstAgg = 9;
        pupil.comment._sst = "Failed, please improve";
      } else if (pupil.sst >= 40 && pupil.sst < 45) {
        pupil.agg.sstAgg = 8;
        pupil.comment._sst = "Aim higher than this please";
      } else if (pupil.sst >= 45 && pupil.sst < 40) {
        pupil.agg.sstAgg = 7;
      } else if (pupil.sst >= 50 && pupil.sst < 55) {
        pupil.agg.sstAgg = 6;
        pupil.comment._sst = "Aim higher please";
      } else if (pupil.sst >= 55 && pupil.sst < 60) {
        pupil.agg.sstAgg = 5;
        pupil.comment._sst = "Aim higher than this";
      } else if (pupil.sst >= 60 && pupil.sst < 64) {
        pupil.agg.sstAgg = 4;
        pupil.comment._sst = "Fair, aim higher";
      } else if (pupil.sst >= 65 && pupil.sst < 70) {
        pupil.agg.sstAgg = 3;
        pupil.comment._sst = "Quite good, can go better";
      } else if (pupil.sst >= 70 && pupil.sst < 80) {
        pupil.agg.sstAgg = 2;
        pupil.comment._sst = "Good, don'nt relax";
      } else {
        pupil.agg.sstAgg = 1;
        pupil.comment._sst = "Excellent, keep it up";
      }
      //aggregating science
      if (pupil.sci < 40) {
        pupil.agg.sciAgg = 9;
        pupil.comment._sci = "Failed, please improve";
      } else if (pupil.sci >= 40 && pupil.sci < 45) {
        pupil.agg.sciAgg = 8;
        pupil.comment._sci = "Aim higher than this please";
      } else if (pupil.sci >= 45 && pupil.sci < 40) {
        pupil.agg.sciAgg = 7;
      } else if (pupil.sci >= 50 && pupil.sci < 55) {
        pupil.agg.sciAgg = 6;
        pupil.comment._sci = "Aim higher please";
      } else if (pupil.sci >= 55 && pupil.sci < 60) {
        pupil.agg.sciAgg = 5;
        pupil.comment._sci = "Aim higher than this";
      } else if (pupil.sci >= 60 && pupil.sci < 64) {
        pupil.agg.sciAgg = 4;
        pupil.comment._sci = "Fair, aim higher";
      } else if (pupil.sci >= 65 && pupil.sci < 70) {
        pupil.agg.sciAgg = 3;
        pupil.comment._sci = "Quite good, can go better";
      } else if (pupil.sci >= 70 && pupil.sci < 80) {
        pupil.agg.sciAgg = 2;
        pupil.comment._sci = "Good, don'nt relax";
      } else {
        pupil.agg.sciAgg = 1;
        pupil.comment._sci = "Excellent, keep it up";
      }
      //finding the total aggregates
      pupil.aggregates =
        pupil.agg.sciAgg +
        pupil.agg.sstAgg +
        pupil.agg.engAgg +
        pupil.agg.mathAgg;
      //finding the total
      pupil.total =
        Number(pupil.mathematics) +
        Number(pupil.sst) +
        Number(pupil.sci) +
        Number(pupil.english);
      //grading
      if (pupil.aggregates <= 12) {
        pupil.grade = 1;
      } else if (pupil.aggregates > 12 && pupil.aggregates <= 24) {
        pupil.grade = 2;
      } else if (pupil.aggregates > 24 && pupil.aggregates <= 29) {
        pupil.grade = 3;
      } else if (pupil.aggregates > 29 && pupil.aggregates <= 34) {
        pupil.grade = 4;
      } else {
        pupil.grade = "U";
      }
      if (pupil.grade === 1 || pupil.grade === 2) {
        if (pupil.agg.mathAgg === 9) {
          pupil.grade += 1;
        }
      }
      if (pupil.grade === 1) {
        if (pupil.agg.engAgg === 9) {
          pupil.grade += 2;
        }
      } else if (pupil.grade === 2) {
        if (pupil.agg.engAgg === 9) {
          pupil.grade += 1;
        }
      }
      //teacher's and headteacher's comments
      if (pupil.aggregates >= 34) {
        pupil.comment.teachers = `Advised to repeate ${pupil.class}`;
        pupil.comment.headTeachers = `Advised to repeate ${pupil.class}`;
      } else if (pupil.aggregates > 24 && pupil.aggregates < 34) {
        pupil.comment.teachers = "Improve for better grades";
        pupil.comment.headTeachers = "Try the next class";
      } else if (pupil.aggregates > 12 && pupil.aggregates <= 24) {
        pupil.comment.teachers = "Aim for a first grade";
        pupil.comment.headTeachers = "Promoted to the next class";
      } else {
        pupil.comment.teachers = "Do not relax, keep it us";
        pupil.comment.headTeachers = "Promoted to the next class";
      }
      //updating state
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
    handlePosition: (state, action) => {
      const pupils = state.pupils;
      pupils.sort((a, b) => b.total - a.total);
      for (let index = 0; index < pupils.length; index++) {
        pupils[index].position = index + 1;
      }
    },
    emptySearchArray: (state, action) => {
      state.searchResult = [];
    },
    handleDelete: (state, action) => {
      const { id } = action.payload;
      const pupilsToBeReturned = state.pupils.filter(
        (pupil) => pupil.id !== id
      );
      state.pupils = pupilsToBeReturned;
      state.searchResult = state.searchResult.filter(
        (pupil) => pupil.id !== id
      );
    },
  },
});

export const {
  handlePupils,
  handleSearch,
  handlePosition,
  emptySearchArray,
  handleDelete,
} = pupilsSlice.actions;

export default pupilsSlice;
