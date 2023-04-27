import React, { useState } from "react";
import './apps.css';
import lemon from '../../assets/thumbs/Rectangle.png';
import rustic from '../../assets/thumbs/rusticrootslogo1.png';
import luxxe from '../../assets/thumbs/Luxxe.png';
import batty from '../../assets/thumbs/bblogo1.png';
import artbeat from '../../assets/thumbs/artbeat.png';
import Certs from '../../components/certs/Certs';


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
      link: "#",
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
        <h1>
          Apps
        </h1>
      <div className="slideshow-container">
        <img src={currentImage.src} alt={currentImage.alt} onClick={() => window.location.href = currentImage.link} />
        <div className="slideshow-buttons">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Apps;