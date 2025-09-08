import React from "react";

const DivisionDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Division Head Dashboard</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
          <h3>Total Researchers</h3>
          <p>12</p>
        </div>
        <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
          <h3>Ongoing Projects</h3>
          <p>5</p>
        </div>
        <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
          <h3>Pending Reviews</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default DivisionDashboard;
