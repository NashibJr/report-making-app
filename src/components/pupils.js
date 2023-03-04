import React from "react";
import { useNavigate } from "react-router-dom";

const Pupil = ({ pupil }) => {
  const navigate = useNavigate();
  return (
    <div
      className="pupil-content"
      onClick={() => {
        navigate(`/singlepage/${pupil.id}`);
      }}
    >
      <h3>
        {pupil.firstName} {pupil.lastName} {pupil.otherNames}
      </h3>
      <p>{pupil.class}</p>
    </div>
  );
};

export default Pupil;
