import React, { useState } from 'react';

const Sections: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="#about" className={`navigation-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('#about')}>
            <span className="mi-span"></span>
            <span>About</span>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#education" className={`navigation-link ${activeSection === 'education' ? 'active' : ''}`} onClick={() => handleSectionClick('#education')}>
            <span className="mi-span"></span>
            <span>Education</span>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#projects" className={`navigation-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleSectionClick('#projects')}>
            <span className="mi-span"></span>
            <span>Projects</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sections;
