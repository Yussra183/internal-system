// import React, { useState } from "react";
// import "./MyResearches.css";

// const MyResearches = ({ myProposals = [], updateProposal = () => {}, approveStatus = {} }) => {
//   const [uploadIndex, setUploadIndex] = useState(null);
//   const [uploadType, setUploadType] = useState(""); // "proposal" or "final"
//   const [docIndex, setDocIndex] = useState(null); // for modifying specific document
//   const [formData, setFormData] = useState({ file: null });

//   const handleChange = e => {
//     const { files } = e.target;
//     if (files) setFormData({ ...formData, file: files[0] });
//   };

//   const handleUpload = () => {
//     if (!formData.file) return alert("Please select a file");

//     const project = myProposals[uploadIndex];
//     const newDocument = {
//       file: formData.file,
//       uploadedAt: new Date().toLocaleString(),
//     };

//     if (uploadType === "proposal") {
//       const updatedProposalDocs = project.proposalDocuments ? [...project.proposalDocuments] : [];
//       if (docIndex !== null) {
//         // Replace document
//         updatedProposalDocs[docIndex] = newDocument;
//       } else {
//         // Add new document
//         updatedProposalDocs.push(newDocument);
//       }
//       updateProposal(uploadIndex, {
//         pdf: formData.file,
//         proposalDocuments: updatedProposalDocs,
//       });
//     } else if (uploadType === "final") {
//       const updatedFinalDocs = project.finalDocuments ? [...project.finalDocuments] : [];
//       if (docIndex !== null) {
//         updatedFinalDocs[docIndex] = newDocument;
//       } else {
//         updatedFinalDocs.push(newDocument);
//       }
//       updateProposal(uploadIndex, {
//         finalPdf: formData.file,
//         finalDocuments: updatedFinalDocs,
//         status: "Wait for Cleared",
//       });
//     }

//     // Reset form
//     setFormData({ file: null });
//     setUploadIndex(null);
//     setUploadType("");
//     setDocIndex(null);
//   };

//   const handleView = file => {
//     if (!file) return;
//     window.open(URL.createObjectURL(file), "_blank");
//   };

//   const handleModify = (projIndex, type, idx) => {
//     setUploadIndex(projIndex);
//     setUploadType(type);
//     setDocIndex(idx);
//   };

//   return (
//     <div className="my-researches-container">
//       <h2>My Researches</h2>
//       {myProposals.length === 0 ? (
//         <p>No research submitted yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>Proposal PDF</th>
//               <th>Final Report</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {myProposals.map((p, i) => {
//               const status = p.finalPdf ? "Completed" : p.pdf ? "In Progress" : "-";

//               return (
//                 <tr key={i}>
//                   <td>{p.title}</td>
//                   <td>{p.type}</td>
//                   <td>{status}</td>

//                   {/* Proposal Column */}
//                   <td>
//                     {/* Display all uploaded proposals */}
//                     {p.proposalDocuments?.map((doc, idx) => (
//                       <div key={idx} className="document-list">
//                         <span>{doc.file.name} ({doc.uploadedAt})</span>
//                         <div className="doc-buttons">
//                           <button className="proposal-btn" onClick={() => handleView(doc.file)}>View</button>
//                           <button className="proposal-btn" onClick={() => handleModify(i, "proposal", idx)}>Modify</button>
//                         </div>
//                       </div>
//                     ))}
//                     {/* Upload new if none or add another */}
//                     <button className="proposal-btn" onClick={() => handleModify(i, "proposal", null)}>Upload Proposal</button>
//                   </td>

//                   {/* Final Report Column */}
//                   <td>
//                     {p.finalDocuments?.map((doc, idx) => (
//                       <div key={idx} className="document-list">
//                         <span>{doc.file.name} ({doc.uploadedAt})</span>
//                         <div className="doc-buttons">
//                           <button className="final-btn" onClick={() => handleView(doc.file)}>View</button>
//                           <button className="final-btn" onClick={() => handleModify(i, "final", idx)}>Modify</button>
//                         </div>
//                       </div>
//                     ))}
//                     {!p.finalDocuments?.length && (
//                       <button className="final-btn" onClick={() => handleModify(i, "final", null)}>Add Final Report</button>
//                     )}
//                   </td>

//                   {/* Action */}
//                   <td>
//                     {p.finalPdf && !approveStatus[i] && <button className="wait-btn" disabled>Wait for Cleared</button>}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}

//       {/* Upload / Modify Form */}
//       {uploadIndex !== null && (
//         <form onSubmit={e => { e.preventDefault(); handleUpload(); }}>
//           <h4>{uploadType === "proposal" ? "Upload/Modify Proposal" : "Upload/Modify Final Report"}</h4>
//           <input type="file" accept="application/pdf" onChange={handleChange} />
//           <button type="submit" className={uploadType === "proposal" ? "proposal-btn" : "final-btn"}>Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default MyResearches;





import React, { useState } from "react";
import "./MyResearches.css";

const MyResearches = ({ myProposals = [], updateProposal = () => {}, approveStatus = {} }) => {
  const [uploadIndex, setUploadIndex] = useState(null);
  const [uploadType, setUploadType] = useState(""); // "proposal" or "final"
  const [docIndex, setDocIndex] = useState(null); // for modifying specific document
  const [formData, setFormData] = useState({ file: null });

  const handleChange = e => {
    const { files } = e.target;
    if (files) setFormData({ ...formData, file: files[0] });
  };

  const handleUpload = () => {
    if (!formData.file) return alert("Please select a file");

    const project = myProposals[uploadIndex];
    const newDocument = {
      file: formData.file,
      uploadedAt: new Date().toLocaleString(),
    };

    if (uploadType === "proposal") {
      const updatedProposalDocs = project.proposalDocuments ? [...project.proposalDocuments] : [];
      if (docIndex !== null) {
        updatedProposalDocs[docIndex] = newDocument; // modify existing
      } else {
        updatedProposalDocs.push(newDocument); // add new
      }
      updateProposal(uploadIndex, {
        pdf: formData.file,
        proposalDocuments: updatedProposalDocs,
      });
    } else if (uploadType === "final") {
      const updatedFinalDocs = project.finalDocuments ? [...project.finalDocuments] : [];
      if (docIndex !== null) {
        updatedFinalDocs[docIndex] = newDocument;
      } else {
        updatedFinalDocs.push(newDocument);
      }
      updateProposal(uploadIndex, {
        finalPdf: formData.file,
        finalDocuments: updatedFinalDocs,
        status: "Wait for Cleared",
      });
    }

    // reset form
    setFormData({ file: null });
    setUploadIndex(null);
    setUploadType("");
    setDocIndex(null);
  };

  const handleView = file => {
    if (!file) return;
    window.open(URL.createObjectURL(file), "_blank");
  };

  const handleModify = (projIndex, type, idx) => {
    setUploadIndex(projIndex);
    setUploadType(type);
    setDocIndex(idx);
  };

  return (
    <div className="my-researches-container">
      <h2>My Researches</h2>
      {myProposals.length === 0 ? (
        <p>No research submitted yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Proposal PDF</th>
              <th>Final Report</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProposals.map((p, i) => {
              const status = p.finalPdf ? "Completed" : p.pdf ? "In Progress" : "-";

              return (
                <tr key={i}>
                  <td>{p.title}</td>
                  <td>{p.type}</td>
                  <td>{status}</td>

                  {/* Proposal Column */}
                  <td>
                    {p.proposalDocuments?.length > 0
                      ? p.proposalDocuments.map((doc, idx) => (
                          <div key={idx} className="document-list">
                            <strong>{doc.file.name}</strong> ({doc.uploadedAt})
                            <div className="doc-buttons">
                              <button
                                className="proposal-btn"
                                onClick={() => handleView(doc.file)}
                              >
                                View
                              </button>
                              <button
                                className="proposal-btn"
                                onClick={() => handleModify(i, "proposal", idx)}
                              >
                                Modify
                              </button>
                            </div>
                          </div>
                        ))
                      : <span style={{ color: "red" }}>No Proposal Uploaded</span>
                    }
                  </td>

                  {/* Final Report Column */}
                  <td>
                    {p.finalDocuments?.length > 0
                      ? p.finalDocuments.map((doc, idx) => (
                          <div key={idx} className="document-list">
                            <strong>{doc.file.name}</strong> ({doc.uploadedAt})
                            <div className="doc-buttons">
                              <button
                                className="final-btn"
                                onClick={() => handleView(doc.file)}
                              >
                                View
                              </button>
                              <button
                                className="final-btn"
                                onClick={() => handleModify(i, "final", idx)}
                              >
                                Modify
                              </button>
                            </div>
                          </div>
                        ))
                      : (
                        <button
                          className="final-btn"
                          onClick={() => handleModify(i, "final", null)}
                        >
                          Add Final Report
                        </button>
                      )
                    }
                  </td>

                  {/* Action Column */}
                  <td>
                    {p.finalPdf && !approveStatus[i] && (
                      <button className="wait-btn" disabled>Wait for Cleared</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* Upload / Modify Form */}
      {uploadIndex !== null && (
        <form onSubmit={e => { e.preventDefault(); handleUpload(); }}>
          <h4>
            {uploadType === "proposal"
              ? "Upload/Modify Proposal"
              : "Upload/Modify Final Report"}
          </h4>
          <input type="file" accept="application/pdf" onChange={handleChange} />
          <button
            type="submit"
            className={uploadType === "proposal" ? "proposal-btn" : "final-btn"}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default MyResearches;























