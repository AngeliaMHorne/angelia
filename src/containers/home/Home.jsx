import React from 'react';
import './home.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';



const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;