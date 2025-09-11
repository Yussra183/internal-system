// src/pages/admin/Dashboard.jsx
import React from "react";
import "./AdminDashboard.css";

const Dashboard = () => {
  const users = [
    { id: 1, name: "Alice", role: "researcher", status: "Active" },
    { id: 2, name: "Bob", role: "headOfDivision", status: "Active" },
    { id: 3, name: "Charlie", role: "headOfDepartment", status: "Inactive" },
  ];

  const proposals = [
    { id: 1, title: "AI Research", submittedBy: "Alice", status: "Pending" },
    { id: 2, title: "Tourism Study", submittedBy: "Bob", status: "Approved" },
  ];

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="admin-cards">
        <div className="acard">Total Users: {users.length}</div>
        <div className="acard">
          Active Users: {users.filter(u => u.status === "Active").length}
        </div>
        <div className="acard">Total Proposals: {proposals.length}</div>
        <div className="acard">
          Pending Proposals: {proposals.filter(p => p.status === "Pending").length}
        </div>
      </div>

      <h3>Users</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Proposals</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Submitted By</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>{p.submittedBy}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
