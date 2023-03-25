import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleDelete } from "../redux/features/puipils/pupilsSlice";

const Pupil = ({ pupil }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="pupil-content">
      <h3>
        {pupil.firstName} {pupil.lastName} {pupil.otherNames}
      </h3>
      <p>
        {pupil.class}
        <button
          type="button"
          onClick={() => {
            navigate(`/singlepage/${pupil.id}`);
          }}
        >
          View puipl's scores
        </button>
        <button type="button" onClick={() => dispatch(handleDelete(pupil))}>
          Delete pupil
        </button>
      </p>
    </div>
  );
};

export default Pupil;
