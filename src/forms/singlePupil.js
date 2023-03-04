import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Singlepupil = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pupils = useSelector((state) => state.pupils.pupils);
  const pupil = pupils.find((pupil) => pupil.id === id);
  return (
    <div className="single-pupil">
      <h1>Student Profile</h1>
      <div>
        <p>
          Name:{" "}
          <strong>
            {pupil.firstName} {pupil.lastName} {pupil.otherNames}
          </strong>
        </p>
        <strong>Scores</strong>
        <table>
          <tr>
            <td>English: </td>
            <td>{pupil.english}</td>
          </tr>
          <tr>
            <td>Mathematics: </td>
            <td>{pupil.mathematics}</td>
          </tr>
          <tr>
            <td>Social studies: </td>
            <td>{pupil.sst}</td>
          </tr>
          <tr>
            <td>Science: </td>
            <td>{pupil.sci}</td>
          </tr>
          <tr>
            <td>Class: </td>
            <td style={{ textTransform: "uppercase" }}>{pupil.class}</td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className="single-pupil-button"
                onClick={() => {
                  navigate("/reportcard");
                }}
              >
                Generate report
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                className="single-pupil-button single-pupil-back-button"
                onClick={() => {
                  navigate("/showpupils");
                }}
              >
                Back
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Singlepupil;
