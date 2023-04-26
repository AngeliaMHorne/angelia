import React from 'react';
import './portfolio.css';
import lemon from '../../assets/thumbs/Rectangle.png';
import rustic from '../../assets/thumbs/rusticrootslogo1.png';
import luxxe from '../../assets/thumbs/Luxxe.png';
import batty from '../../assets/thumbs/bblogo1.png';
import artbeat from '../../assets/thumbs/artbeat.png';


const Portfolio = () => {
  return (
    <div className="port">
      <h1>App Designs</h1>
      <div className="app-links">
        <a href="https://angelia.seedofchaos.com/portfolio/apps/little-lemon" target="_blank" rel="noreferrer"><img src={lemon} alt="Little Lemon"></img></a>
        <a href="#" target="_blank" rel="noreferrer"><img src={rustic} alt="Rustic Roots"></img></a>
        <a href="#" target="_blank" rel="noreferrer"><img src={luxxe} alt="Luxxe Gallery"></img></a>
        <a href="#" target="_blank" rel="noreferrer"><img src={batty} alt="Batty Brigade"></img></a>
        <a href="#" target="_blank" rel="noreferrer"><img src={artbeat} alt="ArtBeat"></img></a>
      </div>
    </div>
  )
}

export default Portfolio;