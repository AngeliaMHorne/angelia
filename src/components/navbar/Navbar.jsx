import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="ah__navbar-container">
        <div className="ah__navbar-logo">
          <img src={logo} alt="Angelia" />
        </div>
        <div className="ah__navbar-heading">
          <h6>Angelia Horne</h6>
        </div>
        <nav className="ah__navbar-links">
            <ul className="ah__navbar-list">
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
