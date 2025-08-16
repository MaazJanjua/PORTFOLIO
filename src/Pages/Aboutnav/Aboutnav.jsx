import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Aboutnav.css";
import PDF2 from "../../Assits/Img/PDF2.svg";
import bg from "../../Assits/Img/Add a heading3.png"; // ✔️ Clean name, no spaces


const Aboutme = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-me-container" id="about">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          className="hero-subtitle2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          My Journey in Web Development
        </motion.p>
        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>

      {/* Two-Column Layout */}
      <div className="content-section">
        {/* Education Section */}
        <motion.div
          className="education-section "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="section-icon">🎓</div>
          <div className="randominfo">
            <h3>My Education</h3>
            <ul>
              <li className="lipara">
                <strong>12th (Pre-Engineering):</strong>{" "}
                <span>
                  {" "}
                  Islamabad Model College for Boys H-9 (Government College)
                </span>
              </li>
              <li className="lipara">
                <strong>Certified in:</strong> Frontend Web Development
              </li>
              <li className="lipara">
                <strong>Currently:</strong> Studying Bachelor's Degree
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="experience-section "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="section-icon">💼</div>
          <h3>My Experience</h3>
          <ul>
            <li className="lipara">
              <strong>Freelancing:</strong> ~1 Year (Frontend Development)
            </li>
            <li className="lipara">
              <strong>Internship:</strong> 3 Months (Frontend Web Development)
            </li>
            <li className="lipara">
              <strong>Workshops & Practice:</strong> Over 1 Year of Hands-on
              Projects
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Career Goals Section */}
      <motion.div
        className="career-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
<div
  className="section-icon hero2"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "3rem",
    borderRadius: "20px",
    color: "#fff",
    minHeight: "300px",
    opacity:".81",
  }}
>
  🚀
  <h3 className="careerheading">Career Goals</h3>
  <p className="career-text">
    I'm passionate about crafting modern, accessible, and scalable web
    interfaces. My goal is to become a Full Stack Developer and contribute to
    meaningful digital solutions.
  </p>
</div>

        <div className="sparkles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        className="tools-section glass-card2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="section-icon">🛠️</div>
        <h3>Tech Stack</h3>
        <div className="tech-stack">
          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tools-grid">
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#E44D26" }}>
                  HTML
                </div>
                <div className="tool-progress" style={{ width: "95%" }}></div>
              </div>
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#2965F1" }}>
                  CSS
                </div>
                <div className="tool-progress" style={{ width: "90%" }}></div>
              </div>
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#F0DB4F" }}>
                  JS
                </div>
                <div className="tool-progress" style={{ width: "85%" }}></div>
              </div>
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#61DAFB" }}>
                  React
                </div>
                <div className="tool-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          <div className="tech-category">
            <h4>Tools</h4>
            <div className="tools-grid">
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#F05032" }}>
                  Git
                </div>
                <div className="tool-progress" style={{ width: "75%" }}></div>
              </div>
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#007ACC" }}>
                  VS Code
                </div>
                <div className="tool-progress" style={{ width: "90%" }}></div>
              </div>
              <div className="tool-item">
                <div className="tool-icon" style={{ background: "#563D7C" }}>
                  Bootstrap
                </div>
                <div className="tool-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        className="mycertificates"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="certificates-heading">My Documents</h3>
        <div className="certificates-container">
          {/* CV Section */}
          <motion.div
            className="document-card glass-card2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="document-badge">CV</div>
            <h4>My Resume</h4>
            <div className="pdf-preview">
              <img src={PDF2} alt="CV Preview" />
            </div>
            <a
              href="/path-to-your-cv.pdf"
              className="download-btn"
              download="My_CV.pdf"
            >
              <FiDownload className="download-icon" />
              Download CV
            </a>
          </motion.div>

          {/* Certificate Section */}
          <motion.div
            className="document-card glass-card2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="document-badge">Cert</div>
            <h4>My Certificate</h4>
            <div className="pdf-preview">
              <img src={PDF2} alt="Certificate Preview" />
            </div>
            <a
              href="/path-to-your-certificate.pdf"
              className="download-btn"
              download="My_Certificate.pdf"
            >
              <FiDownload className="download-icon" />
              Download Certificate
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* MORE Button */}
      <motion.button
        className="more-button"
        onClick={() => setShowMore(!showMore)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {showMore ? "Show Less" : "Show More"}
        {showMore ? (
          <FiChevronUp className="button-icon" />
        ) : (
          <FiChevronDown className="button-icon" />
        )}
      </motion.button>

      {/* Additional Info (Shown when MORE is clicked) */}
      {showMore && (
        <motion.div
          className="additional-info"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-section glass-card2">
            <h3>My Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">🖥️</div>
                <span>Frontend Development</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <span>UI/UX Design</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📱</div>
                <span>Responsive Design</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="hobbies-section glass-card2">
            <h3>My Hobbies</h3>
            <div className="hobbies-grid">
              <div className="hobby-item">
                <div className="hobby-icon">💻</div>
                <span>Coding Projects</span>
              </div>
              <div className="hobby-item">
                <div className="hobby-icon">📚</div>
                <span>Reading Tech Blogs</span>
              </div>
              <div className="hobby-item">
                <div className="hobby-icon">🎮</div>
                <span>Gaming</span>
              </div>
              <div className="hobby-item">
                <div className="hobby-icon">🎵</div>
                <span>Music</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Aboutme;
