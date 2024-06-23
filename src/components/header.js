import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='header'>
      <h1 className='title'>Lawyer Recommendation</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`menu-bar ${showMenu ? 'show' : ''}`} id="menuBar">
        <Link className="menu-links" to="/">
          Home
        </Link>
        <Link className="menu-links" to="/about">
          About
        </Link>
        <Link className="menu-links" to="/lawyers" >
          Advocates
        </Link>
        <Link className="menu-links" to="/Contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
