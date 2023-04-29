import React from 'react';
import './main.css';
import logo from '../../assets/logo.png';


const Main = () => {
  return (
    <main>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus mauris. Nunc vel mauris tellus. Nulla bibendum massa ut turpis viverra commodo. Nulla eget est vel justo volutpat blandit non non velit. Aliquam ut mi in odio luctus aliquet sit amet eget nibh. Donec dignissim, libero vitae aliquam feugiat, odio urna ornare sem, eu lacinia enim nunc quis ex.</p>
    <img src={logo} alt="Angelia Horne Logo" />
    </main>
  )
}

export default Main;