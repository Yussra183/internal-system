import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./HODSidebar";
import Header from "./Header";
import Footer from "./Footer";
import "./HODLayout.css";

const HODLayout = () => {
  return (
    <div className="hod-layout">
      {/* Sidebar fixed on the left */}
      <Sidebar />

      {/* Main area */}
      <div className="hod-main">
        <Header />
        <main className="hod-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HODLayout;
