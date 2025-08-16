import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
// import index from "../../index.js";
import Img from "../../Assits/Img/1.png"; // Black logo (default)
import Img2 from "../../Assits/Img/2.png"; // White logo (scrolled)
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && buttonRef.current.contains(event.target)) return;
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className={`navcontainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <div className="navrow">
          <div className="topbar">
             {/* Black logo (default)  */}
            <img 
              src={Img} 
              alt="Logo" 
              className={`logo ${isScrolled ? "hidden" : ""}`}
            />
            
            {/* White logo (scrolled) */}
            <img 
              src={Img2} 
              alt="Logo" 
              className={`logo ${!isScrolled ? "hidden" : ""}`} 
            />
            
            <button
              ref={buttonRef}
              className="mobile-menu-button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          <div 
            ref={menuRef}
            className={`subnav ${isMenuOpen ? "active" : ""}`}
            onClick={(e) => {
              if (e.target.tagName === "A") setIsMenuOpen(false);
            }} 
          >
           <Link to="/" className="nav-link">Home</Link>
           <Link to="/Aboutnav" className="nav-link">About</Link>
           <Link to="/Services" className="nav-link">Services</Link>
           <Link to="/Contact" className="nav-link contact-link">
             Contact
           </Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;