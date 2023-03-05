import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePupils } from "../redux/features/puipils/pupilsSlice";

const EnterMarks = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    english: "",
    mathematics: "",
    sst: "",
    sci: "",
    class: "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const onSave =
    Boolean(state.firstName) &&
    Boolean(state.lastName) &&
    Boolean(state.english) &&
    Boolean(state.mathematics) &&
    Boolean(state.sst) &&
    Boolean(state.sci) &&
    Boolean(state.class);
  const pupil = {
    id: nanoid(),
    firstName: state.firstName,
    lastName: state.lastName,
    otherNames: state.otherNames,
    english: state.english,
    mathematics: state.mathematics,
    sst: state.sst,
    sci: state.sci,
    class: state.class,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <form>
      <div>
        <h1>Report Making App</h1>
        <h2>Student</h2>
        <div className="input-align align-input-firstdiv">
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="input-content content-padd"
          />
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="input-content"
          />
          <input
            type="text"
            name="otherNames"
            value={state.otherNames}
            onChange={handleChange}
            placeholder="Other names (optional)"
            className="input-content"
          />
          <input
            type="text"
            name="class"
            value={state.class}
            onChange={handleChange}
            placeholder="Class"
            className="input-content"
            style={{ width: "16.5%" }}
          />
        </div>
      </div>
      <div>
        <h2>Subject scores</h2>
        <div className="input-align">
          <input
            type="number"
            name="english"
            value={state.english}
            onChange={handleChange}
            placeholder="English"
            className="input-content content-padd"
          />
          <input
            type="number"
            name="mathematics"
            value={state.mathematics}
            onChange={handleChange}
            placeholder="Mathematics"
            className="input-content"
          />
        </div>
        <div className="input-align">
          <input
            type="number"
            name="sst"
            value={state.sst}
            onChange={handleChange}
            placeholder="SST"
            className="input-content content-padd"
          />
          <input
            type="number"
            name="sci"
            value={state.sci}
            onChange={handleChange}
            placeholder="Science"
            className="input-content"
          />
        </div>
      </div>
      <button
        type="button"
        disabled={!onSave}
        onClick={() => {
          if (
            state.mathematics > 100 ||
            state.mathematics < 0 ||
            state.sst > 100 ||
            state.sst < 0 ||
            state.sci > 100 ||
            state.sci < 0 ||
            state.english < 0 ||
            state.english > 100
          ) {
            alert("Marks should be between 0 and 100");
          } else {
            dispatch(handlePupils(pupil));
            setState({
              firstName: "",
              lastName: "",
              otherNames: "",
              english: "",
              mathematics: "",
              sst: "",
              sci: "",
              class: "",
            });
            alert("Successfully added");
          }
        }}
      >
        Save
      </button>
      <button type="button" onClick={() => navigate("/showpupils")}>
        View pupils
      </button>
    </form>
  );
};

export default EnterMarks;
