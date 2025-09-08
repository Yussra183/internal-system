import React from "react";
import { Outlet } from "react-router-dom";
import "./HeadLayout.css"; // style ya layout nzima

import DivisionSidebar from "./DivisionSidebar"; // hii ndio sidebar yako
import Header from "./Header"; // reuse ya Header
import Footer from "./Footer"; // reuse ya Footer

const HeadLayout = () => {
  return (
    <div className="head-layout">
      {/* Sidebar ya Division Head */}
      <DivisionSidebar />

      {/* Main content area */}
      <div className="head-main">
        <Header /> {/* Header juu */}
        <div className="head-content">
          <Outlet /> {/* Hapa ndiko content inabadilika kulingana na route */}
        </div>
        <Footer /> {/* Footer chini */}
      </div>
    </div>
  );
};

export default HeadLayout;
