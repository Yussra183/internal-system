// import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [proposals, setProposals] = useState([
//     { id: 1, title: "Water Pollution Study", type: "Thesis", status: "Approved", date: "2025-09-01", description: "Research on water pollution in coastal areas." },
//     { id: 2, title: "Mangrove Conservation", type: "Article", status: "Rejected", date: "2025-09-05", description: "Study on conserving mangroves in Zanzibar." },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [newProposal, setNewProposal] = useState({ title: "", type: "", description: "" });

//   // Add new proposal
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const proposal = {
//       id: Date.now(),
//       ...newProposal,
//       status: "Pending",
//       date: new Date().toLocaleDateString(),
//     };
//     setProposals([...proposals, proposal]);
//     setNewProposal({ title: "", type: "", description: "" });
//     setShowForm(false);
//   };

//   // Count stats
//   const totalProposals = proposals.length;
//   const approved = proposals.filter((p) => p.status === "Approved").length;
//   const rejected = proposals.filter((p) => p.status === "Rejected").length;
//   const pending = proposals.filter((p) => p.status === "Pending").length;

//   return (
//     <div className="dashboard-container">
//       <h2>Head of Department Dashboard</h2>
//       <p>Welcome HOD! You can manage department approvals here.</p>

//       {/* Cards */}
//       <div className="stats-cards">
//         <div className="card total">
//           <h3>Total Proposals</h3>
//           <p>{totalProposals}</p>
//         </div>
//         <div className="card approved">
//           <h3>Approved</h3>
//           <p>{approved}</p>
//         </div>
//         <div className="card rejected">
//           <h3>Rejected</h3>
//           <p>{rejected}</p>
//         </div>
//         <div className="card pending">
//           <h3>Pending</h3>
//           <p>{pending}</p>
//         </div>
//       </div>

//       {/* Add Proposal Button */}
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="add-btn"
//       >
//         {showForm ? "Cancel" : "+ Add New Proposal"}
//       </button>

//       {/* Form */}
//       {showForm && (
//         <form onSubmit={handleSubmit} className="proposal-form">
//           <label>Proposal Title</label>
//           <input
//             type="text"
//             value={newProposal.title}
//             onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
//             required
//           />

//           <label>Proposal Type</label>
//           <select
//             value={newProposal.type}
//             onChange={(e) => setNewProposal({ ...newProposal, type: e.target.value })}
//             required
//           >
//             <option value="">-- Select Type --</option>
//             <option value="Thesis">Thesis</option>
//             <option value="Article">Article</option>
//             <option value="Report">Report</option>
//             <option value="Project">Project</option>
//           </select>

//           <label>Description</label>
//           <textarea
//             value={newProposal.description}
//             onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
//             rows="4"
//             placeholder="Write proposal description..."
//           ></textarea>

//           <button type="submit" className="submit-btn">
//             Submit Proposal
//           </button>
//         </form>
//       )}

//       {/* Table */}
//       <table className="proposal-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Title</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {proposals.map((p, index) => (
//             <tr key={p.id}>
//               <td>{index + 1}</td>
//               <td>{p.title}</td>
//               <td>{p.type}</td>
//               <td>{p.status}</td>
//               <td>{p.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [proposals, setProposals] = useState([
    { id: 1, title: "Water Pollution Study", type: "Thesis", status: "Approved", date: "2025-09-01", description: "Research on water pollution in coastal areas." },
    { id: 2, title: "Mangrove Conservation", type: "Article", status: "Rejected", date: "2025-09-05", description: "Study on conserving mangroves in Zanzibar." },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProposal, setNewProposal] = useState({ title: "", type: "", description: "" });

  // Add new proposal
  const handleSubmit = (e) => {
    e.preventDefault();
    const proposal = {
      id: Date.now(),
      ...newProposal,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };
    setProposals([...proposals, proposal]);
    setNewProposal({ title: "", type: "", description: "" });
    setShowForm(false);
  };

  // Count stats
  const totalProposals = proposals.length;
  const approved = proposals.filter((p) => p.status === "Approved").length;
  const rejected = proposals.filter((p) => p.status === "Rejected").length;
  const pending = proposals.filter((p) => p.status === "Pending").length;
  const conducted = proposals.filter((p) => p.status === "Approved" || p.status === "Rejected").length;

  return (
    <div className="dashboard-container">
      <h2>Head of Department Dashboard</h2>
      <p>Welcome HOD! You can manage department approvals here.</p>

      {/* Cards */}
      <div className="stats-cards">
        <div className="card total">
          <h3>Total Proposals</h3>
          <p>{totalProposals}</p>
        </div>
        <div className="card conducted">
          <h3>Research Conducted</h3>
          <p>{conducted}</p>
        </div>
        <div className="card approved">
          <h3>Approved</h3>
          <p>{approved}</p>
        </div>
        <div className="card rejected">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>
        <div className="card pending">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </div>

      {/* Add Proposal Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="add-btn"
      >
        {showForm ? "Cancel" : "+ Add New Proposal"}
      </button>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="proposal-form">
          <label>Proposal Title</label>
          <input
            type="text"
            value={newProposal.title}
            onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
            required
          />

          <label>Proposal Type</label>
          <select
            value={newProposal.type}
            onChange={(e) => setNewProposal({ ...newProposal, type: e.target.value })}
            required
          >
            <option value="">-- Select Type --</option>
            <option value="Thesis">Thesis</option>
            <option value="Article">Article</option>
            <option value="Report">Report</option>
            <option value="Project">Project</option>
          </select>

          <label>Description</label>
          <textarea
            value={newProposal.description}
            onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
            rows="4"
            placeholder="Write proposal description..."
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit Proposal
          </button>
        </form>
      )}

      {/* Table */}
      <table className="proposal-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.title}</td>
              <td>{p.type}</td>
              <td>{p.status}</td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
