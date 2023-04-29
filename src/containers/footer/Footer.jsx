import React from 'react'
import { Link } from "react-router-dom";
import logo2 from '../../assets/logo.png';
import "./footer.css";

const Footer = () => {

  return(
    <div className="footer_container">
      <div className="footer_container_links">
        <div className="footer_container_nav">
          <ul>
            <li>Navigation</li>           
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
          </ul>
        </div>
        <div className="footer_copyright">
          Copyright 2023 Angelia Horne
        </div>
        <div className="footer_container_logo">
          <img src={logo2} alt="Angelia Horne" />
        </div>
      </div>
    </div>
  );

  

}

export default Footer;