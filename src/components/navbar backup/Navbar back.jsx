import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenusys, setToggleMenusys] = useState(false);

  return (
    <div className="ah__navbar">
      <div className="ah__navbar-links">
        <div className="ah__navbar-links_logo">
          <img src={logo} alt="Angelia" />
        </div>
        <div className="ah__navbar-name">
          <h6>Angelia Horne</h6>
        </div>
        <nav className="ah__navbar-links_container">
          <div className="navbar">
            <ul className="nav-links">
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
            </ul>
          </div>
        </nav>
        <div className="ah__navbar-menusys">
          {toggleMenusys ? (
            <RiCloseLine
              color="#BF9D7D"
              size={27}
              onClick={() => setToggleMenusys(false)}
            />
          ) : (
            <RiMenu3Line
              color="#BF9D7D"
              size={27}
              onClick={() => setToggleMenusys(true)}
            />
          )}
          {toggleMenusys && (
            <div className="ah__navbar-menusys_container scale-up-center">
              <div className="ah__navbar-menusys_container-links">
                <div className="navbar">
                  <ul className="nav-links">
                    <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                    <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
                    <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
                    <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
