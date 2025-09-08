import React, { useState } from "react";

const ReviewResearch = () => {
  const [researchList, setResearchList] = useState([
    { id: 1, title: "Mangrove Ecosystem", researcher: "Asha Said", status: "Pending" },
    { id: 2, title: "Water Pollution Study", researcher: "Juma Ali", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setResearchList(
      researchList.map((r) =>
        r.id === id ? { ...r, status: "Approved" } : r
      )
    );
  };

  const handleReject = (id) => {
    setResearchList(
      researchList.map((r) =>
        r.id === id ? { ...r, status: "Rejected" } : r
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Review Research</h2>
      {researchList.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{r.title}</h3>
          <p><strong>Researcher:</strong> {r.researcher}</p>
          <p><strong>Status:</strong> {r.status}</p>
          {r.status === "Pending" && (
            <div>
              <button onClick={() => handleApprove(r.id)}>Approve</button>
              <button onClick={() => handleReject(r.id)}>Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewResearch;
