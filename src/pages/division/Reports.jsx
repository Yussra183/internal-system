import React, { useState } from "react";
import "./DivisionReports.css";

const DivisionReports = () => {
  const [reports] = useState([
    { researcher: "Ali Juma", title: "Marine Life Survey", status: "Completed" },
    { researcher: "Fatma Salum", title: "Coral Reef Study", status: "In Progress" },
    { researcher: "Hassan Omar", title: "Seagrass Monitoring", status: "Pending" },
  ]);

  return (
    <div className="division-container">
      <h2>Division Reports</h2>
      <table className="division-table">
        <thead>
          <tr>
            <th>Researcher</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i}>
              <td>{r.researcher}</td>
              <td>{r.title}</td>
              <td>
                <span className={`status-badge ${r.status.toLowerCase().replace(/\s/g,'')}`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionReports;
