import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const skills = {
    "Programming Languages": [
      "C",
      "C++",
      "Java",
      "Python",
      "Scala",
      "R",
      "C#",
      "Go",
      "PHP",
      "Swift",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    "Frameworks & Libraries": [
      "Django",
      "Laravel",
      "Angular",
      "React.js",
      "Node.js",
      "Vue.js",
      "Spring Boot",
      "Flask",
      "ASP.NET",
    ],
    Databases: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
    "Tools & Technologies": [
      "Git",
      "JIRA",
      "JUnit",
      "Selenium",
      "Azure",
      "AWS",
      "GCP",
      "Kafka",
      "Docker",
      "Kubernetes",
      "SwiftUI",
      "Informatica Data Quality",
      "Talend",
      "Power BI",
      "Tableau",
      "MATLAB",
      "Scikit-Learn",
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="skills-section">
          <h2>Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/TheV45"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinit-motwani-b40b58199/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:vinitmotwani10@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Vinit Motwani. All rights reserved.
        </p>
        <p className="contact-info">
          San Jose, CA | (323) 529-2116 | vinitmotwani10@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
