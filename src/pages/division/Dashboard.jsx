// import React, { useContext, useState } from "react";
// import "./DivisionDashboard.css";
// import { AuthContext } from "../../context/AuthContext";

// const DivisionDashboard = () => {
//   const { proposals, addProposal } = useContext(AuthContext);
//   const [showForm, setShowForm] = useState(false);
//   const [newProposal, setNewProposal] = useState({ title: "", type: "", description: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const proposalWithTime = {
//       ...newProposal,
//       submittedAt: new Date().toLocaleString(),
//     };
//     addProposal(proposalWithTime);
//     setNewProposal({ title: "", type: "", description: "" });
//     setShowForm(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Division Head Dashboard</h2>

//       <div className="cards-container">
//         <div className="card"><h3>Total Researchers</h3><p>12</p></div>
//         <div className="card"><h3>Ongoing Projects</h3><p>5</p></div>
//         <div className="card"><h3>Pending Reviews</h3><p>3</p></div>
//         <div className="card"><h3>Total Proposals</h3><p>{proposals.length}</p></div>
//         <div className="card"><h3>Total Proposals Conducted</h3><p>5</p></div>
//       </div>

//       {/* Toggle Form Button */}
//       <div className="add-proposal-btn">
//         <button onClick={() => setShowForm(!showForm)}>
//           {showForm ? "Close Proposal Form" : "+ Add New Proposal"}
//         </button>
//       </div>

//       {/* Proposal Form */}
//       {showForm && (
//         <form className="proposal-form" onSubmit={handleSubmit}>
//           <label>Proposal Title</label>
//           <input
//             type="text"
//             value={newProposal.title}
//             onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
//             required
//           />

//           <label>Proposal Type</label>
//           <input
//             type="text"
//             value={newProposal.type}
//             onChange={(e) => setNewProposal({ ...newProposal, type: e.target.value })}
//             required
//           />

//           <label>Proposal Description</label>
//           <textarea
//             value={newProposal.description}
//             onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
//           ></textarea>

//           <button type="submit">Submit Proposal</button>
//         </form>
//       )}

//       {/* Table of proposals */}
//       {proposals.length > 0 && (
//         <div className="proposals-table">
//           <h3>All Proposals</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Title</th>
//                 <th>Type</th>
//                 <th>Submitted At</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {proposals.map((p, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{p.title}</td>
//                   <td>{p.type}</td>
//                   <td>{p.submittedAt}</td>
//                   <td>{p.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
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
  const [newProposal, setNewProposal] = useState({ title: "", type: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const proposalWithTime = {
      ...newProposal,
      submittedAt: new Date().toLocaleString(),
      status: "Pending", // default status
    };
    addProposal(proposalWithTime);
    setNewProposal({ title: "", type: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="dashboard-container">
      <h2>Division Head Dashboard</h2>

      {/* Cards */}
      <div className="cards-container">
        <div className="card"><h3>Total Researchers</h3><p>12</p></div>
        <div className="card"><h3>Ongoing Projects</h3><p>5</p></div>
        <div className="card"><h3>Pending Reviews</h3><p>3</p></div>
        <div className="card"><h3>Total Proposals</h3><p>{proposals.length}</p></div>
        <div className="card"><h3>Total Proposals Conducted</h3><p>5</p></div>
      </div>

      {/* Toggle Form Button */}
      <div className="add-proposal-btn">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Proposal Form" : "+ Add New Proposal"}
        </button>
      </div>

      {/* Proposal Form */}
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
          <select
            value={newProposal.type}
            onChange={(e) => setNewProposal({ ...newProposal, type: e.target.value })}
            required
          >
            <option value="">Select type</option>
            <option value="Fisheries Research">Fisheries Research</option>
            <option value="Marine Biology Research">Marine Biology Research</option>
            <option value="Environmental & Ocean Systems Research">
              Environmental & Ocean Systems Research
            </option>
          </select>

          <label>Proposal Description</label>
          <textarea
            value={newProposal.description}
            onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
          ></textarea>

          <button type="submit">Submit Proposal</button>
        </form>
      )}

      {/* Table of proposals */}
      {proposals.length > 0 && (
        <div className="proposals-table">
          <h3>All Proposals</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Submitted At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((p, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{p.title}</td>
                  <td>{p.type}</td>
                  <td>{p.submittedAt}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DivisionDashboard;



















