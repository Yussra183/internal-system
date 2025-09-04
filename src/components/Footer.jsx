import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Zafiri Research Managment system</p>
    </footer>
  );
};

export default Footer;
