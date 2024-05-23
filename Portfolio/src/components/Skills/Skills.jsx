import React from "react";
import htmlLogo from "../../assets/images/html5.webp";
import cssLogo from "../../assets/images/css3.webp";
import sassLogo from "../../assets/images/sass.webp";
import jsLogo from "../../assets/images/javascript.webp";
import reactLogo from "../../assets/images/react.webp";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: htmlLogo, mastery: 95 },
    { name: "CSS", logo: cssLogo, mastery: 90 },
    { name: "SASS", logo: sassLogo, mastery: 85 },
    { name: "JavaScript", logo: jsLogo, mastery: 85 },
    { name: "React", logo: reactLogo, mastery: 90 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={`${skill.name} logo`} />
            <div className="mastery-bar">
              <div
                className="mastery-level"
                style={{ width: `${skill.mastery}%` }}
              ></div>
            </div>
            <span className="mastery-percentage">{skill.mastery}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
