import React from "react";
import {
  FaArrowUp,
  FaInstagram,
  FaEnvelope,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Back to Top Icon */}
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp className="top-icon" />
        <span>Back to Top</span>
      </div>

      {/* Social Media Icons */}
      <div className="social-media">
        <a
          href="https://www.instagram.com/muhammad.maaz.rajpoot/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hafizmaaz256@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaEnvelope />
        </a>

        <a
                    href="https://github.com/MaazJanjua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" social-icon "
                  >
                    <FaGithub />
                  </a>
        <a
          href="https://www.facebook.com/share/16V2Hpm1Yb/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="copyright">©2025 Muhammad Maaz. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
