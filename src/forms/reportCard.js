import React from "react";
import badge from "../images/scbhoologo.png";

const ReportCard = () => {
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
        <h3>Name of pupil: Mbaziira Henry</h3>
        <h3>Term: 2</h3>
        <h3>Class: P.5</h3>
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
            <td>90</td>
            <td>1</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>SCIE</td>
            <td>90</td>
            <td>1</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>SST</td>
            <td>90</td>
            <td>1</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>ENG</td>
            <td>90</td>
            <td>1</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>360</td>
            <td>4</td>
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
          <strong>Grade:</strong> 1
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
