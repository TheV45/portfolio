import React, { useState } from "react";
import "../styles/Experience.css";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExperience = (id) => {
    if (expandedExperience === id) {
      setExpandedExperience(null);
    } else {
      setExpandedExperience(id);
    }
  };

  const experiences = [
    {
      id: 1,
      company: "Google (via Artech)",
      position: "Software Engineer",
      location: "San Jose, California",
      startDate: "July 2025",
      endDate: "Current",
      description:
        "• Analyzed and curate large-scale LLM datasets, develop evaluation rubrics, and ensure alignment with project-specific goals\n• Leverage python and prompt engineering to support end-to-end workflows in LLM data quality, evaluation, and analysis",
      skills: ["Python", "LLM", "Prompt Engineering", "Data Analysis"],
    },
    {
      id: 2,
      company: "Newmark",
      position: "Software Development Engineer Intern - AI",
      location: "Manhattan, New York",
      startDate: "June 2024",
      endDate: "August 2024",
      description:
        "• Implemented a RAG pipeline leveraging Large Language Models (LLM) and Vector Database for automatic data validation of information extracted from offering memorandums with 82% accuracy, eliminating manual verification\n• Enhanced internal website by developing new web pages, performing code reviews, bug fixing and optimizing backend APIs for better data handling, automation, improved code quality and system performance",
      skills: ["Angular", "ASP.NET", "C#", "TypeScript", "Python"],
    },
    {
      id: 3,
      company: "Larsen & Toubro Infotech Mindtree",
      position: "Senior Software & Data Engineer",
      location: "Mumbai, Maharashtra",
      startDate: "June 2021",
      endDate: "May 2023",
      description:
        "• Managed and optimized CRM Data Migration process by building scalable ETL pipelines, increasing migration speed by 35%\n• Leveraged Kafka for real-time data ingestion, ensuring efficient data flow across systems\n• Developed RESTful APIs to enable seamless data exchange between ETL pipeline and cloud-based platforms\n• Handled end-to-end troubleshooting and maintenance of data pipelines, ensuring smooth data migration and analytics process",
      skills: [
        "Python",
        "Kafka",
        "Informatica Data Quality",
        "ORACLE",
        "Power BI",
      ],
    },
    {
      id: 4,
      company: "Vivekanand Education Society's Institute of Technology",
      position: "Web Developer and Designer",
      location: "Mumbai, Maharashtra",
      startDate: "August 2019",
      endDate: "February 2021",
      description:
        "• Constructed an online college web portal. The key aim of the website is to engage and educate existing and potential students regarding departments, professors, alumni, and related information. This initiative resulted in a 62% increase in college inquires\n• Designed website's architecture, developed its front end, integrated it with backend, and ensured maintainable, scalable code",
      skills: ["HTML5", "CSS3", "Bootstrap", "PHP", "Laravel", "MySQL"],
    },
  ];

  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`experience-item ${
              expandedExperience === exp.id ? "expanded" : ""
            }`}
            onClick={() => toggleExperience(exp.id)}
          >
            <div className="experience-header">
              <div className="header-content">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <p className="location">{exp.location}</p>
              </div>
              <div className="header-right">
                <p className="date">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
            </div>

            {expandedExperience === exp.id && (
              <div className="experience-details">
                <div className="description-points">
                  {exp.description.split("\n").map((point, index) => (
                    <p key={index} className="description-point">
                      {point}
                    </p>
                  ))}
                </div>
                <div className="skills">
                  <h4>Technologies:</h4>
                  <div className="skills-container">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
