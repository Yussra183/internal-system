// src/components/AdminSidebar.jsx
import React from "react";
import "./AdminSidebar.css"; // CSS ya sidebar

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li>Dashboard</li>
        <li>Manage Users</li>
        <li>Manage Proposals</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
