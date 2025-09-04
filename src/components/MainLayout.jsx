import React from "react";
import { Outlet } from "react-router-dom"; // lazima iwe juu
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./MainLayout.css"; // tutatengeneza style hapa

const MainLayout = ({ username, onLogout }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header username={username} onLogout={onLogout} />
        <div className="main-content">
          {/* Hapa ndiko content ya page itakayobadilika */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
