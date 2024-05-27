import React, { useState } from "react";
import projects from "../../projects.json";
import github from "../../assets/github.webp";


export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(projects.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <div className="projects-container">
        {currentItems.map((project, index) => (
          <div key={index} className="project-card">
            <img
              className="project-img"
              src={project.image}
              alt={`${project.nom} logo`}
            />
            <h2>{project.nom}</h2>
            <div className="info">
              <p>
                <span className="info-type">Technologies utilisées :</span>{" "}
                {project.technologies.join(", ")}
              </p>
              <p>
                <span className="info-type">Description:</span>{" "}
                {project.description}
              </p>
            </div>
            <a
              className="project-link"
              href={project.lienGitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Logo Github" />
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {pages.map((number) => (
          <button key={number} onClick={() => handlePageChange(number)}
          className={number === currentPage ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
}
