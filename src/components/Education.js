import React, { useState } from "react";
import "../styles/Education.css";

const Education = () => {
  const [expandedEducation, setExpandedEducation] = useState(null);
  
  const toggleEducation = (id) => {
    if (expandedEducation === id) {
      setExpandedEducation(null);
    } else {
      setExpandedEducation(id);
    }
  };

  const education = [
    {
      id: 1,
      institution: "University of Southern California",
      degree: "Master of Science",
      field: "Computer Science",
      startDate: "August 2023",
      endDate: "May 2025",
      description:
        "Relevant Courses: Analysis of Algorithms, Database Systems, Web Technologies, Machine Learning for Data Science, Security Systems, Foundations of Artificial Intelligence, Information Retrieval and Web Search Engines. CGPA: 3.7/4",
      skills: ["Algorithms", "Database Systems", "Web Technologies", "Machine Learning", "Security Systems", "AI"]
    },
    {
      id: 2,
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      startDate: "August 2017",
      endDate: "July 2021",
      description:
        "Relevant Courses: Data Structures, Advance Algorithms, Operating System, Computer Network, Computer Organization, Computer Graphics, Data Warehousing & Mining, Machine Learning, Artificial Intelligence. CGPA: 9.55/10",
      skills: ["Data Structures", "Algorithms", "Operating System", "Computer Networks", "Machine Learning", "AI"]
    },
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-timeline">
        {education.map((edu) => (
          <div 
            key={edu.id} 
            className={`education-item ${expandedEducation === edu.id ? "expanded" : ""}`}
            onClick={() => toggleEducation(edu.id)}
          >
            <div className="education-header">
              <div className="header-content">
                <h2>{edu.institution}</h2>
                <h3>
                  {edu.degree} in {edu.field}
                </h3>
              </div>
              <div className="header-right">
                <p className="date">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
            
            {expandedEducation === edu.id && (
              <div className="education-details">
                <p className="education-description">{edu.description}</p>
                <div className="skills">
                  <h4>Key Subjects:</h4>
                  <div className="skills-container">
                    {edu.skills.map((skill, index) => (
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

export default Education;
