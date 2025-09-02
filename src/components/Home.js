import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="profile-section">
          <h1>Vinit Motwani</h1>
          <h3>Software Engineer</h3>
        </div>

        <div className="about-section">
          <h2>About Me</h2>
          <p>
            Experienced Software Engineer with a strong background in full-stack
            development, data engineering, and AI/ML technologies. Currently
            working at Google with expertise in LLM data quality and analysis.
            Master's degree in Computer Science from USC and a passion for
            building scalable, efficient software solutions.
          </p>
        </div>

        <div className="section-links">
          <a href="#education" className="section-link">
            Education
          </a>
          <a href="#experience" className="section-link">
            Work Experience
          </a>
          <a href="#projects" className="section-link">
            Projects
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/TheV45"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={30} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vinit-motwani-b40b58199/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={30} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:vinitmotwani10@gmail.com" className="social-link">
            <FaEnvelope size={30} />
            <span>Email</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1VhKmOUr0gJQA42P3YN_NCHlleBIXXfN5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFilePdf size={30} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
