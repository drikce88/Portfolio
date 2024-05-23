import React from "react";
import htmlLogo from "../../../public/assets/images/html5.webp";
import cssLogo from "../../../public/assets/images/css3.webp";
import sassLogo from "../../../public/assets/images/sass.webp";
import jsLogo from "../../../public/assets/images/javascript.webp";
import reactLogo from "../../../public/assets/images/react.webp";

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
