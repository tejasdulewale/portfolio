import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu
  return (
    <>
    <div className="header">
      <div className="logo">
        <h2>tejas</h2>
      </div>
      <nav>
        <a
          href="#home"
          onClick={() => {
            setActiveLink("Home");
          }}
          className={activeLink === "Home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveLink("About");
          }}
          className={activeLink === "About" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#myproject"
          onClick={() => {
            setActiveLink("Projects");
          }}
          className={activeLink === "Projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#service"
          onClick={() => {
            setActiveLink("Service");
          }}
          className={activeLink === "Service" ? "active" : ""}
        >
          Service
        </a>
        <a
          href=""
          onClick={() => {
            setActiveLink("Contact");
          }}
          className={activeLink === "" ? "active" : ""}
        >
          Contact
        </a>
      </nav>
      <div className="btn">
        <button className="btn1">let's talk</button>
      </div>
     <span 
        className="hamburgermenu"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)} // Toggle mobile menu
      >
        &#9776;
      </span>
    </div>
    <MobileMenu open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
export default Header;
