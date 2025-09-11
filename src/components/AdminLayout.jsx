// src/components/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AdminSidebar from "./AdminSidebar"; // sidebar ya admin
import "./AdminLayout.css"; // CSS layout

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="admin-main">
        <Header />
        <div className="admin-content">
          <Outlet /> {/* Pages zinazo change kulingana na route */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
