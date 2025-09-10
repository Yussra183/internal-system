import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/zafiri.png";
import "./Sidebar.css"; // tumetumia ile ile CSS ya sidebar

const HODSidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/hod/dashboard" },
    { name: "Manage Proposals", icon: "📝", path: "/hod/manage-proposals" },
    { name: "Profile", icon: "👤", path: "/hod/profile" },
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
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">{item.icon}</span> {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default HODSidebar;
