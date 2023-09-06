import React, { useState } from 'react';

const Sections: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);

  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId.replace('#', '')); 
    scrollToSection(sectionId);
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="#about" className={`navigation-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('#about')}>
            <span className="mi-span active"></span>
            <span className='nav__span active'>About</span>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#education" className={`navigation-link ${activeSection === 'education' ? 'active' : ''}`} onClick={() => handleSectionClick('#education')}>
            <span className="mi-span"></span>
            <span className='nav__span'>Education</span>
          </a>
        </li>
        <li className="navigation-item">
          <a href="#projects" className={`navigation-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleSectionClick('#projects')}>
            <span className="mi-span"></span>
            <span className='nav__span'>Projects</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sections;
