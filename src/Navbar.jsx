import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faLinkedinIn, faGithub,faHackerrank  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
     <div className="cursor-1"></div>
      <div className="cursor-2"></div>
      <div className={`menu-bar ${isActive ? 'active' : ''}`} id="menu-bars" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isActive ? faTimes : faBars} />
      </div>
      <header className={isActive ? 'active' : ''}>
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="#home" className='a'>home</a>
          <a href="#about" className='a'>about</a>
          <a href="#training" className='a'>training</a>

          <a href="#experience" className='a'>experience</a>
          <a href="#projects" className='a'>projects</a>

          <a href="#contact" className='a'>contact</a>
        </nav>

        <div className={`follow ${isActive ? 'active' : ''}`}>
          <Link to='https://www.instagram.com/chitra_shrivastava/'> <FontAwesomeIcon icon={faInstagram} className='a' /> </Link>
          <Link to='https://www.linkedin.com/in/chitra-shrivastava-60878327a/'><FontAwesomeIcon icon={faLinkedinIn} className='a'/> </Link>
          <Link to='https://github.com/chitrashrivastava'><FontAwesomeIcon icon={faGithub} className='a'/> </Link>

        </div>
      </header>
    </>
  );
};

export default Navbar;