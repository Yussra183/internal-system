import React, { useState } from "react";

const DivisionReports = () => {
  const [reports] = useState([
    { researcher: "Ali Juma", title: "Marine Life Survey", status: "Completed" },
    { researcher: "Fatma Salum", title: "Coral Reef Study", status: "In Progress" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Division Reports</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#1ca3de", color: "white" }}>
            <th>Researcher</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
              <td>{r.researcher}</td>
              <td>{r.title}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DivisionReports;
