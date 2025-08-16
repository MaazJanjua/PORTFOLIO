import React, { useEffect, useRef, useState } from 'react';
import './Aboutme.css';
import PDF2 from "../../Assits/Img/PDF2.svg";
import { motion } from "framer-motion";


const Aboutme = () => { 
  const [showMore, setShowMore] = useState(false); 
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const certificatesRef = useRef(null);
  const documentCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          
          if (entry.target === heroRef.current) {
            const h2 = entry.target.querySelector('h2');
            if (h2) {
              h2.style.animation = 'textReveal 1s ease-out forwards';
            }
          }
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);
    if (educationRef.current) observer.observe(educationRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (certificatesRef.current) observer.observe(certificatesRef.current);
    documentCardsRef.current.forEach(card => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);
 
  return (
    <div className="about-me-container2" id='about'>
      {/* Hero Section with animation */}
      <motion.div 
        className="hero-section" 
        ref={heroRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About <strong> Me </strong></h2>
        <p className="hero-subtitle2">My Journey in Web Development</p>
        <div className="hero-divider"></div>
      </motion.div>

      {/* Two-Column Layout */}
      <div className="content-section2">
        {/* Left Div - Education */}
        <motion.div 
          className="education-section "
          ref={educationRef}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="section-icon">🎓</div>
          <h2 className='sectionh3'>My <strong>  Education </strong></h2>
          <ul>
            <li className='lipara2'><strong>12th (Pre-Engineering):</strong> Islamabad Model College for Boys H-9 (Government College)</li>
            <li className='lipara2'><strong>Certified in:</strong> Frontend Web Development</li>
            <li className='lipara2'><strong>Currently:</strong> Studying Bachelor's Degree</li>
          </ul>
        </motion.div>

        {/* Right Div - Experience */}
        <motion.div 
          className="experience-section "
          ref={experienceRef}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <div className="section-icon">💼</div>
          <h2 className='sectionh3'>My  <strong> Experience </strong></h2>
          <ul>
            <li className='lipara2'><strong>Freelancing:</strong> ~1 Year (Frontend Development)</li>
            <li className='lipara2'><strong>Internship:</strong> 3 Months (Frontend Web Development)</li>
            <li className='lipara2'><strong>💼</strong> 
Workshops & Practice: Over 1 Year of Hands-on Projects & Self-Learning in Frontend Development</li>
          </ul>
        </motion.div>
      </div>

     

      {/* Certificates Section */}
      <motion.div 
        className="mycertificates"
        ref={certificatesRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="certificates-mainheading2">
        <h3 className="certificates-heading2">My <strong> Documents </strong> </h3></div>
        <div className="certificates2-container">
          {/* CV Section */}
          <motion.div 
            className="document-card glass-card"
            ref={el => documentCardsRef.current[0] = el}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h4>My CV</h4>
            <div className="pdf-preview">
              <img src={PDF2} alt="CV Preview" />
            </div>
            <a 
              href="/MY-CV.pdf" 
              className="download-btn" 
              download="My_CV.pdf"
            >
              Download CV
            </a>
          </motion.div>

          {/* Certificate Section */}
          <motion.div 
            className="document-card glass-card"
            ref={el => documentCardsRef.current[1] = el}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h4>My Certificate</h4>
            <div className="pdf-preview">
              <img src={PDF2} alt="Certificate Preview" />
            </div> 
            <a 
              href="/Muhammad Maaz.pdf" 
              className="download-btn" 
              download="My_Certificate.pdf"
            >
              Download Certificate
            </a>
          </motion.div>
        
        </div>
      </motion.div>

      {/* MORE Button */}
         {/* Additional Info (Shown when MORE is clicked) */} 
      {showMore && (
        <motion.div 
          className="additional-info"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="skills-section glass-card">
            <h3>My <strong> Skills </strong></h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">🖥️</div>
                <span>Frontend Development</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
              </div> 
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <span>UI/UX Design</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📱</div>
                <span>Responsive Design</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <motion.button
        className="more-button"
        onClick={() => setShowMore(!showMore)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMore ? 'LESS' : 'MORE'}
        <span className="button-icon">{showMore ? '↑' : '↓'}</span>
      </motion.button>
    </div>
  );
}

export default Aboutme;