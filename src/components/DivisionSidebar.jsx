import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/zafiri.png";
import "./DivisionSidebar.css";

const DivisionSidebar = () => {
  const menuItems = [
  { name: "Dashboard", icon: "📊", path: "/head/dashboard" },
  { name: "Assign Researcher", icon: "🧑‍💻", path: "/head/assign-researcher" },
  { name: "Review Research", icon: "🔎", path: "/head/review-research" },
  { name: "Reports", icon: "📑", path: "/head/reports" },
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

export default DivisionSidebar;
