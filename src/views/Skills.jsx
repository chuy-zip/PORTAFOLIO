import React from 'react';

const skillsByLevel = {
  Tech: [
    "Git / GitHub",
    "JavaScript",
    "Python",
    "React",
    "Express",
    "Docker",
    "AWS S3",
    "Next.js"
  ],
  Skills: [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Backend Development"
  ],
  DB: [
    "PostgreSQL",
    "MongoDB",
  ]
};

function Skills() {
  return (
    <div id="SkillsSection">
      <h2 className='secondTitle'></h2>
      <div className="TwoColumnContainer">
        <div className="skillsCode">
          <h2 className='secondTitle'>Skills</h2>
        </div>
        <div className="custom-list-cont">
          <div className="skills-grid">
            {Object.entries(skillsByLevel).map(([level, skills]) => (
              <div className="skill-category" key={level}>
                <h3 className="skill-level-title">{level}</h3>
                <ul className="skill-list">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;