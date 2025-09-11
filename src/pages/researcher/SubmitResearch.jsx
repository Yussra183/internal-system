import React, { useState } from "react";
import "./SubmitResearch.css";

const SubmitResearch = ({
  availableProposals = [],
  setAvailableProposals = () => {},
  myResearches = [],
  setMyResearches = () => {},
}) => {
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

  // Add new proposal
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

    setMyResearches([...myResearches, newProposal]);

    setFormData({ title: "", type: "", pdf: null });
    setShowForm(false);
    setConfirmation("Proposal submitted successfully!");
    setTimeout(() => setConfirmation(""), 3000);
  };

  // Submit existing proposal from available
  const handleSubmitAvailable = (index) => {
    const proposal = availableProposals[index];
    const movedProposal = {
      ...proposal,
      status: "In Progress",
      startDate: new Date().toLocaleDateString(),
      lastModified: new Date().toLocaleString(),
    };

    const updatedAvailable = [...availableProposals];
    updatedAvailable.splice(index, 1);
    setAvailableProposals(updatedAvailable);

    setMyResearches([...myResearches, movedProposal]);

    setConfirmation(`"${proposal.title}" moved to My Researches.`);
    setTimeout(() => setConfirmation(""), 3000);
  };

  return (
    <div className="submit-research-container">
      <h2>Available Proposals</h2>
      <table className="submit-research-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Modified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {availableProposals.map((prop, index) => (
            <tr key={index}>
              <td>{prop.title}</td>
              <td>{prop.type}</td>
              <td>{prop.status}</td>
              <td>{prop.lastModified || "-"}</td>
              <td>
                <button
                  className="submit-btn"
                  onClick={() => handleSubmitAvailable(index)}
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          className="add-proposal-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add New Proposal"}
        </button>
      </div>

      {confirmation && <p className="confirmation-msg">{confirmation}</p>}

      {showForm && (
        <form className="proposal-form" onSubmit={handleSubmit}>
          <h3>Submit New Proposal</h3>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Type:</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="">Select type</option>
              <option value="Fisheries Research">Fisheries Research</option>
              <option value="Marine Biology Research">
                Marine Biology Research
              </option>
              <option value="Environmental & Ocean Systems Research">
                Environmental & Ocean Systems Research
              </option>
            </select>
          </div>
          <div>
            <label>Attach PDF:</label>
            <input
              type="file"
              name="pdf"
              accept="application/pdf"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="add-proposal-btn">
            Submit Proposal
          </button>
        </form>
      )}
    </div>
  );
};

export default SubmitResearch;
