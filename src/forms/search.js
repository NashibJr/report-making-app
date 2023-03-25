import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pupil from "../components/pupils";
import {
  emptySearchArray,
  handleSearch,
} from "../redux/features/puipils/pupilsSlice";

const Search = () => {
  const [pupilName, setPupilName] = useState("");
  const dispatch = useDispatch();
  const pupils = useSelector((state) => state.pupils?.searchResult);
  const navigate = useNavigate();
  useEffect(() => {
    if (pupilName !== "") {
      dispatch(handleSearch(pupilName));
    } else {
      dispatch(emptySearchArray());
    }
    setPupilName(pupilName);
  }, [pupilName, dispatch]);
  return (
    <div className="search-content">
      <h1>Search</h1>
      <form>
        <input
          type="text"
          name="pupilName"
          value={pupilName}
          className="form-content-search"
          placeholder="Pupil's name"
          onChange={(event) => setPupilName(event.target.value)}
        />
        <input
          type="button"
          value="Back"
          className="input-button"
          onClick={() => {
            navigate("/");
          }}
        />
      </form>
      <div className="pupils search">
        {pupils &&
          pupils?.map((pupil) => (
            <li key={pupil.id}>
              <Pupil pupil={pupil} />
            </li>
          ))}
      </div>
    </div>
  );
};

export default Search;
