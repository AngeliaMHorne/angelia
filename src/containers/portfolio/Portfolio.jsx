import React, { useState } from "react";
import './portfolio.css';
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