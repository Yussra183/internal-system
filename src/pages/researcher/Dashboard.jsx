import React from "react";
import "./Dashboard.css"; // tutaweka CSS tofauti

const Dashboard = () => {
  // Stats za cards (static kwa sasa)
  const stats = [
    { title: "Total Proposals", count: 12 },
    { title: "Research Completed", count: 8 },
    { title: "Projects Completed", count: 5 },
    { title: "All Research Proposals", count: 20 },
  ];

  // PDF templates info
  const pdfTemplates = [
    { name: "Research Proposal Template", file: "/pdfs/proposal_template.pdf", description: "Use this template to write your research proposal." },
    { name: "Guide for Proposal Submission", file: "/pdfs/proposal_guide.pdf", description: "This guide explains the steps for submitting a proposal" },
    { name: "Final Report Template", file: "/pdfs/final_report_template.pdf", description: "Use this template to prepare the final report of your research." },
  ];

  return (
    <div className="dashboard-container">
      {/* Top Section: Stats Cards */}
      <div className="stats-cards">
        {stats.map((stat) => (
          <div key={stat.title} className="card">
            <h3>{stat.count}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Middle Section: Instructions */}
      <div className="pdf-instructions">
        <h2>PDF Templates Instructions</h2>
        {pdfTemplates.map((pdf) => (
          <div key={pdf.name} className="pdf-description">
            <h3>{pdf.name}</h3>
            <p>{pdf.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section: Download Box */}
      <div className="pdf-downloads">
        <h2>Download Templates</h2>
        <div className="pdf-cards">
          {pdfTemplates.map((pdf) => (
            <div key={pdf.name} className="pdf-card">
              <p>{pdf.name}</p>
              <a href={pdf.file} download>
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
