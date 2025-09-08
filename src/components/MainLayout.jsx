// import React from "react";
// import { Outlet } from "react-router-dom"; // lazima iwe juu
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";
// import "./MainLayout.css"; // tutatengeneza style hapa

// const MainLayout = ({ username, onLogout }) => {
//   return (
//     <div className="main-layout">
//       <Sidebar />
//       <div className="main-content-wrapper">
//         <Header username={username} onLogout={onLogout} />
//         <div className="main-content">
//           {/* Hapa ndiko content ya page itakayobadilika */}
//           <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
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
