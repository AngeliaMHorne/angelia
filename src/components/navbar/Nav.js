import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
           </ul>
        </div>
  );

  

}

export default Nav;