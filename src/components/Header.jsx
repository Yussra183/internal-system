// import React from "react";
// import "./Header.css"; // tutatengeneza css yake baadae

// const Header = ({ username, onLogout }) => {
//   return (
//     <header className="app-header">
//       {/* Kushoto */}
//       <div className="header-left">
//         <h3>Welcome, {username}</h3>
//       </div>

//       {/* Kulia */}
//       <div className="header-right">
//         <button onClick={onLogout} className="logout-btn">
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // import context
import "./Header.css";

const Header = ({ username }) => {
  const { logout } = useContext(AuthContext); // pata logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             // futa user state na localStorage
    navigate("/login");    // rudisha kwenye login page
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <span className="welcome-text">Welcome, {username}</span>
      </div>
      <div className="header-right">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
