// import React from "react";

// const MyResearches = ({ myResearches }) => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>My Researches</h2>
//       {myResearches.length === 0 ? (
//         <p>No researches yet.</p>
//       ) : (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ background: "#1ca3de", color: "white" }}>
//               <th style={{ padding: "10px" }}>Title</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>Start Date</th>
//               <th>Last Modified</th>
//             </tr>
//           </thead>
//           <tbody>
//             {myResearches.map((res, index) => (
//               <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
//                 <td style={{ padding: "10px" }}>{res.title}</td>
//                 <td>{res.type}</td>
//                 <td>{res.status}</td>
//                 <td>{res.startDate}</td>
//                 <td>{res.lastModified}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyResearches;
import React, { useState } from "react";
import { useNavigate ,useLocation   } from "react-router-dom";
const MyResearches = ({ myProposals, updateProposal }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ title: "", type: "", pdf: null, finalPdf: null });

  const handleEdit = (index) => {
    const prop = myProposals[index];
    setFormData({ ...prop });
    setEditIndex(index);
  };

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSave = e => {
    e.preventDefault();
    updateProposal(editIndex, formData);
    setEditIndex(null);
  };

  return (
    <div>
      <h2>My Researches</h2>
      {myProposals.length === 0 ? <p>No research submitted yet.</p> :
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#1ca3de", color: "white" }}>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Proposal PDF</th>
              <th>Final Report</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myProposals.map((p, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
                <td>{p.title}</td>
                <td>{p.type}</td>
                <td>{p.status}</td>
                <td>{p.pdf?.name || "-"}</td>
                <td>{p.finalPdf?.name || "-"}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {editIndex !== null && (
        <form onSubmit={handleSave} style={{ marginTop: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Edit Proposal / Add Final Report</h4>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Utafiti wa uvuvi">Utafiti wa uvuvi</option>
            <option value="Utafiti wa viumbe maji">Utafiti wa viumbe maji</option>
            <option value="Utafiti wa mazingira na mifumo ya maji">Utafiti wa mazingira na mifumo ya maji</option>
          </select>
          <input type="file" name="pdf" accept="application/pdf" onChange={handleChange} />
          <input type="file" name="finalPdf" accept="application/pdf" onChange={handleChange} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default MyResearches;
