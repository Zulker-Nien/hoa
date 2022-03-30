import React from "react";
import BackBtn from "../../../components/BackBtn";
import "./log.scss";
const log = () => {
  return (
    <div className="logContainer">
      <BackBtn link="/home" />
      <div className="tableContainer">
        <div className="tableWrapper">
          <table>
            <tr className="tableHeader">
            
              <th>Date</th>
              <th>HOA Name</th>
              <th>Market</th>
              <th>Team</th>
              <th>Employee</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default log;
