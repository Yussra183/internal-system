import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DirectorDashboard.css";

const DirectorDashboard = () => {
  // Dummy data
  const proposals = [
    {
      id: 1,
      title: "AI in Healthcare",
      researcher: "Dr. Asha",
      status: "Approved",
      finalReport: "AI_Healthcare_Final.pdf",
    },
    {
      id: 2,
      title: "Climate Change Impacts",
      researcher: "Prof. Omar",
      status: "Rejected",
      finalReport: null,
    },
    {
      id: 3,
      title: "Tourism & Economy",
      researcher: "Dr. Salum",
      status: "Cleared",
      finalReport: "Tourism_Final.pdf",
    },
  ];

  // Export to PDF function
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Research & Proposals Summary", 14, 15);
    doc.autoTable({
      head: [["#", "Title", "Researcher", "Status", "Final Report"]],
      body: proposals.map((p, i) => [
        i + 1,
        p.title,
        p.researcher,
        p.status,
        p.finalReport ? p.finalReport : "N/A",
      ]),
      startY: 20,
    });
    doc.save("research_summary.pdf");
  };

  return (
    <>
      <Header />
      <div className="director-container">
        <h2>Director Dashboard</h2>
        <p>Quick summary of all research and proposals.</p>

        {/* Summary cards */}
        <div className="director-cards">
          <div className="dcard">Total Research: {proposals.length}</div>
          <div className="dcard">
            Approved: {proposals.filter((p) => p.status === "Approved").length}
          </div>
          <div className="dcard">
            Rejected: {proposals.filter((p) => p.status === "Rejected").length}
          </div>
          <div className="dcard">
            Cleared: {proposals.filter((p) => p.status === "Cleared").length}
          </div>
        </div>

        {/* Export Button */}
        <button className="export-btn" onClick={exportPDF}>
          Export Full Table (PDF)
        </button>

        {/* Table */}
        <table className="director-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Researcher</th>
              <th>Status</th>
              <th>Final Report</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.title}</td>
                <td>{p.researcher}</td>
                <td>{p.status}</td>
                <td>
                  {p.finalReport ? (
                    <a href="#" style={{ color: "blue" }}>
                      {p.finalReport}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default DirectorDashboard;
