import React, { useState } from 'react';
import projects from '../../assets/projects.json';

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

    return (
        <section id='projects' className="projects">
            <h2>Projets</h2>
            <div className="projects-container">
                {currentItems.map((project, index) => (
                    <div key={index} className="project-card">
                        <img className='project-img' src={project.image} alt={`${project.nom} logo`} />
                        <h2>{project.nom}</h2>
                        <p>Technologies utilisées : {project.technologies.join(', ')}</p>
                        <a href={project.lienGitHub} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {pages.map(number => (
                    <button key={number} onClick={() => setCurrentPage(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </section>
    );
}
