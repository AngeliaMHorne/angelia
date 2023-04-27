import React, { useState } from "react";
import './portfolio.css';
import lemon from '../../assets/thumbs/Rectangle.png';
import rustic from '../../assets/thumbs/rusticrootslogo1.png';
import luxxe from '../../assets/thumbs/Luxxe.png';
import batty from '../../assets/thumbs/bblogo1.png';
import artbeat from '../../assets/thumbs/artbeat.png';
import Apps from "../../components/apps/Apps";
import Certs from "../../components/certs/Certs";


function Portfolio() {

  return (
    <div className="portfolio_container">
      <Apps />
      <Certs />
    </div>
  );
}

export default Portfolio;