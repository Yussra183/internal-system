// import React, { useState } from "react";
// import "./SubmitResearch.css";

// const SubmitResearch = () => {
//   const [proposals, setProposals] = useState([
//     { title: "AI in Healthcare", type: "Thesis", status: "Pending", lastModified: null, pdf: null },
//     { title: "Blockchain Research", type: "Article", status: "Pending", lastModified: null, pdf: null },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ title: "", type: "", pdf: null });
//   const [confirmation, setConfirmation] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "pdf") {
//       setFormData({ ...formData, pdf: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.type || !formData.pdf) {
//       alert("Please fill all fields and attach PDF!");
//       return;
//     }
//     const newProposal = {
//       title: formData.title,
//       type: formData.type,
//       status: "Pending",
//       lastModified: new Date().toLocaleString(),
//       pdf: formData.pdf,
//     };
//     setProposals([...proposals, newProposal]);
//     setFormData({ title: "", type: "", pdf: null });
//     setShowForm(false);
//     setConfirmation("Proposal submitted successfully!");
//     setTimeout(() => setConfirmation(""), 3000);
//   };

//   const handleEdit = (index) => {
//     const prop = proposals[index];
//     setFormData({ title: prop.title, type: prop.type, pdf: prop.pdf });
//     setShowForm(true);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Available Proposals</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr style={{ background: "#1ca3de", color: "white" }}>
//             <th style={{ padding: "10px" }}>Title</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Last Modified</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {proposals.map((prop, index) => (
//             <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
//               <td style={{ padding: "10px" }}>{prop.title}</td>
//               <td>{prop.type}</td>
//               <td>{prop.status}</td>
//               <td>{prop.lastModified || "-"}</td>
//               <td>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => setShowForm(!showForm)}>
//           {showForm ? "Cancel" : "Add New Proposal"}
//         </button>
//       </div>

//       {confirmation && (
//         <p style={{ color: "green", marginTop: "10px" }}>{confirmation}</p>
//       )}

//       {showForm && (
//         <form onSubmit={handleSubmit} style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
//           <h3>Submit New Proposal</h3>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Title: </label>
//             <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Type: </label>
//             <select name="type" value={formData.type} onChange={handleInputChange}>
//               <option value="">Select type</option>
//               <option value="Thesis">Thesis</option>
//               <option value="Article">Article</option>
//               <option value="Project">Project</option>
//             </select>
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label>Attach PDF: </label>
//             <input type="file" name="pdf" accept="application/pdf" onChange={handleInputChange} />
//           </div>
//           <button type="submit">Submit Proposal</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SubmitResearch;
import React, { useState } from "react";
import "./SubmitResearch.css";

const SubmitResearch = ({ availableProposals, setAvailableProposals, myResearches, setMyResearches }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", type: "", pdf: null });
  const [confirmation, setConfirmation] = useState("");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf") {
      setFormData({ ...formData, pdf: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 👉 Add New Proposal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.type || !formData.pdf) {
      alert("Please fill all fields and attach PDF!");
      return;
    }
    const newProposal = {
      title: formData.title,
      type: formData.type,
      status: "In Progress",
      lastModified: new Date().toLocaleString(),
      pdf: formData.pdf,
      startDate: new Date().toLocaleDateString(),
    };
    // moja kwa moja inakwenda MyResearches
    setMyResearches([...myResearches, newProposal]);

    setFormData({ title: "", type: "", pdf: null });
    setShowForm(false);
    setConfirmation("Proposal submitted successfully!");
    setTimeout(() => setConfirmation(""), 3000);
  };

  // 👉 Submit existing (kutoka available → myResearches)
  const handleSubmitAvailable = (index) => {
    const proposal = availableProposals[index];
    const movedProposal = {
      ...proposal,
      status: "In Progress",
      startDate: new Date().toLocaleDateString(),
      lastModified: new Date().toLocaleString(),
    };

    // toa kutoka available
    const updatedAvailable = [...availableProposals];
    updatedAvailable.splice(index, 1);
    setAvailableProposals(updatedAvailable);

    // ongeza MyResearches
    setMyResearches([...myResearches, movedProposal]);

    setConfirmation(`"${proposal.title}" moved to My Researches.`);
    setTimeout(() => setConfirmation(""), 3000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Proposals</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#1ca3de", color: "white" }}>
            <th style={{ padding: "10px" }}>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Modified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {availableProposals.map((prop, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "10px" }}>{prop.title}</td>
              <td>{prop.type}</td>
              <td>{prop.status}</td>
              <td>{prop.lastModified || "-"}</td>
              <td>
                <button onClick={() => handleSubmitAvailable(index)}>Submit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add New Proposal"}
        </button>
      </div>

      {confirmation && (
        <p style={{ color: "green", marginTop: "10px" }}>{confirmation}</p>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
          <h3>Submit New Proposal</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>Title: </label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Type: </label>
            <select name="type" value={formData.type} onChange={handleInputChange}>
              <option value="">Select type</option>
              <option value="Thesis">Thesis</option>
              <option value="Article">Article</option>
              <option value="Project">Project</option>
            </select>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Attach PDF: </label>
            <input type="file" name="pdf" accept="application/pdf" onChange={handleInputChange} />
          </div>
          <button type="submit">Submit Proposal</button>
        </form>
      )}
    </div>
  );
};

export default SubmitResearch;
