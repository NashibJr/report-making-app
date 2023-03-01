import React, { useState } from "react";

const EnterMarks = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    english: "",
    mathematics: "",
    sst: "",
    sci: "",
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
    Boolean(state.sci);
  return (
    <form>
      <div>
        <h2>Student</h2>
        <div className="input-align">
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
      <button type="button" disabled={!onSave}>
        Save
      </button>
    </form>
  );
};

export default EnterMarks;
