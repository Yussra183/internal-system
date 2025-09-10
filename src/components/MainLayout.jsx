import React, { useContext } from "react";
import { Outlet } from "react-router-dom"; 
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext"; 
import "./MainLayout.css";

const MainLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Header username={user?.username} />
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
