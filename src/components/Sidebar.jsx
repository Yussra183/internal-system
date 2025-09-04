// import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../assets/zafiri.png";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Dashboard", icon: "🏠", path: "/dashboard" },
//     { name: "Submit Research", icon: "📝", path: "/submit-research" },
//     { name: "My Researches", icon: "📂", path: "/my-researches" },
//     { name: "Notifications", icon: "🔔", path: "/notifications" },
//   ];

//   return (
//     <aside className="sidebar">
//       <div className="logo-container">
//         <img src={Logo} alt="Zafiri Logo" className="logo-image" />
//         <p className="logo-text">Research Management System</p>
//       </div>

//       <ul className="menu">
//         {menuItems.map((item) => (
//           <li key={item.name} className="menu-item">
//             <NavLink
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive ? "active menu-link" : "menu-link"
//               }
//             >
//               <span className="icon">{item.icon}</span> {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/zafiri.png";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard" },
    { name: "Submit Research", icon: "📝", path: "/submit-research" },
    { name: "My Researches", icon: "📂", path: "/my-researches" },
    { name: "Notifications", icon: "🔔", path: "/notifications" },
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

export default Sidebar;
