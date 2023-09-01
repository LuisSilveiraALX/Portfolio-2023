import React from 'react';
import About from '../about/about';
import Navigation from '../nav/nav';
import Sections from '../sections/sections';
import Education from '../education/education';
import Proyects from '../proyects/proyects';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="left-column">
        <header className="home-header">
          <div className="header-content">
            <h1 className='ls-title'>Luis Silveira</h1>
            <span className="subtitle">Full-Stack Developer</span>
            <p className='ls-description'>I’m a passionate for design and code. I love solving real-world problems and looking for my first formal work experience.</p>
            <Sections />
            <Navigation />
          </div>
        </header>
      </div>
      <div className="right-column">
      <h1 className='text-visible'>About</h1>
        <About />
        <h1 className='text-visible'>Education</h1>
        <Education />
        <h1 className='text-visible'>Projects</h1>
        <Proyects />
        
      </div>
    </div>
  );
};

export default Home;
