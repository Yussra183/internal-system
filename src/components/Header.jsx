// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext"; // import context
// import "./Header.css";

// const Header = ({ username }) => {
//   const { logout } = useContext(AuthContext); // pata logout function
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();             // futa user state na localStorage
//     navigate("/login");    // rudisha kwenye login page
//   };

//   return (
//     <header className="app-header">
//       <div className="header-left">
//         <span className="welcome-text">Welcome, {username}</span>
//       </div>
//       <div className="header-right">
//         <button onClick={handleLogout} className="logout-btn">
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // head icon kutoka react-icons
import "./Header.css";

const Header = ({ username }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Funga dropdown ukibofya nje ya menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="app-header">
      <div className="header-left">
        <span className="welcome-text">Welcome, {username}</span>
      </div>

      <div className="header-right" ref={dropdownRef}>
        <div className="profile-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <FaUserCircle size={28} />
        </div>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={() => navigate("/profile")} className="dropdown-item">
              Profile
            </button>
            <button onClick={handleLogout} className="dropdown-item">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
