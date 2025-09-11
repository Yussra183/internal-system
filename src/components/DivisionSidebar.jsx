import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/zafiri.png";
import "./DivisionSidebar.css";

// Import react icons
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

const DivisionSidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/head/dashboard" },
    { name: "Assign Researcher", icon: <FaUserTie />, path: "/head/assign-researcher" },
    { name: "Review Research", icon: <FaSearch />, path: "/head/review-research" },
    { name: "Reports", icon: <HiDocumentReport />, path: "/head/reports" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={Logo} alt="Zafiri Logo" className="logo-image" />
        <p className="logo-text">Research Management System</p>
      </div>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name} className="menu-item">
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "menu-link active" : "menu-link")}
            >
              <span className="icon">{item.icon}</span>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DivisionSidebar;
