import React, { useState } from "react";
import './apps.css';
import lemon from '../../assets/thumbs/Rectangle.png';
import rustic from '../../assets/thumbs/rusticrootslogo1.png';
import luxxe from '../../assets/thumbs/Luxxe.png';
import batty from '../../assets/thumbs/bblogo1.png';
import artbeat from '../../assets/thumbs/artbeat.png';
import shapeshifter from '../../assets/thumbs/shapeshifter.png';


function Apps() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    {
      src: lemon,
      link: "https://angelia.seedofchaos.com/portfolio/apps/little-lemon",
      target: "_blank",
      rel: "noreferrer",
      alt: "Little Lemon",
    },
    {
      src: rustic,
      link: "https://angelia.seedofchaos.com/portfolio/apps/rustic-roots",
      target: "_blank",
      rel: "noreferrer",
      alt: "Rustic Roots",
    },
    {
      src: luxxe,
      link: "#",
      target: "_blank",
      rel: "noreferrer",
      alt: "Luxxe Gallery",
    },
    {
      src: batty,
      link: "#",
      target: "_blank",
      rel: "noreferrer",
      alt: "Batty Brigade",
    },
    {
      src: artbeat,
      link: "#",
      target: "_blank",
      rel: "noreferrer",
      alt: "ArtBeat",
    },
    {
      src: shapeshifter,
      link: "#",
      target: "_blank",
      rel: "noreferrer",
      alt: "ShapeShifter",
    },
  ];

  const handlePrevClick = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const currentImage = images[imageIndex];

  return (
    <div className="apps">
        <h2>
          Apps
        </h2>
        <div className="slideshow-container">
          <a href={currentImage.link} target={currentImage.target} rel={currentImage.rel}>
            <img src={currentImage.src} alt={currentImage.alt} />
          </a>
            <div className="slideshow-buttons">
              <button onClick={handlePrevClick}>Prev</button>
              <button onClick={handleNextClick}>Next</button>
            </div>
      </div>
    </div>
  );
}

export default Apps;