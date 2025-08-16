import React, { useEffect, useRef } from 'react';
import "./Skills.css";
import html from "../../Assits/Img/html.svg";
import css from "../../Assits/Img/css.svg";
import react from "../../Assits/Img/react.svg";
import git from "../../Assits/Img/git.svg";
import canva from "../../Assits/Img/canva.svg";
import node from "../../Assits/Img/nodejs.svg";
import tailwind from "../../Assits/Img/tailwind.svg";
import javascript from "../../Assits/Img/javascript.svg";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: html, color: "#E44D26" },
    { name: "CSS", icon: css, color: "#264DE4" },
    { name: "JavaScript", icon: javascript, color: "#F7DF1E" },
    { name: "React", icon: react, color: "#61DAFB" },
    { name: "Git", icon: git, color: "#F05032" },
    { name: "Canva", icon: canva, color: "#00C4CC" }
  ];

  const learning = [
    { name: "Node.js", icon: node, color: "#68A063" },
    { name: "Tailwind CSS", icon: tailwind, color: "#38B2AC" }
  ];

  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const learningTitleRef = useRef(null);
  const learningCardsRef = useRef([]);

  useEffect(() => {
    // Animation for title
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (learningTitleRef.current) titleObserver.observe(learningTitleRef.current);

    // Animation for skill cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "scale(1) rotate(0deg)";
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach(card => card && cardObserver.observe(card));
    learningCardsRef.current.forEach(card => card && cardObserver.observe(card));

    return () => {
      titleObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 
          className="section-title" 
          ref={titleRef}
          style={{
            opacity: 0,
            transform: "translateY(-20px)",
            transition: "all 0.6s ease-out"
          }}
        >
          My <span>Skills</span>
        </h2>
        <p 
          className="section-subtitle"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease-out 0.2s"
          }}
        >
          Technologies I work with
        </p>
        
        <div className="skills-grid"> 
          {skills.map((skill, index) => (
            <div 
              className="skill-card" 
              key={index}
              ref={el => cardsRef.current[index] = el}
              style={{
                opacity: 0,
                transform: "scale(0.8) rotate(5deg)",
                transition: `all 0.5s ease ${index * 0.1}s`,
                borderTop: `4px solid ${skill.color}`
              }}
            >
              <div className="skill-icon" style={{ backgroundColor: `${skill.color}20` }}> 
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3 style={{ color: skill.color }}>{skill.name}</h3>
              <div className="skill-progress">
                <div 
                  className="progress-bar" 
                  style={{ 
                    backgroundColor: skill.color,
                    width: "90%",
                    animation: `fillProgress 1s ease-out ${index * 0.1 + 0.5}s forwards`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div> 

        <h3 
          className="learning-title"
          ref={learningTitleRef}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.6s ease-out"
          }}
        >
          Currently <span> Learning</span>
        </h3>
        <div className="learning-grid">
          {learning.map((skill, index) => (
            <div 
              className="skill-card learning" 
              key={index}
              ref={el => learningCardsRef.current[index] = el}
              style={{
                opacity: 0,
                transform: "scale(0.8) rotate(-5deg)",
                transition: `all 0.5s ease ${index * 0.1 + 0.3}s`,
                borderTop: `4px solid ${skill.color}`
              }}
            >
              <div className="skill-icon" style={{ backgroundColor: `${skill.color}20` }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3 style={{ color: skill.color }}>{skill.name}</h3>
              <div className="skill-progress">
                <div 
                  className="progress-bar learning-bar" 
                  style={{ 
                    backgroundColor: skill.color,
                    width: "0%",
                    animation: `fillProgress 1s ease-out ${index * 0.1 + 0.8}s forwards`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;