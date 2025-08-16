import React, { useEffect, useRef } from "react";

import "./Projects.css";
import vegitable from "../../Assits/Img/vegitable.png";
import coffee from "../../Assits/Img/Coffee.png";
import business from "../../Assits/Img/Business.png";
import porfolio from "../../Assits/Img/Portfolio.png";
import healthcare from "../../Assits/Img/healthcare.png";
import portfolio2 from "../../Assits/Img/portfolio-copy.png";

const Projects = () => { 
  // Sample project data (replace with your actual projects)
  const projects = [
    {
      id: 1,
      title: "Vegitable Website",
      description:
        "A full-featured online store with cart functionality and payment integration.",
      image:
        vegitable,
      tags: ["React", "Node.js", "javascript"],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my work and skills.",
      image:
       portfolio2,
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "An application to manage daily tasks with drag and drop functionality.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["React", "Firebase", "Material UI"],
    },
    {
      id: 4,
      title: "Weather Application",
      description: "Real-time weather forecasting app with location detection.",
      image:
        "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tags: ["React", "API Integration", "CSS"],
    },
    {
      id: 5,
      title: "Coffee Shop",
      description:
        "Find nearby coffee spots instantly — your perfect cup awaits.",
      image: coffee,
      tags: ["React", "javascript", "CSS"],
    },
    {
      id: 6,
      title: "Business Website",
      description:        "Showcase your business online with a clean, modern website.",

      image:business,
      tags: ["React", "javascript", "CSS"],
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:   "A personal portfolio to highlight your work, skills, and achievements.",

      image:porfolio,
      tags: ["React", "javascript", "CSS"],
    },
    {
      id: 8,
      title: "HealthCare Website",
      description:   "Trusted healthcare services and information — accessible anytime, anywhere.",

      image:healthcare,
      tags: ["React", "javascript", "CSS"],
    },
  ];

 const projectCardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Observe each project card
    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="projects-section" id="projects">
      {/* Hero Section */}
      <div className="projecthero">
        <h1>MY-PROJECTS</h1>
      </div>

      {/* All Projects Bar */}
      <div className="projects-bar">
        <h2>All Projects</h2>
      </div> 

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            ref={(el) => (projectCardsRef.current[index] = el)}
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="las-tdiv">
        <h4 className="lastheading">And Many More To Come</h4>
      </div>
    </section>
  );
};

export default Projects;