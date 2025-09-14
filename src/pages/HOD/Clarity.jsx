import React, { useState } from "react";
import "./Clarity.css";

const dummyProposals = [
  {
    id: 1,
    title: "Water Pollution Study",
    type: "Thesis",
    status: "Pending",
    proposalPDF: "https://example.com/proposal1.pdf",
    finalReportPDF: "https://example.com/final1.pdf",
    comments: [],
  },
  {
    id: 2,
    title: "Mangrove Conservation",
    type: "Article",
    status: "Approved",
    proposalPDF: "https://example.com/proposal2.pdf",
    finalReportPDF: null,
    comments: [{ text: "Needs revision", timestamp: "2025-09-05 10:00" }],
  },
];

const ManageProposals = () => {
  const [proposals, setProposals] = useState(dummyProposals);
  const [showModal, setShowModal] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [rejectComment, setRejectComment] = useState("");

  const openRejectModal = (proposal) => {
    setSelectedProposal(proposal);
    setRejectComment("");
    setShowModal(true);
  };

  const handleRejectSubmit = () => {
    const updatedProposals = proposals.map((p) => {
      if (p.id === selectedProposal.id) {
        return {
          ...p,
          status: "Rejected",
          comments: [
            ...p.comments,
            { text: rejectComment, timestamp: new Date().toLocaleString() },
          ],
        };
      }
      return p;
    });
    setProposals(updatedProposals);
    setShowModal(false);
  };

  const handleClear = (proposal) => {
    const updatedProposals = proposals.map((p) =>
      p.id === proposal.id ? { ...p, status: "Cleared" } : p
    );
    setProposals(updatedProposals);
  };

  return (
    <div className="manage-proposals-container">
      <h2>Manage Proposals</h2>
      <table className="proposals-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Proposal PDF</th>
            <th>Final Report PDF</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p, index) => (
            <tr
              key={p.id}
              className={p.finalReportPDF ? "final-report-row" : ""}
            >
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>{p.type}</td>
              <td>{p.status}</td>
              <td>
                <button
                  onClick={() => window.open(p.proposalPDF, "_blank")}
                  className="pdf-btn"
                >
                  View PDF
                </button>
              </td>
              <td>
                {p.finalReportPDF ? (
                  <button
                    onClick={() => window.open(p.finalReportPDF, "_blank")}
                    className="pdf-btn"
                  >
                    View PDF
                  </button>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {p.comments.length > 0
                  ? p.comments.map((c, idx) => (
                      <div key={idx}>
                        {c.text} ({c.timestamp})
                      </div>
                    ))
                  : "-"}
              </td>
              <td>
                {p.status !== "Rejected" && (
                  <button
                    onClick={() => openRejectModal(p)}
                    className="action-btn reject"
                  >
                    Reject
                  </button>
                )}
                {p.finalReportPDF && p.status !== "Cleared" && (
                  <button
                    onClick={() => handleClear(p)}
                    className="action-btn clear"
                  >
                    Clear
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Reject Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reject Proposal</h3>
            <textarea
              placeholder="Enter reason for rejection"
              value={rejectComment}
              onChange={(e) => setRejectComment(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleRejectSubmit} className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProposals;
