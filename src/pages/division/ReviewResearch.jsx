// import React, { useState } from "react";

// const ReviewResearch = () => {
//   const [researchList, setResearchList] = useState([
//     { id: 1, title: "Mangrove Ecosystem", researcher: "Asha Said", status: "Pending" },
//     { id: 2, title: "Water Pollution Study", researcher: "Juma Ali", status: "Pending" },
//   ]);

//   const handleApprove = (id) => {
//     setResearchList(
//       researchList.map((r) =>
//         r.id === id ? { ...r, status: "Approved" } : r
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setResearchList(
//       researchList.map((r) =>
//         r.id === id ? { ...r, status: "Rejected" } : r
//       )
//     );
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Review Research</h2>
//       {researchList.map((r) => (
//         <div
//           key={r.id}
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h3>{r.title}</h3>
//           <p><strong>Researcher:</strong> {r.researcher}</p>
//           <p><strong>Status:</strong> {r.status}</p>
//           {r.status === "Pending" && (
//             <div>
//               <button onClick={() => handleApprove(r.id)}>Approve</button>
//               <button onClick={() => handleReject(r.id)}>Reject</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewResearch;
import React, { useState } from "react";

const ReviewResearch = () => {
  const [researchList, setResearchList] = useState([
    {
      id: 1,
      title: "Mangrove Ecosystem",
      researcher: "Asha Said",
      status: "Pending",
      document: "https://example.com/mangrove.pdf",
      comment: "",
    },
    {
      id: 2,
      title: "Water Pollution Study",
      researcher: "Juma Ali",
      status: "Pending",
      document: "https://example.com/water_pollution.pdf",
      comment: "",
    },
  ]);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectComment, setRejectComment] = useState("");
  const [currentRejectId, setCurrentRejectId] = useState(null);

  const handleApprove = (id) => {
    setResearchList(
      researchList.map((r) =>
        r.id === id ? { ...r, status: "Approved" } : r
      )
    );
  };

  const handleRejectClick = (id) => {
    setCurrentRejectId(id);
    setRejectComment("");
    setShowRejectModal(true);
  };

  const handleRejectSubmit = () => {
    setResearchList(
      researchList.map((r) =>
        r.id === currentRejectId
          ? { ...r, status: "Rejected", comment: rejectComment }
          : r
      )
    );
    setShowRejectModal(false);
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
          {r.comment && (
            <p style={{ color: "red" }}>
              <strong>Comment:</strong> {r.comment}
            </p>
          )}
          <p>
            <a
              href={r.document}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              View Document
            </a>
          </p>

          {r.status === "Pending" && (
            <div>
              <button
                onClick={() => handleApprove(r.id)}
                style={{ marginRight: "10px" }}
              >
                Approve
              </button>
              <button onClick={() => handleRejectClick(r.id)}>Reject</button>
            </div>
          )}
        </div>
      ))}

      {/* Reject Modal */}
      {showRejectModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h3>Reject Research</h3>
            <textarea
              placeholder="Add comment for rejection..."
              value={rejectComment}
              onChange={(e) => setRejectComment(e.target.value)}
              style={{ width: "100%", height: "100px", marginBottom: "10px" }}
            />
            <div style={{ textAlign: "right" }}>
              <button
                onClick={() => setShowRejectModal(false)}
                style={{ marginRight: "10px" }}
              >
                Cancel
              </button>
              <button onClick={handleRejectSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewResearch;
