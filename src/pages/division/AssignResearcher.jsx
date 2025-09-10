import React, { useState } from "react";
import "./AssignResearcher.css"; // import css

const AssignResearcher = () => {
  const [researcher, setResearcher] = useState("");
  const [project, setProject] = useState("");
  const [assignments, setAssignments] = useState([]);

  const handleAssign = (e) => {
    e.preventDefault();
    if (!researcher || !project) {
      alert("Jaza researcher na project");
      return;
    }
    const newAssign = {
      researcher,
      project,
      date: new Date().toLocaleDateString(),
    };
    setAssignments([...assignments, newAssign]);
    setResearcher("");
    setProject("");
  };

  return (
    <div className="assign-container">
      <h2>Assign Researcher</h2>
      <form onSubmit={handleAssign} className="assign-form">
        <div>
          <label>Researcher</label>
          <input
            type="text"
            value={researcher}
            onChange={(e) => setResearcher(e.target.value)}
          />
        </div>
        <div>
          <label>Project</label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>
        <button type="submit">Assign</button>
      </form>

      <h3>Assignments</h3>
      <ul className="assign-list">
        {assignments.map((a, i) => (
          <li key={i}>
            <strong>{a.researcher}</strong> → {a.project} ({a.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignResearcher;
