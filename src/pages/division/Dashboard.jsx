// import React from "react";

// const DivisionDashboard = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Division Head Dashboard</h2>
//       <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
//         <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
//           <h3>Total Researchers</h3>
//           <p>12</p>
//         </div>
//         <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
//           <h3>Ongoing Projects</h3>
//           <p>5</p>
//         </div>
//         <div style={{ flex: 1, background: "#f5f5f5", padding: "20px", borderRadius: "10px" }}>
//           <h3>Pending Reviews</h3>
//           <p>3</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DivisionDashboard;

import React, { useContext, useState } from "react";
import "./DivisionDashboard.css";
import { AuthContext } from "../../context/AuthContext";

const DivisionDashboard = () => {
  const { proposals, addProposal } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [newProposal, setNewProposal] = useState({ title: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProposal(newProposal);
    setNewProposal({ title: "", type: "" });
    setShowForm(false);
    alert("Proposal sent to researcher notifications!");
  };

  return (
    <div className="dashboard-container">
      <h2>Division Head Dashboard</h2>

      <div className="cards-container">
        <div className="card"><h3>Total Researchers</h3><p>12</p></div>
        <div className="card"><h3>Ongoing Projects</h3><p>5</p></div>
        <div className="card"><h3>Pending Reviews</h3><p>3</p></div>
        <div className="card"><h3>Total Proposals</h3><p>{proposals.length}</p></div>
        <div className="card"><h3>Total Proposals Conducted</h3><p>5</p></div>
      </div>

      <div className="add-proposal-btn">
        <button onClick={() => setShowForm(true)}>+ Add New Proposal</button>
      </div>

      {showForm && (
        <form className="proposal-form" onSubmit={handleSubmit}>
          <label>Proposal Title</label>
          <input
            type="text"
            value={newProposal.title}
            onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
            required
          />

          <label>Proposal Type</label>
          <input
            type="text"
            value={newProposal.type}
            onChange={(e) => setNewProposal({ ...newProposal, type: e.target.value })}
            required
          />

          <button type="submit">Submit Proposal</button>
        </form>
      )}
    </div>
  );
};

export default DivisionDashboard;


