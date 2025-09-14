// import React from "react";
// import "./Dashboard.css"; // tutaweka CSS tofauti

// const Dashboard = () => {
//   // Stats za cards (static kwa sasa)
//   const stats = [
//     { title: "Total Proposals", count: 12 },
//     { title: "Research Completed", count: 8 },
//     { title: "Projects Completed", count: 5 },
//     { title: "All Research Proposals", count: 20 },
//   ];

//   // PDF templates info
//   const pdfTemplates = [
//     { name: "Research Proposal Template", file: "/pdfs/proposal_template.pdf", description: "Use this template to write your research proposal." },
//     { name: "Guide for Proposal Submission", file: "/pdfs/proposal_guide.pdf", description: "This guide explains the steps for submitting a proposal" },
//     { name: "Final Report Template", file: "/pdfs/final_report_template.pdf", description: "Use this template to prepare the final report of your research." },
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* Top Section: Stats Cards */}
//       <div className="stats-cards">
//         {stats.map((stat) => (
//           <div key={stat.title} className="card">
//             <h3>{stat.count}</h3>
//             <p>{stat.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Middle Section: Instructions */}
//       <div className="pdf-instructions">
//         <h2>PDF Templates Instructions</h2>
//         {pdfTemplates.map((pdf) => (
//           <div key={pdf.name} className="pdf-description">
//             <h3>{pdf.name}</h3>
//             <p>{pdf.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Section: Download Box */}
//       <div className="pdf-downloads">
//         <h2>Download Templates</h2>
//         <div className="pdf-cards">
//           {pdfTemplates.map((pdf) => (
//             <div key={pdf.name} className="pdf-card">
//               <p>{pdf.name}</p>
//               <a href={pdf.file} download>
//                 <button>Download</button>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// import React from "react";
// import "./Dashboard.css"; // tutaweka CSS tofauti           

// const Dashboard = () => {
//   // Stats za cards (static kwa sasa)
//   const stats = [
//     { title: "Total Proposals", count: 12 },
//     { title: "Research Completed", count: 8 },
//     { title: "Projects Completed", count: 5 },
//     { title: "All Research Proposals", count: 20 },
//   ];

//   // PDF templates info (hardcoded URLs)
//   const pdfTemplates = [
//     { 
//       name: "Research Proposal Template", 
//       file: "http://127.0.0.1:8000/media/templates/proposal_template.pdf", 
//       description: "Use this template to write your research proposal." 
//     },
//     { 
//       name: "Guide for Proposal Submission", 
//       file: "http://127.0.0.1:8000/media/templates/final_report_template.pdf", 
//       description: "This guide explains the steps for submitting a proposal." 
//     },
//     { 
//       name: "Final Report Template", 
//       file: "http://127.0.0.1:8000/media/templates/final_report_template.pdf", 
//       description: "Use this template to prepare the final report of your research." 
//     },
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* Top Section: Stats Cards */}
//       <div className="stats-cards">
//         {stats.map((stat) => (
//           <div key={stat.title} className="card">
//             <h3>{stat.count}</h3>
//             <p>{stat.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Middle Section: Instructions */}
//       <div className="pdf-instructions">
//         <h2>PDF Templates Instructions</h2>
//         {pdfTemplates.map((pdf) => (
//           <div key={pdf.name} className="pdf-description">
//             <h3>{pdf.name}</h3>
//             <p>{pdf.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Section: Download Box */}
//       <div className="pdf-downloads">
//         <h2>Download Templates</h2>
//         <div className="pdf-cards">
//           {pdfTemplates.map((pdf) => (
//             <div key={pdf.name} className="pdf-card">
//               <p>{pdf.name}</p>
//               <a href={pdf.file} target="_blank" rel="noopener noreferrer">
//                 <button>Download</button>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











































import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // Stats start at 0
  const [stats, setStats] = useState([
    { title: "Total Proposals", count: 0 },
    { title: "Research Completed", count: 0 },
    { title: "Projects Completed", count: 0 },
    { title: "All Research Proposals", count: 0 },
  ]);

  // Fetch stats using fetch API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token"); // your auth token
        const response = await fetch("http://127.0.0.1:8000/api/dashboard-stats/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }

        const data = await response.json();

        setStats([
          { title: "Total Proposals", count: data.total_proposals },
          { title: "Research Completed", count: data.research_completed },
          { title: "Projects Completed", count: data.projects_completed },
          { title: "All Research Proposals", count: data.all_proposals },
        ]);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    };

    fetchStats();
  }, []);

  // PDF templates (hardcoded)
  const pdfTemplates = [
    { 
      name: "Research Proposal Template", 
      file: "http://127.0.0.1:8000/media/templates/proposal_template.pdf", 
      description: "Use this template to write your research proposal." 
    },
    { 
      name: "Guide for Proposal Submission", 
      file: "http://127.0.0.1:8000/media/templates/final_report_template.pdf", 
      description: "This guide explains the steps for submitting a proposal." 
    },
    { 
      name: "Final Report Template", 
      file: "http://127.0.0.1:8000/media/templates/final_report_template.pdf", 
      description: "Use this template to prepare the final report of your research." 
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="stats-cards">
        {stats.map((stat) => (
          <div key={stat.title} className="card">
            <h3>{stat.count}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="pdf-instructions">
        <h2>PDF Templates Instructions</h2>
        {pdfTemplates.map((pdf) => (
          <div key={pdf.name} className="pdf-description">
            <h3>{pdf.name}</h3>
            <p>{pdf.description}</p>
          </div>
        ))}
      </div>

      <div className="pdf-downloads">
        <h2>Download Templates</h2>
        <div className="pdf-cards">
          {pdfTemplates.map((pdf) => (
            <div key={pdf.name} className="pdf-card">
              <p>{pdf.name}</p>
              <a href={pdf.file} target="_blank" rel="noopener noreferrer">
                <button>Download</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
