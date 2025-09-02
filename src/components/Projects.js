import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "../styles/Projects.css";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Stock Trading Web & iOS App",
      description:
        "• Developed a Web & iOS application for stock trading, enabling users to search stocks, trade with virtual money, and manage a portfolio\n• Integrated with Finnhub APIs for real-time data through an automated query pipeline to streamline data retrieval\n• Implemented features like autocomplete, interactive charts, detailed stock info and error handled trades with 98% accuracy",
      technologies: [
        "Angular",
        "React",
        "Node.js",
        "Express",
        "Spring Boot",
        "Swift",
        "SwiftUI",
        "MongoDB Atlas",
        "GCP",
      ],
      github: "#",
      liveDemo:
        "https://drive.google.com/file/d/1hz4qD_ibBEXi_IbL-gPlXLe2Ig8MBd8M/view?usp=sharing",
      period: "February 2024 - April 2024",
    },
    {
      id: 2,
      title: "Swachh AI",
      description:
        "• Helped cite 200-250 people, resulting in curtailing public spitting by devising a real time monitoring spit detection system and penalizing such people\n• Conducted data generation and training with Machine Learning models, aiding in selecting optimal technique for efficient identification and faster detection\n• Integrated model with Raspberry Pi for real-time feed\n• Authored and published a paper on the same",
      technologies: [
        "Django",
        "MySQL",
        "Raspberry Pi",
        "Jupyter Notebook",
        "AWS Cloud",
        "Machine Learning",
      ],
      github: "#",
      liveDemo: "https://bit.ly/Swachh_AI",
      period: "2020 - 2021",
    },
    {
      id: 3,
      title: "SAARTHI",
      description:
        "• Enabled family members of Alzheimer's patients track their loved ones' health parameters and exact locations by devising a system for real time monitoring of patients\n• Monitors and provides timely predictive alerts to doctors and family members\n• Collected and analyzed data on critical health parameters which helped in designing prediction model for diseases using Machine Learning Algorithms\n• Authored and published a paper on the same",
      technologies: [
        "Laravel",
        "MySQL",
        "Arduino",
        "ThingSpeak",
        "Jupyter Notebook",
        "Machine Learning",
      ],
      github: "#",
      liveDemo: "https://bit.ly/SAARTHI_IEEE",
      period: "2019 - 2020",
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              expandedProject === project.id ? "expanded" : ""
            }`}
            onClick={() => toggleProject(project.id)}
          >
            <div className="project-header">
              <div className="project-title-wrapper">
                <h2>{project.title}</h2>
                {project.period && (
                  <p className="project-period">{project.period}</p>
                )}
              </div>
            </div>

            {expandedProject === project.id && (
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  <h3>Technologies</h3>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.id > 1 ? (
                      <FaExternalLinkAlt />
                    ) : (
                      <FaExternalLinkAlt />
                    )}
                    {project.id > 1 ? "Research Paper" : "Demo"}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
