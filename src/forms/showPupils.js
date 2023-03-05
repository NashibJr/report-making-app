import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pupil from "../components/pupils";
import { handlePosition } from "../redux/features/puipils/pupilsSlice";
import Search from "./search";

const ShowPupils = () => {
  const pupils = useSelector((state) => state.pupils.pupils);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handlePosition());
  }, [dispatch]);
  console.log(pupils);
  return (
    <div className="show-pupils-content">
      <div className="pupils-content">
        <h1>All pupils</h1>
        {pupils.length === 0 ? (
          <p style={{ marginTop: "15vh", marginLeft: "3vh", color: "red" }}>
            No pupils yet
          </p>
        ) : (
          <div className="pupils">
            {pupils &&
              pupils.map((pupil) => (
                <li key={pupil.id}>
                  <Pupil pupil={pupil} />
                </li>
              ))}
          </div>
        )}
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default ShowPupils;
