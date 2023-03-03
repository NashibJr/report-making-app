import React from "react";

const Pupil = ({ pupil }) => {
  return (
    <div className="pupil-content">
      <h3>
        {pupil.firstName} {pupil.lastName} {pupil.otherNames}
      </h3>
      <p>{pupil.class}</p>
    </div>
  );
};

export default Pupil;
