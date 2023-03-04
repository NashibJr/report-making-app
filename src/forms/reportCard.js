import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import badge from "../images/scbhoologo.png";

const ReportCard = () => {
  const { id } = useParams();
  const pupils = useSelector((state) => state.pupils.pupils);
  const pupil = pupils.find((pupil) => pupil.id === id);
  console.log(pupils);
  return (
    <div className="report-content">
      <h2>XXX Primary School Terminal Report</h2>
      <header className="header-content">
        <img src={badge} height="100px" width="100px" alt="" />
        <address>
          <h3>XXX Primary School</h3>
          <p>P.O.BOX 27483</p>
          <p>04657973737382</p>
        </address>
      </header>
      <div>
        <h3>
          Name of pupil: {pupil.firstName} {pupil.lastName} {pupil.otherNames}
        </h3>
        <h3>Term: 2</h3>
        <h3>Class: {pupil.class}</h3>
      </div>
      <div>
        <table>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>AGG</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td>MTC</td>
            <td>{pupil.mathematics}</td>
            <td>{pupil.agg.mathAgg}</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>SCIE</td>
            <td>{pupil.sci}</td>
            <td>{pupil.agg.sciAgg}</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>SST</td>
            <td>{pupil.sst}</td>
            <td>{pupil.agg.sstAgg}</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>ENG</td>
            <td>{pupil.english}</td>
            <td>{pupil.agg.engAgg}</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>{pupil.total}</td>
            <td>{pupil.aggregates}</td>
          </tr>
        </table>
      </div>
      <div className="remarks-content">
        <p>
          <strong>Teacher's comment:</strong> Excellent performance, keep it up
        </p>
        <p>
          <strong>Headteacher's comment:</strong> Excellent performance, keep it
          up
        </p>
        <p>
          <strong>Position:</strong> <strong>2</strong> out of{" "}
          <strong>120</strong>
        </p>
        <p>
          <span>
            <strong>Grade:</strong> {pupil.grade}
          </span>
          <button type="button">Print</button>
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
