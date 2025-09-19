// import React, { useState } from "react";
// import "./AssignResearcher.css"; // import css

// const AssignResearcher = () => {
//   const [researcher, setResearcher] = useState("");
//   const [project, setProject] = useState("");
//   const [assignments, setAssignments] = useState([]);

//   const handleAssign = (e) => {
//     e.preventDefault();
//     if (!researcher || !project) {
//       alert("Jaza researcher na project");
//       return;
//     }
//     const newAssign = {
//       researcher,
//       project,
//       date: new Date().toLocaleDateString(),
//     };
//     setAssignments([...assignments, newAssign]);
//     setResearcher("");
//     setProject("");
//   };

//   return (
//     <div className="assign-container">
//       <h2>Assign Researcher</h2>
//       <form onSubmit={handleAssign} className="assign-form">
//         <div>
//           <label>Researcher</label>
//           <input
//             type="text"
//             value={researcher}
//             onChange={(e) => setResearcher(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Project</label>
//           <input
//             type="text"
//             value={project}
//             onChange={(e) => setProject(e.target.value)}
//           />
//         </div>
//         <button type="submit">Assign</button>
//       </form>

//       <h3>Assignments</h3>
//       <ul className="assign-list">
//         {assignments.map((a, i) => (
//           <li key={i}>
//             <strong>{a.researcher}</strong> → {a.project} ({a.date})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AssignResearcher;


import React, { useState } from "react";
import "./AssignResearcher.css";

const AssignResearcher = () => {
  // Example researcher list
  const researchersList = ["Alice", "Bob", "Charlie", "Diana"];

  const [researcher, setResearcher] = useState("");
  const [project, setProject] = useState("");
  const [projectType, setProjectType] = useState(""); // dropdown field
  const [assignments, setAssignments] = useState([]);

  const handleAssign = (e) => {
    e.preventDefault();
    if (!researcher || !project || !projectType) {
      alert("Please fill researcher, project, and project type");
      return;
    }
    const newAssign = {
      researcher,
      project,
      projectType,
      date: new Date().toLocaleDateString(),
    };
    setAssignments([...assignments, newAssign]);
    setResearcher("");
    setProject("");
    setProjectType("");
  };

  return (
    <div className="assign-container">
      <h2>Assign Researcher</h2>
      <form onSubmit={handleAssign} className="assign-form">
        <div>
          <label>Researcher</label>
          <select
            value={researcher}
            onChange={(e) => setResearcher(e.target.value)}
          >
            <option value="">Select researcher</option>
            {researchersList.map((r, index) => (
              <option key={index} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Project</label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="Enter project name"
          />
        </div>

        <div>
          <label>Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">Select project type</option>
            <option value="Fisheries Research">Fisheries Research</option>
            <option value="Biodiversity Research">Biodiversity Research</option>
            <option value="Marine and Environmental Systems Research">
              Marine and Environmental Systems Research
            </option>
          </select>
        </div>

        <button type="submit">Assign</button>
      </form>

      <h3>Assignments</h3>
      <ul className="assign-list">
        {assignments.map((a, i) => (
          <li key={i}>
            <div>
              <strong>{a.researcher}</strong> → {a.project} ({a.projectType})
            </div>
            <span>{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignResearcher;
