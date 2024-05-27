import React, { useState } from 'react';

export default function Nav() {
  const [activeLink, setActiveLink] = useState('#about');

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a
              className={activeLink === '#about' ? 'active' : ''}
              href="#about"
              onClick={() => handleLinkClick('#about')}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              className={activeLink === '#skills' ? 'active' : ''}
              href="#skills"
              onClick={() => handleLinkClick('#skills')}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              className={activeLink === '#projects' ? 'active' : ''}
              href="#projects"
              onClick={() => handleLinkClick('#projects')}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              className={activeLink === '#contact' ? 'active' : ''}
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}